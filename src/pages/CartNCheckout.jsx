import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext'; // Import CartContext
import { useAuth } from '../components/auth/AuthContext'; // Import AuthContext
import BackIcon from '../assets/icons/Cart 3.svg';
import Footer from '../components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import CartIcon from '../assets/icons/Cart 3.svg'; // Cart icon for "Remove" buttons
import { addOrder, saveUserAddress, getProductById } from '../firebase/firebaseServices'; // Import addOrder, saveUserAddress, getProductById functions
import { Timestamp, getDoc, doc } from 'firebase/firestore'; // Import getDoc and doc
import { v4 as uuidv4 } from 'uuid'; // Import UUID for generating guest UID
import { db } from '../firebase/firebaseInit'; // Import db from firebase initialization

const CartNCheckout = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Step 1: Cart, Step 2: Address, Step 3: Payment, Step 4: Confirmation

  // State for address information
  const [addressInfo, setAddressInfo] = useState({
    fullName: userData?.fullName || '',
    email: userData?.email || '',
    pincode: '',
    city: '',
    state: '',
    district: '',
    street: '',
    country: 'India',
  });

  // State for payment information
  const [paymentMethod, setPaymentMethod] = useState('Prepayment'); // 'Prepayment' or 'Cash on Delivery'

  // State for form validation and error messages
  const [errors, setErrors] = useState({});

  // State to manage PostOffice data from API
  const [postOffices, setPostOffices] = useState([]);
  const [selectedPostOffice, setSelectedPostOffice] = useState(null);
  const [loadingPincode, setLoadingPincode] = useState(false);
  const [pincodeError, setPincodeError] = useState('');

  // State for saved addresses (for registered users)
  const [savedAddress, setSavedAddress] = useState(null);

  // State for guest UID (for unregistered users)
  const [guestUserId, setGuestUserId] = useState(null);

  // State for order placement
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [orderError, setOrderError] = useState('');

  /**
   * Initialize guestUserId if the user is not authenticated.
   */
  useEffect(() => {
    if (!currentUser) {
      let storedGuestId = localStorage.getItem('guestUserId');
      if (!storedGuestId) {
        storedGuestId = uuidv4(); // Generate a random UUID
        localStorage.setItem('guestUserId', storedGuestId);
      }
      setGuestUserId(storedGuestId);
    }
  }, [currentUser]);

  /**
   * Fetch saved address for registered users.
   */
  useEffect(() => {
    const fetchSavedAddress = async () => {
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const data = userDoc.data();
            if (data.addressInfo) {
              setSavedAddress(data.addressInfo);
            }
          }
        } catch (error) {
          console.error("Error fetching saved address:", error);
        }
      }
    };

    fetchSavedAddress();
  }, [currentUser]);

  /**
   * Handle address input changes.
   * @param {Event} e - The input change event.
   */
  const handleAddressChange = async (e) => {
    const { name, value } = e.target;
    setAddressInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    // If pincode changes, attempt to auto-fill city, state, district
    if (name === 'pincode') {
      if (/^\d{6}$/.test(value)) { // Validate 6-digit pincode
        setLoadingPincode(true);
        setPincodeError('');
        try {
          const response = await fetch(`https://api.postalpincode.in/pincode/${value}`);
          const data = await response.json();
          
          if (data[0].Status === 'Success') {
            if (data[0].PostOffice.length === 1) {
              const postOffice = data[0].PostOffice[0];
              setAddressInfo((prev) => ({
                ...prev,
                city: postOffice.District,
                state: postOffice.State,
                district: postOffice.District,
              }));
              setSelectedPostOffice(postOffice);
              setPostOffices([]);
            } else if (data[0].PostOffice.length > 1) {
              setPostOffices(data[0].PostOffice);
              setAddressInfo((prev) => ({
                ...prev,
                city: '',
                state: '',
                district: '',
              }));
              setSelectedPostOffice(null);
            }
          } else {
            setPincodeError('Invalid pincode entered. Please check and try again.');
            setAddressInfo((prev) => ({
              ...prev,
              city: '',
              state: '',
              district: '',
            }));
            setPostOffices([]);
            setSelectedPostOffice(null);
          }
        } catch (error) {
          console.error('Error fetching pincode data:', error);
          setPincodeError('Failed to fetch pincode data. Please try again later.');
          setAddressInfo((prev) => ({
            ...prev,
            city: '',
            state: '',
            district: '',
          }));
          setPostOffices([]);
          setSelectedPostOffice(null);
        } finally {
          setLoadingPincode(false);
        }
      } else {
        setAddressInfo((prev) => ({
          ...prev,
          city: '',
          state: '',
          district: '',
        }));
        setPincodeError('Pincode must be 6 digits');
        setPostOffices([]);
        setSelectedPostOffice(null);
      }
    }
  };

  /**
   * Handle selection of Post Office when multiple are found
   * @param {Event} e - The select change event.
   */
  const handlePostOfficeSelection = (e) => {
    const selectedName = e.target.value;
    const postOffice = postOffices.find(po => po.Name === selectedName);
    if (postOffice) {
      setSelectedPostOffice(postOffice);
      setAddressInfo((prev) => ({
        ...prev,
        city: postOffice.District,
        state: postOffice.State,
        district: postOffice.District,
      }));
      setPostOffices([]);
    }
  };

  /**
   * Handle form submission for address
   * @param {Event} e - The form submit event.
   */
  const handleAddressSubmit = (e) => {
    e.preventDefault();

    // Validate address information
    const newErrors = {};
    if (!addressInfo.fullName) newErrors.fullName = 'Full name is required';
    if (!addressInfo.email) {
      newErrors.email = 'Email is required';
    } else {
      // Simple email regex for validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(addressInfo.email)) {
        newErrors.email = 'Invalid email format';
      }
    }
    if (!addressInfo.pincode) newErrors.pincode = 'Pincode is required';
    if (!addressInfo.city) newErrors.city = 'City is required';
    if (!addressInfo.state) newErrors.state = 'State is required';
    if (!addressInfo.district) newErrors.district = 'District is required';
    if (!addressInfo.street) newErrors.street = 'Street address is required';
    if (!addressInfo.country) newErrors.country = 'Country is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed to payment step
      setStep(3);
    }
  };

  /**
   * Handle final order placement
   * @param {string} selectedMethod - The selected payment method.
   */
  const handlePlaceOrder = async (selectedMethod) => {
    setPaymentMethod(selectedMethod);
    setLoadingOrder(true);
    setOrderError('');

    // Prepare order data
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 599; // ₹599 Shipping

    const orderData = {
      cartItems,
      address: addressInfo,
      paymentMethod: selectedMethod,
      totalAmount,
      createdAt: Timestamp.now(),
      status: 'Processing', // Initial status
    };

    try {
      // Determine userId based on authentication status
      const userId = currentUser ? currentUser.uid : guestUserId;

      // Validate stock for each cart item before placing the order
      const outOfStockItems = [];
      for (const item of cartItems) {
        const product = await getProductById(item.productId);
        if (!product) {
          outOfStockItems.push({ ...item, reason: 'Product does not exist.' });
        } else if (product.variants.find(v => v.id === item.variantId)?.stock < item.quantity) {
          outOfStockItems.push({ ...item, reason: `Only ${product.variants.find(v => v.id === item.variantId)?.stock} left in stock.` });
        }
      }

      if (outOfStockItems.length > 0) {
        let errorMessage = 'Some items in your cart are not available in the desired quantity:\n';
        outOfStockItems.forEach(item => {
          errorMessage += `• ${item.name} - ${item.reason}\n`;
        });
        setOrderError(errorMessage);
        return;
      }

      // Add order to Firestore using transaction to ensure stock integrity
      const orderId = await addOrder(userId, orderData);

      // If user is registered, save/update their address
      if (currentUser) {
        await saveUserAddress(currentUser.uid, addressInfo);
      }

      // Clear the cart after successful order placement
      clearCart();

      // Redirect to Confirmation Page with order ID
      navigate('/confirmation', { state: { orderId } });
    } catch (error) {
      console.error("Error placing order:", error);
      setOrderError('Failed to place order. Please try again.');
    } finally {
      setLoadingOrder(false);
    }
  };

  /**
   * Handle using saved address for registered users
   */
  const handleUseSavedAddress = () => {
    if (savedAddress) {
      setAddressInfo({ ...savedAddress });
      setStep(3); // Proceed to Payment
    }
  };

  /**
   * Fetch the latest stock information for cart items when component mounts
   */
  useEffect(() => {
    const fetchLatestStock = async () => {
      const updatedCartItems = await Promise.all(cartItems.map(async (item) => {
        const product = await getProductById(item.productId);
        return {
          ...item,
          latestStock: product ? product.variants.find(v => v.id === item.variantId)?.stock || 0 : 0,
        };
      }));
      updatedCartItems.forEach(item => {
        if (item.latestStock < item.quantity) {
          alert(`The product "${item.name}" has only ${item.latestStock} items left in stock.`);
          updateQuantity(item.variantId, Math.max(1, item.latestStock));
        }
      });
    };

    if (step === 1) {
      fetchLatestStock();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with 100px padding */}
      <div className="container mx-auto px-4 py-8 pt-[100px]">
        {/* Main Content */}
        <main className="flex-grow bg-white p-8">
          {/* Step Indicators */}
          <div className="mb-8 flex justify-center space-x-4">
            <div className={`flex items-center ${step === 1 ? 'text-[#6F3A19]' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step === 1 ? 'bg-[#6F3A19] text-white border-[#6F3A19]' : 'border-gray-300'}`}>
                1
              </div>
              <span className="ml-2">Cart</span>
            </div>
            <div className={`flex items-center ${step === 2 ? 'text-[#6F3A19]' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step === 2 ? 'bg-[#6F3A19] text-white border-[#6F3A19]' : 'border-gray-300'}`}>
                2
              </div>
              <span className="ml-2">Address</span>
            </div>
            <div className={`flex items-center ${step === 3 ? 'text-[#6F3A19]' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step === 3 ? 'bg-[#6F3A19] text-white border-[#6F3A19]' : 'border-gray-300'}`}>
                3
              </div>
              <span className="ml-2">Payment</span>
            </div>
          </div>

          {/* Step 1: Cart Overview */}
          {step === 1 && (
            <section className="mb-16">
              <h2 className="text-3xl font-kalam text-[#6F3A19] mb-6">Your Cart</h2>
              <div className="flex flex-col md:flex-row">
                {/* Cart Items List */}
                <div className="md:w-3/4">
                  {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                  ) : (
                    cartItems.map((item) => (
                      <div key={item.variantId} className="flex items-center mb-6 border-b pb-4">
                        <img src={item.image || 'https://via.placeholder.com/96'} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
                        <div className="flex-grow">
                          <h3 className="text-xl font-kalam">{item.name}</h3>
                          {item.size && <p className="text-gray-700">Size: {item.size}</p>}
                          {item.color && <p className="text-gray-700">Color: {item.color}</p>}
                          <p className="text-gray-700">Price: ₹{item.price.toFixed(2)}</p>
                          <div className="flex items-center mt-2">
                            <label htmlFor={`quantity-${item.variantId}`} className="mr-2">Qty:</label>
                            <input
                              type="number"
                              id={`quantity-${item.variantId}`}
                              name={`quantity-${item.variantId}`}
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.variantId, Math.max(1, parseInt(e.target.value) || 1))}
                              className="w-16 px-2 py-1 border rounded"
                            />
                          </div>
                          {/* Display Out of Stock if applicable */}
                          {item.latestStock !== undefined && item.latestStock < item.quantity && (
                            <p className="text-red-500 text-sm mt-1">Only {item.latestStock} left in stock.</p>
                          )}
                        </div>
                        <button
                          className="flex items-center text-red-600 hover:text-red-800"
                          onClick={() => removeFromCart(item.variantId)}
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <img src={CartIcon} alt="Remove" className="w-5 h-5 mr-1" />
                          Remove
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* Cart Summary */}
                <div className="md:w-1/4 md:ml-8">
                  <h3 className="text-2xl font-hedvig text-[#6F3A19] mb-4">Summary</h3>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Subtotal:</span>
                      <span>₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Shipping:</span>
                      <span>₹599.00</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>₹{(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 599).toFixed(2)}</span>
                    </div>
                    <button
                      className="w-full mt-4 flex items-center justify-center px-4 py-2 bg-[#6F3A19] text-white rounded hover:bg-[#5a3216] transition-colors duration-200"
                      onClick={() => setStep(2)}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Step 2: Address */}
          {step === 2 && (
            <section className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <button
                  className="text-gray-600 hover:text-gray-800 flex items-center"
                  onClick={() => setStep(1)}
                >
                  <img src={BackIcon} alt="Back" className="w-5 h-5 mr-1" />
                  Back to Cart
                </button>
              </div>
              <h2 className="text-3xl font-kalam text-[#6F3A19]">Address Information</h2>

              {/* Suggest Saved Address for Registered Users */}
              {currentUser && savedAddress && (
                <div className="bg-green-100 p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-[#6F3A19] mb-2">Saved Address</h3>
                  <p><strong>Name:</strong> {savedAddress.fullName}</p>
                  <p><strong>Email:</strong> {savedAddress.email}</p>
                  <p><strong>Address:</strong> {savedAddress.street}, {savedAddress.district}, {savedAddress.city}, {savedAddress.state}, {savedAddress.country}, {savedAddress.pincode}</p>
                  <div className="mt-4 flex space-x-4">
                    <button
                      className="px-4 py-2 bg-[#6F3A19] text-white rounded hover:bg-[#5a3216] transition-colors duration-200"
                      onClick={() => {
                        setAddressInfo({ ...savedAddress });
                        setStep(3); // Proceed to Payment
                      }}
                    >
                      Use Saved Address
                    </button>
                    <button
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors duration-200"
                      onClick={() => setSavedAddress(null)}
                    >
                      Enter New Address
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-col md:flex-row mt-6">
                <div className="md:w-2/3 md:pr-8">
                  <form className="space-y-4" onSubmit={handleAddressSubmit}>
                    <div>
                      <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={addressInfo.fullName}
                        onChange={handleAddressChange}
                        className={`w-full px-3 py-2 border rounded ${errors.fullName ? 'border-red-500' : ''}`}
                        placeholder="John Doe"
                        required
                      />
                      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={addressInfo.email}
                        onChange={handleAddressChange}
                        className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="john.doe@example.com"
                        required
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="pincode" className="block text-gray-700">Pincode</label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={addressInfo.pincode}
                        onChange={handleAddressChange}
                        className={`w-full px-3 py-2 border rounded ${errors.pincode || pincodeError ? 'border-red-500' : ''}`}
                        placeholder="Enter 6-digit pincode"
                        required
                      />
                      {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
                      {pincodeError && <p className="text-red-500 text-sm">{pincodeError}</p>}
                      {loadingPincode && <p className="text-gray-500 text-sm">Fetching location details...</p>}
                    </div>

                    {/* If multiple post offices are found, display a dropdown */}
                    {postOffices.length > 1 && (
                      <div>
                        <label htmlFor="postOffice" className="block text-gray-700">Select Post Office</label>
                        <select
                          id="postOffice"
                          name="postOffice"
                          onChange={handlePostOfficeSelection}
                          className={`w-full px-3 py-2 border rounded ${errors.postOffice ? 'border-red-500' : ''}`}
                          required
                        >
                          <option value="">-- Select Post Office --</option>
                          {postOffices.map(po => (
                            <option key={po.Name} value={po.Name}>{po.Name}</option>
                          ))}
                        </select>
                        {errors.postOffice && <p className="text-red-500 text-sm">{errors.postOffice}</p>}
                      </div>
                    )}

                    <div>
                      <label htmlFor="city" className="block text-gray-700">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={addressInfo.city}
                        onChange={handleAddressChange}
                        className={`w-full px-3 py-2 border rounded ${errors.city ? 'border-red-500' : ''}`}
                        placeholder="City"
                        required
                        readOnly
                      />
                      {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-gray-700">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={addressInfo.state}
                        onChange={handleAddressChange}
                        className={`w-full px-3 py-2 border rounded ${errors.state ? 'border-red-500' : ''}`}
                        placeholder="State"
                        required
                        readOnly
                      />
                      {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                    </div>
                    <div>
                      <label htmlFor="district" className="block text-gray-700">District</label>
                      <input
                        type="text"
                        id="district"
                        name="district"
                        value={addressInfo.district}
                        onChange={handleAddressChange}
                        className={`w-full px-3 py-2 border rounded ${errors.district ? 'border-red-500' : ''}`}
                        placeholder="District"
                        required
                        readOnly
                      />
                      {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}
                    </div>
                    <div>
                      <label htmlFor="street" className="block text-gray-700">Street Address</label>
                      <input
                        type="text"
                        id="street"
                        name="street"
                        value={addressInfo.street}
                        onChange={handleAddressChange}
                        className={`w-full px-3 py-2 border rounded ${errors.street ? 'border-red-500' : ''}`}
                        placeholder="123 Main St"
                        required
                      />
                      {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-gray-700">Country</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={addressInfo.country}
                        onChange={handleAddressChange}
                        className={`w-full px-3 py-2 border rounded ${errors.country ? 'border-red-500' : ''}`}
                        placeholder="India"
                        required
                        readOnly
                      />
                      {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-4 py-2 bg-[#6F3A19] text-white rounded hover:bg-[#5a3216] transition-colors duration-200"
                    >
                      Continue to Payment
                    </button>
                  </form>
                </div>
              </div>
            </section>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <section>
              <div className="flex items-center justify-between mb-6">
                <button
                  className="text-gray-600 hover:text-gray-800 flex items-center"
                  onClick={() => setStep(2)}
                >
                  <img src={BackIcon} alt="Back" className="w-5 h-5 mr-1" />
                  Back to Address
                </button>
              </div>
              <h2 className="text-3xl font-kalam text-[#6F3A19]">Payment Method</h2>

              {/* Display Order Errors if any */}
              {orderError && (
                <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                  <p>{orderError}</p>
                </div>
              )}

              {/* Display Loading Indicator */}
              {loadingOrder && (
                <div className="mb-6">
                  <p className="text-gray-500">Placing your order, please wait...</p>
                </div>
              )}

              <div className="mt-6 flex flex-col space-y-4">
                <button
                  onClick={() => handlePlaceOrder('Prepayment')}
                  className={`w-full px-4 py-3 bg-[#6F3A19] text-white rounded-lg hover:bg-[#5a3216] flex items-center justify-center transition-colors duration-200 ${
                    loadingOrder ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={loadingOrder}
                >
                  Prepayment
                </button>
                <button
                  onClick={() => handlePlaceOrder('Cash on Delivery')}
                  className={`w-full px-4 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 flex items-center justify-center transition-colors duration-200 ${
                    loadingOrder ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={loadingOrder}
                >
                  Cash on Delivery
                </button>
              </div>
            </section>
          )}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default CartNCheckout;
