import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, subscribeToProductUpdates } from '../../firebase/firebaseServices';
import { useCart } from '../../context/CartContext';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CartIcon from '../../assets/icons/Cart 3.svg';

const ProdDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, error: cartError } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // States for available sizes and colors based on variants
  const [availableSizes, setAvailableSizes] = useState([]);
  const [availableColors, setAvailableColors] = useState([]);

  useEffect(() => {
    let unsubscribe;

    const initializeProduct = async () => {
      try {
        // Initial fetch
        const productData = await getProductById(id);
        if (!productData) {
          setError('Product not found');
          return;
        }
        
        updateProductData(productData);

        // Subscribe to real-time updates with immediate callback
        unsubscribe = subscribeToProductUpdates(id, (updatedProduct) => {
          if (updatedProduct) {
            console.log('Product updated:', updatedProduct); // Debug log
            updateProductData(updatedProduct);
            
            // Update quantity if it exceeds new stock
            const currentVariant = updatedProduct.variants.find(
              v => v.size === selectedSize && v.color === selectedColor
            );
            
            if (currentVariant && quantity > currentVariant.stock) {
              setQuantity(Math.max(1, currentVariant.stock));
            }
          }
        });

      } catch (err) {
        setError('Failed to load product details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    initializeProduct();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [id, selectedSize, selectedColor, quantity]);

  // Helper function to update product data and derived states
  const updateProductData = (productData) => {
    setProduct(productData);

    // Update available sizes and colors
    const sizes = [...new Set(productData.variants
      .filter(variant => variant.stock > 0) // Only show sizes with stock
      .map(variant => variant.size))];
    
    const colors = [...new Set(productData.variants
      .filter(variant => variant.stock > 0) // Only show colors with stock
      .map(variant => variant.color))];
    
    setAvailableSizes(sizes);
    setAvailableColors(colors);

    // Reset selections if current selection is no longer valid
    const currentVariant = productData.variants.find(
      v => v.size === selectedSize && v.color === selectedColor
    );

    if (currentVariant && currentVariant.stock === 0) {
      setSelectedSize('');
      setSelectedColor('');
      setQuantity(1);
    }
  };

  /**
   * Finds the variant based on selected size and color.
   * @returns {Object|null} - The selected variant or null if not found.
   */
  const getSelectedVariant = () => {
    if (!selectedSize || !selectedColor) return null;
    return product.variants.find(
      (variant) => variant.size === selectedSize && variant.color === selectedColor
    );
  };

  const handleAddToCartClick = async () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color.');
      return;
    }

    const selectedVariant = getSelectedVariant();

    if (!selectedVariant) {
      alert('Selected variant does not exist.');
      return;
    }

    if (selectedVariant.stock === 0) {
      alert('This variant is out of stock.');
      return;
    }

    if (quantity > selectedVariant.stock) {
      alert(`Only ${selectedVariant.stock} items available for the selected variant.`);
      return;
    }

    try {
      await addToCart(product, quantity, selectedSize, selectedColor);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert(cartError || 'Failed to add to cart.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-[100px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6F3A19]"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-[100px]">
        <p className="text-red-500">{error || 'Product not found'}</p>
      </div>
    );
  }

  // Determine if the selected variant is out of stock
  const isVariantOutOfStock = () => {
    if (!selectedSize || !selectedColor) return false;
    const variant = getSelectedVariant();
    return variant ? variant.stock === 0 : false;
  };

  // Get the current stock for the selected variant
  const currentVariantStock = () => {
    if (!selectedSize || !selectedColor || !product) return 0;
    const variant = getSelectedVariant();
    return variant ? variant.stock : 0;
  };

  return (
    <div className="min-h-screen">

      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8 pt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                src={product.primaryImage || 'https://via.placeholder.com/300x200.png?text=Primary+Image'}
                alt={product.name}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.additionalImages?.map((image, index) => (
                <img
                  key={index}
                  src={image || 'https://via.placeholder.com/100x100.png?text=Image'}
                  alt={`${product.name} view ${index + 1}`}
                  className="aspect-square object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-2xl text-[#6F3A19]">₹{product.price}</p>

            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Sizes */}
            {availableSizes && availableSizes.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Size</h2>
                <div className="flex flex-wrap gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        // Reset color selection when size changes
                        setSelectedColor('');
                      }}
                      className={`px-4 py-2 border rounded-md ${
                        selectedSize === size
                          ? 'border-[#6F3A19] bg-[#6F3A19] text-white'
                          : 'border-gray-300 hover:border-[#6F3A19]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {availableColors && availableColors.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Color</h2>
                <div className="flex flex-wrap gap-2">
                  {availableColors.map((color) => {
                    // Determine if the selected size allows this color and has available stock
                    const isColorAvailable = product.variants.some(
                      (variant) =>
                        variant.color === color &&
                        variant.size === selectedSize &&
                        variant.stock > 0
                    );
                    return (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        disabled={!isColorAvailable}
                        className={`px-4 py-2 border rounded-md ${
                          selectedColor === color
                            ? 'border-[#6F3A19] bg-[#6F3A19] text-white'
                            : 'border-gray-300 hover:border-[#6F3A19]'
                        } ${!isColorAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
                        title={!isColorAvailable ? 'This color is unavailable for the selected size.' : ''}
                      >
                        {color}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <label htmlFor="quantity" className="block text-gray-700 mb-2">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max={currentVariantStock()}
                value={quantity}
                onChange={(e) => setQuantity(
                  Math.min(currentVariantStock(), Math.max(1, parseInt(e.target.value) || 1))
                )}
                className="w-20 px-3 py-2 border rounded"
                disabled={!selectedSize || !selectedColor}
              />
              {selectedSize && selectedColor && (
                <p className="text-sm text-gray-600 mt-1">
                  Available Stock: {currentVariantStock()}
                </p>
              )}
            </div>

            {/* Add to Cart Button and Confirmation */}
            <div className="relative">
              <button 
                onClick={handleAddToCartClick}
                disabled={isVariantOutOfStock()}
                className={`w-full bg-[#6F3A19] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 relative ${
                  isVariantOutOfStock() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#8B533B] transition-colors duration-300'
                }`}
              >
                {isVariantOutOfStock() ? 'Out of Stock' : (
                  <>
                    <img src={CartIcon} alt="cart" className="w-6 h-6" />
                    Add to Cart
                  </>
                )}
              </button>

              {/* Overlay for Out of Stock */}
              {isVariantOutOfStock() && (
                <div className="absolute inset-0 bg-red-500 bg-opacity-50 flex items-center justify-center rounded-lg">
                  <span className="text-white font-semibold">Out of Stock</span>
                </div>
              )}

              {/* Added to Cart Confirmation */}
              {isAdded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                    <p className="text-[#6F3A19] font-semibold mb-2">Added to Cart!</p>
                    <button
                      onClick={() => navigate('/cart')}
                      className="text-sm text-[#6F3A19] hover:underline"
                    >
                      View Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>        
        </div>

        {/* Details and Reviews Section */}
        <div className="mt-12">
          {/* Details Section */}
          <div className="border-b mb-6">
            <h2 className="text-2xl font-semibold">Details</h2>
          </div>
          <div className="space-y-4 mb-12">
            <p><strong>Material:</strong> {product.details.material}</p>
            <p><strong>Dimensions:</strong> {product.details.dimensions}</p>
            <p><strong>Care Instructions:</strong> {product.details.careInstructions}</p>
            <p><strong>Warranty:</strong> {product.details.warranty}</p>
            {/* Add more detailed information as needed */}
          </div>

          {/* Reviews Section */}
          <div className="border-b mb-6">
            <h2 className="text-2xl font-semibold">Reviews</h2>
          </div>
          <div className="space-y-4">
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review) => (
                <div key={review.id} className="border p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">{review.user}</h3>
                  <p className="text-sm text-gray-500">
                    {'⭐'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </p>
                  <p className="mt-2">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No reviews yet. Be the first to review!</p>
            )}
            {/* Optional: Add a form for submitting new reviews */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProdDetails;
