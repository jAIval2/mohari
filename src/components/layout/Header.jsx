import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext'; // Import AuthContext hook
import AuthPage from '../auth/AuthPage';
import FavoriteIcon from '../../assets/icons/favorite (1).svg';
import PersonIcon from '../../assets/icons/person.svg';
import CartIcon from '../../assets/icons/Cart 4.svg';
import HomeIcon from '../../assets/icons/Home 1.svg';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, userData, logout } = useAuth(); // Destructure logout from context
  
  const [headerStyle, setHeaderStyle] = useState({
    textColor: 'white',
  });
  const [selected, setSelected] = useState('/');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const currentScroll = window.pageYOffset;
      let currentSectionIndex = 0;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
          currentSectionIndex = index;
        }
      });

      // Determine header style based on section index
      if (currentSectionIndex % 2 === 0) {
        setHeaderStyle({
          textColor: 'black',
        });
      } else {
        setHeaderStyle({
          textColor: 'white',
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getActiveStyle = (path) => {
    return selected === path
      ? {
          borderRadius: '63px',
          padding: '0 10px',
          border: '2px solid #6F3A19',
          transition: 'width 0.3s',
        }
      : {};
  };

  const handleAuthClick = () => {
    if (currentUser) {
      setIsProfileMenuOpen(!isProfileMenuOpen);
    } else {
      setIsAuthOpen(true);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // Redirect to home after logout
    } catch (error) {
      console.error('Logout Error:', error);
      // Optionally, handle logout errors here
    }
  };

  const profileMenuItems = [
    { label: 'Profile', path: '/profile' },
    { label: 'Orders', path: '/orders' },
    { label: 'Favorites', path: '/favorites' },
    { label: 'Settings', path: '/settings' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col lg:flex-row items-center justify-between px-5 py-3 transition-all duration-300`}
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Top Row: Left Navigation and Right Icons */}
      <div className="w-full flex items-center justify-between">
        {/* Left section with navigation */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => { setSelected('/'); navigate('/'); }} 
            style={getActiveStyle('/')}
            className="flex items-center focus:outline-none"
          >
            <img src={HomeIcon} alt="Home" className="w-6 h-6" />
          </button>
          <button 
            onClick={() => { setSelected('/products'); navigate('/products'); }} 
            style={getActiveStyle('/products')}
            className="focus:outline-none"
          >
            <span 
              className="text-sm hedvig" 
              style={{ color: headerStyle.textColor }}
            >
              Products
            </span>
          </button>
          <button 
            onClick={() => { setSelected('/about'); navigate('/about'); }} 
            style={getActiveStyle('/about')}
            className="focus:outline-none"
          >
            <span 
              className="text-sm hedvig" 
              style={{ color: headerStyle.textColor }}
            >
              About
            </span>
          </button>
        </div>

        {/* Right section with icons */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/favorites')}
            className="relative focus:outline-none"
          >
            <img src={FavoriteIcon} alt="Favorite" className="w-6 h-6" />
            {currentUser && userData?.favouritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {userData.favouritesCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => navigate('/cart')}
            className="focus:outline-none"
          >
            <img src={CartIcon} alt="Cart" className="w-6 h-6" />
          </button>
          <div className="relative">
            <button 
              onClick={handleAuthClick}
              className="focus:outline-none"
            >
              {currentUser ? (
                <div className="w-6 h-6 rounded-full bg-[#6F3A19] flex items-center justify-center">
                  <span className="text-white text-sm">
                    {userData?.email ? userData.email.charAt(0).toUpperCase() : 'G'}
                  </span>
                </div>
              ) : (
                <img src={PersonIcon} alt="Person" className="w-6 h-6" />
              )}
            </button>

            {/* Profile dropdown menu */}
            {currentUser && isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {profileMenuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(item.path)}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <hr className="my-1" />
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Logo: Visible on large screens (absolute positioning) */}
      <a 
        href="/" 
        className="hidden lg:block text-4xl font-kalam transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ color: '#6F3A19', WebkitTextStroke: '1px #6F4000' }}
      >
        मोहरी
      </a>

      {/* Logo: Visible on small screens (stacked below) */}
      <a 
        href="/" 
        className="lg:hidden text-3xl font-kalam mt-3 text-center text-[#6F3A19] transition-colors duration-300"
        style={{ WebkitTextStroke: '1px #6F4000' }}
      >
        मोहरी
      </a>

      {/* Auth modal */}
      {isAuthOpen && (
        <AuthPage onClose={() => setIsAuthOpen(false)} />
      )}
    </header>
  );
}

export default Header;