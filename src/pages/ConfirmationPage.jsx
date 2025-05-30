import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { getOrderById } from '../firebase/firebaseServices';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        // Get orderId from state or URL params
        const orderId = location.state?.orderId || new URLSearchParams(location.search).get('orderId');
        
        if (!orderId) {
          setError('No order ID found');
          setLoading(false);
          return;
        }

        const fetchedOrder = await getOrderById(orderId);
        if (!fetchedOrder) {
          setError('Order not found');
        } else {
          setOrder(fetchedOrder);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching order details:", err);
        setError('Failed to load order details.');
        setLoading(false);
      }
    };

    fetchOrder();
  }, [location]);

  // Show loading state
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-8 pt-[100px]">
          <div className="flex justify-center items-center">
            <p className="text-lg">Loading order details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-8 pt-[100px]">
          <div className="text-center">
            <p className="text-red-500 text-lg mb-4">{error}</p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-[#6F3A19] text-white rounded-lg hover:bg-[#5a3216] transition-colors duration-200"
            >
              Return to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Show order details
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8 pt-[100px]">
        <main className="flex-grow bg-white p-8">
          <section className="text-center">
            <h2 className="text-4xl font-bold text-[#6F3A19] mb-4">Thank You for Your Order!</h2>
            <p className="text-lg text-gray-700 mb-8">Your order has been successfully placed.</p>
            
            {order && (
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-semibold text-[#6F3A19] mb-4">Order Details</h3>
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Order Date:</strong> {order.createdAt?.toDate().toLocaleString()}</p>
                <p><strong>Total Amount:</strong> ₹{order.totalAmount.toFixed(2)}</p>
                <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
                
                {/* Display Shipping Address */}
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-[#6F3A19] mb-2">Shipping Address</h4>
                  <p>{order.address.fullName}</p>
                  <p>{order.address.street}</p>
                  <p>{order.address.city}, {order.address.district}</p>
                  <p>{order.address.state} - {order.address.pincode}</p>
                  <p>{order.address.country}</p>
                </div>

                {/* Display Order Items */}
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-[#6F3A19] mb-2">Order Items</h4>
                  {order.cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b py-2">
                      <div className="text-left">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity}
                          {item.size && ` | Size: ${item.size}`}
                          {item.color && ` | Color: ${item.color}`}
                        </p>
                      </div>
                      <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-[#6F3A19] text-white rounded-lg hover:bg-[#5a3216] transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmationPage; 