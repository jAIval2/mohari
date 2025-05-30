// src/components/product/ProductCard.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';
import { addFavourite, getUserFavourites } from '../../firebase/firebaseServices';
import FavouriteIcon from '../../assets/icons/favorite (1).svg'; // Path to your "Add to Favourite" icon
import FavouriteFilledIcon from '../../assets/icons/favorite.svg'; // Path to your "Favourite Filled" icon
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, onClick }) => {
  const { currentUser } = useAuth(); // Access the current authenticated user
  const { addToCart } = useCart();
  const [isFavourite, setIsFavourite] = useState(false); // Tracks if the product is already favourited
  const [loading, setLoading] = useState(false); // Indicates if an operation is in progress
  const [error, setError] = useState(null); // Stores any error messages

  // Check if the product is already in the user's favourites upon component mount or when user/product changes
  useEffect(() => {
    const fetchFavourites = async () => {
      if (currentUser) {
        try {
          const favourites = await getUserFavourites(currentUser.uid);
          const favourite = favourites.find(fav => fav.productId === product.id);
          setIsFavourite(!!favourite);
        } catch (err) {
          console.error("Error fetching favourites:", err);
        }
      }
    };

    fetchFavourites();
  }, [currentUser, product.id]);

  // Handler for adding the product to favourites
  const handleAddFavourite = async (e) => {
    e.stopPropagation(); // Prevent triggering the card's onClick event

    if (product.stock === 0) {
      setError("Cannot add out-of-stock product to favourites.");
      return;
    }

    if (!currentUser) {
      setError("Please log in to add favourites.");
      return;
    }

    if (isFavourite) {
      setError("This product is already in your favourites.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await addFavourite(currentUser.uid, product.id);
      setIsFavourite(true);
    } catch (err) {
      console.error("Error adding to favourites:", err);
      setError("Failed to add to favourites.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      onClick={onClick} 
      className="bg-white rounded-lg shadow-lg w-[200px] h-[250px] text-left overflow-hidden m-2 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      <img 
        src={product.primaryImage || 'https://via.placeholder.com/200x175'} 
        alt={product.name} 
        className="w-full h-[70%] object-cover"
      />
      <div className="p-2 flex flex-col w-full h-[30%]">
        {/* Upper 60%: Product Name */}
        <div className="flex items-center h-[60%]">
          <h3 className="text-lg font-kalam truncate">{product.name}</h3>
        </div>

        {/* Lower 40%: Price and Favourite Button */}
        <div className="flex items-center justify-between h-[40%]">
          <p className="text-gray-700 font-hedvig">₹{product.price.toFixed(2)}</p>
          <button 
            className={`bg-white border ${product.stock === 0 ? 'border-gray-400' : 'border-[#6F3A19]'} rounded p-1 hover:bg-gray-100 transition-colors duration-200 ${product.stock === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={handleAddFavourite}
            aria-label="Add to Favourite"
            disabled={loading || isFavourite || product.stock === 0}
          >
            <img 
              src={isFavourite ? FavouriteFilledIcon : FavouriteIcon} 
              alt={isFavourite ? "Favourite Filled" : "Add to Favourite"} 
              className="w-5 h-5" 
            />
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        {/* Display "Out of Stock" if applicable */}
        {product.stock === 0 && (
          <p className="text-red-500 text-sm mt-1">Out of Stock</p>
        )}
        {/* Add to Cart Button Removed */}
      </div>
    </div>
  );
};

export default ProductCard;
