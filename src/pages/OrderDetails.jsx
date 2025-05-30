   // OrderDetails.jsx

   import React, { useState, useEffect } from 'react';
   import { useParams, useNavigate } from 'react-router-dom';
   import { getOrderById } from '../firebase/firebaseServices';
   import Header from '../components/layout/Header';
   import Footer from '../components/layout/Footer';

   const OrderDetails = () => {
     const { orderId } = useParams();
     const navigate = useNavigate();
     const [order, setOrder] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState('');

     useEffect(() => {
       const fetchOrder = async () => {
         try {
           const fetchedOrder = await getOrderById(orderId);
           if (!fetchedOrder) {
             setError('Order not found.');
           } else {
             setOrder(fetchedOrder);
           }
         } catch (err) {
           console.error('Error fetching order:', err);
           setError('Failed to load order details.');
         } finally {
           setLoading(false);
         }
       };

       fetchOrder();
     }, [orderId]);

     if (loading) return (
       <div className="flex flex-col min-h-screen">
         <Header />
         <main className="flex-grow bg-gray-100 p-8 pt-[100px]">
           <div className="flex justify-center items-center">
             <p className="text-lg">Loading order details...</p>
           </div>
         </main>
         <Footer />
       </div>
     );

     if (error) return (
       <div className="flex flex-col min-h-screen">
         <Header />
         <main className="flex-grow bg-gray-100 p-8 pt-[100px]">
           <div className="text-center">
             <p className="text-red-500 text-lg mb-4">{error}</p>
             <button
               onClick={() => navigate('/orders')}
               className="px-6 py-3 bg-[#6F3A19] text-white rounded-lg hover:bg-[#5a3216] transition-colors duration-200"
             >
               Back to Orders
             </button>
           </div>
         </main>
         <Footer />
       </div>
     );

     return (
       <div className="flex flex-col min-h-screen">
         {/* Header */}
         <Header />

         {/* Main Content */}
         <main className="flex-grow bg-gray-100 p-8 pt-[100px]">
           <h2 className="text-3xl font-kalam text-[#6F3A19] mb-6">Order Details</h2>
           <div className="bg-white p-6 rounded shadow">
             <div className="mb-4">
               <p><strong>Order ID:</strong> {order.id}</p>
               <p><strong>Order Date:</strong> {order.createdAt?.toDate().toLocaleString()}</p>
               <p><strong>Total Amount:</strong> ₹{order.totalAmount.toFixed(2)}</p>
               <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
               <p><strong>Status:</strong> {order.status}</p>
             </div>

             {/* Shipping Address */}
             <div className="mb-4">
               <h3 className="text-2xl font-semibold text-[#6F3A19] mb-2">Shipping Address</h3>
               <p>{order.address.fullName}</p>
               <p>{order.address.street}</p>
               <p>{order.address.city}, {order.address.district}</p>
               <p>{order.address.state} - {order.address.pincode}</p>
               <p>{order.address.country}</p>
             </div>

             {/* Order Items */}
             <div className="mb-4">
               <h3 className="text-2xl font-semibold text-[#6F3A19] mb-2">Order Items</h3>
               <ul className="list-disc list-inside">
                 {order.cartItems.map((item, index) => (
                   <li key={index} className="mb-2">
                     <div className="flex justify-between items-center">
                       <div>
                         <p className="font-medium">{item.name}</p>
                         <p className="text-sm text-gray-600">
                           Quantity: {item.quantity}
                           {item.size && ` | Size: ${item.size}`}
                           {item.color && ` | Color: ${item.color}`}
                         </p>
                       </div>
                       <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                     </div>
                   </li>
                 ))}
               </ul>
             </div>

             {/* Shipping Details */}
             <div className="mb-4">
               <h3 className="text-2xl font-semibold text-[#6F3A19] mb-2">Shipping Details</h3>
               <p><strong>Shipping Method:</strong> Standard Shipping</p>
               <p><strong>Estimated Delivery:</strong> {new Date(order.createdAt?.toDate().getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
             </div>

             {/* Order Total */}
             <div className="flex justify-end">
               <p className="text-xl font-semibold">Total: ₹{order.totalAmount.toFixed(2)}</p>
             </div>
           </div>

           <button
             onClick={() => navigate('/orders')}
             className="mt-6 px-6 py-3 bg-[#6F3A19] text-white rounded-lg hover:bg-[#5a3216] transition-colors duration-200"
           >
             Back to Orders
           </button>
         </main>

         {/* Footer */}
         <Footer />
       </div>
     );
   };

   export default OrderDetails;