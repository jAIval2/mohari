import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import Footer from '../components/layout/Footer';
import VideoDuvet from '../assets/images/duvet.mp4'; // Import video for duvet
import VideoBedding from '../assets/images/bedding.mp4'; // Import video for bedding
import VideoMattress from '../assets/images/mattress.mp4'; // Import video for mattress
import VideoPillow from '../assets/images/pillows.mp4'; // Import video for pillow
import VideoSheets from '../assets/images/sheets.mp4'; // Import video for sheets
import ProductCard from '../components/product/ProductCard'; // Import the ProductCard component
import { getAllProducts } from '../firebase/firebaseServices'; // Import Firestore fetching function

const categories = ["duvets", "bedding", "mattress", "pillow", "sheets"];
const categoryVideos = {
  duvet: VideoDuvet,
  bedding: VideoBedding,
  mattress: VideoMattress,
  pillow: VideoPillow,
  sheets: VideoSheets,
};

// Define size options based on category
const sizeOptions = {
  duvets: ['Single', 'Double', 'Queen', 'King'],
  bedding: ['Twin', 'Full', 'Queen', 'King'],
  pillow: ['Standard', 'Queen', 'King'],
  mattress: ['Twin', 'Full', 'Queen', 'King', 'California King'],
  sheets: ['Twin', 'Full', 'Queen', 'King', 'California King'],
};

// Define color options
const colors = ["Red", "Blue", "Green", "Yellow", "Cyan", "Magenta"]; // Color options

const ProductsPage = () => {
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const [isSizeHovered, setIsSizeHovered] = useState(false);
  const [isColorHovered, setIsColorHovered] = useState(false);
  
  const [selectedCategory, setSelectedCategory] = useState(""); // Initialize as empty string
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  
  const [currentVideo, setCurrentVideo] = useState(VideoDuvet); // Default video
  const [allProducts, setAllProducts] = useState([]); // All products from Firestore
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch all products from Firestore on component mount
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setAllProducts(productsData);
        setFilteredProducts(productsData); // Initialize with all products
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to filter products based on selected filters
  const filterProducts = ({ category, size, color }) => {
    let filtered = allProducts;

    if (category) {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (size) {
      filtered = filtered.filter(
        (product) => product.sizes && product.sizes.includes(size)
      );
    }

    if (color) {
      filtered = filtered.filter(
        (product) => product.colors && product.colors.includes(color)
      );
    }

    setFilteredProducts(filtered);
  };

  const handleCategoryClick = (category) => {
    // Capitalize first letter for display
    const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);
    setSelectedCategory(displayCategory);
    setCurrentVideo(categoryVideos[category] || VideoDuvet); // Change the video based on the selected category

    // Reset selected size and color since category has changed
    setSelectedSize("");
    setSelectedColor("");

    // Filter products based on selected category
    filterProducts({ category: category.toLowerCase(), size: "", color: "" });

    // Collapse the category filter back to its original size
    setIsCategoryHovered(false);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    // Filter products based on selected size
    filterProducts({ category: selectedCategory.toLowerCase(), size, color: selectedColor });

    // Collapse the size filter back to its original size
    setIsSizeHovered(false);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    // Filter products based on selected color
    filterProducts({ category: selectedCategory.toLowerCase(), size: selectedSize, color });

    // Collapse the color filter back to its original size
    setIsColorHovered(false);
  };
  
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the product details page
  };

  return (
    <div>
      {/* Video Section */}
      <section className="h-screen bg-white flex flex-col items-center justify-center relative">
        <video 
          src={currentVideo} 
          alt={selectedCategory} 
          className="w-full max-w-4xl h-auto object-cover" 
          autoPlay
          loop 
          muted
          playsInline
        />
        <p className="mt-4 text-center text-sm md:text-base">Explore our featured products that are popular among our customers.</p>

        {/* Filters */}
        <div className="absolute bottom-0 left-0 w-full max-w-6xl mx-auto p-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            
            {/* Category Filter Div */}
            <div 
              className="p-2 cursor-pointer" 
              style={{
                backgroundColor: '#6F3A19', 
                width: isCategoryHovered ? '400px' : '80px',
                height: '47px', 
                borderRadius: '63px', 
                paddingLeft: '10px',
                transition: 'width 0.7s ease',
                display: 'flex',
                justifyContent: isCategoryHovered ? 'space-between' : 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
              onMouseEnter={() => setIsCategoryHovered(true)}
              onMouseLeave={() => setIsCategoryHovered(false)}
            >
              {isCategoryHovered ? (
                categories.map((category, index) => (
                  <button 
                    key={index} 
                    className="text-white mx-1 text-sm md:text-base" 
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))
              ) : (
                <span className="text-white text-sm md:text-base">{selectedCategory || 'Category'}</span>
              )}
            </div>

            {/* Size Filter Div */}
            <div 
              className="p-2 cursor-pointer" 
              style={{
                backgroundColor: '#6F3A19', 
                width: isSizeHovered ? '275px' : '70px',
                height: '47px', 
                borderRadius: '63px', 
                paddingLeft: '10px',
                transition: 'width 0.7s ease',
                display: 'flex',
                justifyContent: isSizeHovered ? 'space-between' : 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
              onMouseEnter={() => setIsSizeHovered(true)}
              onMouseLeave={() => setIsSizeHovered(false)}
            >
              {isSizeHovered ? (
                selectedCategory && sizeOptions[selectedCategory.toLowerCase()] ? (
                  sizeOptions[selectedCategory.toLowerCase()].map((size, index) => (
                    <button 
                      key={index} 
                      className="text-white mx-1 text-sm md:text-base" 
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))
                ) : (
                  <span className="text-white text-sm md:text-base">N/A</span>
                )
              ) : (
                <span className="text-white text-sm md:text-base">{selectedSize || 'Size'}</span>
              )}
            </div>

            {/* Color Filter Div */}
            <div 
              className="p-2 cursor-pointer" 
              style={{
                backgroundColor: '#6F3A19', 
                width: isColorHovered ? '400px' : '80px',
                height: '47px', 
                borderRadius: '63px', 
                paddingLeft: '10px',
                transition: 'width 0.7s ease',
                display: 'flex',
                justifyContent: isColorHovered ? 'space-between' : 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
              onMouseEnter={() => setIsColorHovered(true)}
              onMouseLeave={() => setIsColorHovered(false)}
            >
              {isColorHovered ? (
                colors.map((color, index) => (
                  <button 
                    key={index} 
                    className="text-white mx-1 text-sm md:text-base" 
                    onClick={() => handleColorClick(color)}
                  >
                    {color}
                  </button>
                ))
              ) : (
                <span className="text-white text-sm md:text-base">{selectedColor || 'Color'}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Display Section */}
      <section className="flex flex-col items-center justify-center p-4">
        <div 
          className="rounded-lg" 
          style={{
            backgroundColor: 'rgba(111, 58, 25, 0.5)',
            width: '1300px', 
            padding: '20px',
            margin: '20px 0'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            {loading ? (
              <div>Loading products...</div>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : (
              filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onClick={() => handleProductClick(product.id)} 
                  />
                ))
              ) : (
                <div>No products found.</div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;