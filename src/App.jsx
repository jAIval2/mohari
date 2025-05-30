import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductsPage.jsx';
import ProductDetails from './components/product/ProdDetails.jsx';    
import AboutUs from './pages/AboutUs.jsx';
import Profile from './pages/Profile.jsx';
import CartNCheckout from './pages/CartNCheckout.jsx';
import AddProduct from './pages/AddProduct.jsx';
import Orders from './pages/Orders.jsx';
import Favourites from './pages/Favourites.jsx';
import ConfirmationPage from './pages/ConfirmationPage.jsx';
import OrderDetails from './pages/OrderDetails.jsx';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<CartNCheckout />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/favorites" element={<Favourites />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/order-details/:orderId" element={<OrderDetails />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
