import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useAuth } from '../components/auth/AuthContext';
import { getUserOrders } from '../firebase/firebaseServices';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchOrders = async () => {
    if (!currentUser) {
      setError('You need to be logged in to view orders.');
      setLoading(false);
      return;
    }

    try {
      const userOrders = await getUserOrders(currentUser.uid);
      setOrders(userOrders);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError('Failed to load orders.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [currentUser]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-100 p-8">
        <h2 className="text-3xl font-kalam text-[#6F3A19] mb-6">My Orders</h2>

        {loading ? (
          <p>Loading orders...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : orders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Order ID</th>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Total</th>
                  <th className="py-2 px-4 border-b">Payment Method</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} className="text-center">
                    <td className="py-2 px-4 border-b">{order.id}</td>
                    <td className="py-2 px-4 border-b">
                      {order.createdAt?.toDate().toLocaleDateString() || 'N/A'}
                    </td>
                    <td className="py-2 px-4 border-b">₹{order.totalAmount.toFixed(2)}</td>
                    <td className="py-2 px-4 border-b">{order.paymentMethod}</td>
                    <td className="py-2 px-4 border-b">{order.status}</td>
                    <td className="py-2 px-4 border-b">
                      <button 
                        onClick={() => navigate(`/orders/${order.id}`)} 
                        className="text-blue-500 hover:underline"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Orders; 