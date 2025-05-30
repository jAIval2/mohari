import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Group7Icon from '../assets/icons/Group 7.svg';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import { getAllProducts } from '../firebase/firebaseServices'; // Import Firestore fetching function
import DesignerImage from '../assets/images/Designer.jpeg'; // Import background image
import HomeVideo from '../assets/images/vid.mp4'; // Import video

function HomePage() {
  const [filter, setFilter] = useState(''); // Category filter
  const [allProducts, setAllProducts] = useState([]); // All products from Firestore
  const [displayedProducts, setDisplayedProducts] = useState([]); // Products to display (first 4 based on filter)
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const section3Ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all products from Firestore on component mount
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setAllProducts(productsData);
        setDisplayedProducts(productsData.slice(0, 4)); // Initialize with first 4 products
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply filter to all products and limit to first 4
  const applyFilter = (filterValue) => {
    if (filterValue) {
      const filtered = allProducts.filter(
        (product) => product.category.toLowerCase() === filterValue.toLowerCase()
      );
      setDisplayedProducts(filtered.slice(0, 4));
    } else {
      // If no filter, show first 4 products
      setDisplayedProducts(allProducts.slice(0, 4));
    }
  };

  useEffect(() => {
    applyFilter(filter);
  }, [filter, allProducts]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      let nearestSection = null;
      let nearestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestSection = section;
        }
      });

      if (nearestSection) {
        nearestSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const debounceScroll = (() => {
      let timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(handleScroll, 100);
      };
    })();

    window.addEventListener('scroll', debounceScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', debounceScroll);
    };
  }, []);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
    if (section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopNowClick = () => {
    navigate('/products');
  };

  return (
    <div className="space-y-4 md:space-y-8">
      {/* Section 1: Responsive Hero Section */}
      <section 
        className="relative h-[80vh] md:h-screen bg-cover bg-center flex items-center justify-center" 
        style={{ 
          backgroundImage: `url(${DesignerImage})`,
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8">
          <h1 className="hedvig text-3xl md:text-5xl lg:text-[60px] mb-4 leading-tight md:leading-tight lg:leading-tight">
            Sustainable Clothing
          </h1>
          <button className="footer-button text-xs md:text-sm px-4 py-2" onClick={handleShopNowClick}>
            Shop Now
          </button>
        </div>
      </section>

      {/* Section 2: Filter Words Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-end">
        <video 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={HomeVideo} type="video/mp4" />
        </video>
        <div className="w-full flex justify-center items-end p-4 md:p-10 gap-2 md:gap-4 z-10">
          {['Duvets', 'Bedding', 'Pillow', 'Mattress', 'Sheets'].map((item, index) => (
            <span 
              key={index}
              className="text-lg md:text-2xl lg:text-4xl hedvig transition-all duration-300 opacity-20 hover:text-[#6F3A19] hover:opacity-100 hover:scale-125 cursor-pointer mx-2"
              onClick={() => handleFilterChange(item.toLowerCase())}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Section 3: Products Grid */}
      <section ref={section3Ref} className="min-h-screen bg-gray-100 px-4 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl hedvig text-center mb-6">
          Featured {filter ? `- ${filter.charAt(0).toUpperCase() + filter.slice(1)}` : ''}
        </h1>
        {loading ? (
          <div className="text-center">Loading products...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            {displayedProducts.length > 0 ? (
              displayedProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="w-full max-w-[200px]" 
                />
              ))
            ) : (
              <div className="text-center">No products found.</div>
            )}
          </div>
        )}
      </section>

      {/* Section 4: Why Mohari */}
      <section className="h-[60vh] md:h-[80vh] bg-white flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0">
          <img 
            src={Group7Icon} 
            alt="Group 7" 
            className="w-full object-cover" 
            style={{ maxHeight: '30vh', maxWidth: '100vw' }} 
          />
        </div>
        <div className="text-center z-10 px-4 md:px-8">
          <h2 className="text-xl md:text-4xl hedvig text-[#6F3A19]">Why Mohari</h2>
          <p className="mt-2 text-xs md:text-base text-gray-700">
            Discover the craftsmanship and sustainable practices that make our products unique.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <img 
            src={Group7Icon} 
            alt="Group 7" 
            className="w-full object-cover" 
            style={{ maxHeight: '30vh', maxWidth: '100vw' }} 
          />
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default HomePage;
