import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useAuth } from '../components/auth/AuthContext';
import { collection, getDocs, query, orderBy, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseInit';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {
  const { currentUser } = useAuth();
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const fetchFavourites = async () => {
    if (!currentUser) {
      setError('You need to be logged in to view favourites.');
      setLoading(false);
      return;
    }

    try {
      const favouritesRef = collection(db, 'users', currentUser.uid, 'favourites');
      const q = query(favouritesRef, orderBy('addedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const favouritesData = [];

      for (let docSnap of querySnapshot.docs) {
        const favourite = docSnap.data();
        const productRef = doc(db, 'products', favourite.productId);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
          favouritesData.push({
            id: docSnap.id,
            productId: favourite.productId,
            addedAt: favourite.addedAt,
            product: productSnap.data(),
          });
        }
      }

      setFavourites(favouritesData);
    } catch (err) {
      console.error('Error fetching favourites:', err);
      setError('Failed to load favourites.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, [currentUser]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 pt-[25px]"></div>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-8">
        <h2 className="text-3xl font-kalam text-[#6F3A19] mb-6">My Favourites</h2>

        {loading ? (
          <p>Loading favourites...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : favourites.length === 0 ? (
          <p>You have no favourite products yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Product Image</th>
                  <th className="py-2 px-4 border-b">Product Name</th>
                  <th className="py-2 px-4 border-b">Category</th>
                  <th className="py-2 px-4 border-b">Price</th>
                  <th className="py-2 px-4 border-b">Added On</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {favourites.map(fav => (
                  <tr key={fav.id} className="text-center">
                    <td className="py-2 px-4 border-b">
                      <img src={fav.product.primaryImage} alt={fav.product.name} className="w-16 h-16 object-cover mx-auto" />
                    </td>
                    <td className="py-2 px-4 border-b">{fav.product.name}</td>
                    <td className="py-2 px-4 border-b capitalize">{fav.product.category}</td>
                    <td className="py-2 px-4 border-b">${fav.product.price.toFixed(2)}</td>
                    <td className="py-2 px-4 border-b">
                      {fav.addedAt?.toDate().toLocaleDateString() || 'N/A'}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button 
                        onClick={() => navigate(`/products/${fav.productId}`)} 
                        className="text-blue-500 hover:underline mr-2"
                      >
                        View
                      </button>
                      <button 
                        onClick={() => alert('Remove from favourites functionality coming soon!')} 
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Favourites; 