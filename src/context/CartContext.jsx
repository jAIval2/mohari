import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProductById, updateProductStock } from '../firebase/firebaseServices';
import PropTypes from 'prop-types';

// Create the Cart Context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage whenever cartItems change
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cartItems]);

  /**
   * Add a product variant to the cart with stock validation and update.
   * @param {Object} product - The product to add.
   * @param {number} quantity - The quantity to add.
   * @param {string} size - Selected size variant.
   * @param {string} color - Selected color variant.
   */
  const addToCart = async (product, quantity = 1, size, color) => {
    setLoading(true);
    setError(null);
    try {
      // Find the selected variant
      const selectedVariant = product.variants.find(
        (variant) => variant.size === size && variant.color === color
      );

      if (!selectedVariant) {
        throw new Error('Selected variant does not exist.');
      }

      const variantId = selectedVariant.id;

      // Fetch the latest product data to get current stock
      const latestProduct = await getProductById(product.id);
      if (!latestProduct) {
        throw new Error('Product does not exist.');
      }

      const latestVariant = latestProduct.variants.find(
        (variant) => variant.id === variantId
      );

      if (!latestVariant) {
        throw new Error('Variant does not exist.');
      }

      const latestStock = latestVariant.stock;

      if (latestStock === 0) {
        throw new Error('This variant is currently out of stock.');
      }

      // Find if the variant already exists in the cart
      const existingCartItem = cartItems.find((item) => item.variantId === variantId);

      const desiredQuantity = existingCartItem
        ? existingCartItem.quantity + quantity
        : quantity;

      if (desiredQuantity > latestStock) {
        throw new Error(`Only ${latestStock} items available for this variant.`);
      }

      // Update stock in Firestore first
      await updateProductStock(product.id, variantId, -quantity);

      setCartItems((prevItems) => {
        if (existingCartItem) {
          // Update quantity if variant exists in cart
          return prevItems.map((item) =>
            item.variantId === variantId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          // Add new variant to cart
          return [
            ...prevItems,
            {
              variantId: variantId,
              productId: product.id,
              name: product.name,
              price: product.price,
              size: size,
              color: color,
              quantity: quantity,
              image: product.primaryImage,
            },
          ];
        }
      });
    } catch (err) {
      console.error('Error adding to cart:', err);
      setError(err.message);
      throw err; // Propagate error to component
    } finally {
      setLoading(false);
    }
  };

  /**
   * Remove a variant from the cart and restore stock.
   * @param {string} variantId - The ID of the variant to remove.
   */
  const removeFromCart = async (variantId) => {
    try {
      const itemToRemove = cartItems.find(item => item.variantId === variantId);
      if (itemToRemove) {
        // Restore stock before removing from cart
        await updateProductStock(
          itemToRemove.productId,
          variantId,
          itemToRemove.quantity // Add back the quantity
        );
        
        setCartItems((prevItems) => 
          prevItems.filter((item) => item.variantId !== variantId)
        );
      }
    } catch (err) {
      console.error('Error removing from cart:', err);
      setError(err.message);
    }
  };

  /**
   * Update the quantity of a variant in the cart with stock validation.
   * @param {string} variantId - The ID of the variant to update.
   * @param {number} newQuantity - The new quantity.
   */
  const updateQuantity = async (variantId, newQuantity) => {
    if (newQuantity < 1) {
      setError('Quantity cannot be less than 1.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // Find the cart item
      const cartItem = cartItems.find((item) => item.variantId === variantId);
      if (!cartItem) {
        throw new Error('Cart item does not exist.');
      }

      // Fetch the latest product data
      const latestProduct = await getProductById(cartItem.productId);
      if (!latestProduct) {
        throw new Error('Product does not exist.');
      }

      const latestVariant = latestProduct.variants.find(
        (variant) => variant.id === variantId
      );

      if (!latestVariant) {
        throw new Error('Variant does not exist.');
      }

      // Calculate stock change
      const quantityDifference = newQuantity - cartItem.quantity;
      
      // Update stock in Firestore
      await updateProductStock(cartItem.productId, variantId, -quantityDifference);

      // Update cart item quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.variantId === variantId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (err) {
      console.error('Error updating cart quantity:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Clear the entire cart and restore all stock.
   */
  const clearCart = async () => {
    try {
      // Restore stock for all items before clearing
      for (const item of cartItems) {
        await updateProductStock(
          item.productId,
          item.variantId,
          item.quantity
        );
      }
      setCartItems([]);
    } catch (err) {
      console.error('Error clearing cart:', err);
      setError(err.message);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        loading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// PropTypes for CartProvider
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;