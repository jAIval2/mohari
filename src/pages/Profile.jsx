import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useAuth } from '../components/auth/AuthContext';
import sampleProfile from '../assets/images/Image.jpg'; // Replace with actual path if different
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseInit';

const Profile = () => {
  const { currentUser, userData } = useAuth();
  const [fullName, setFullName] = useState(userData?.fullName || '');
  const [email, setEmail] = useState(userData?.email || '');
  const [isEditing, setIsEditing] = useState(false);
  const [updateStatus, setUpdateStatus] = useState('');

  useEffect(() => {
    if (userData && userData.fullName) {
      setFullName(userData.fullName);
    }
    if (userData && userData.email) {
      setEmail(userData.email);
    }
  }, [userData]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdateStatus('Updating...');
    try {
      const userRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userRef, {
        fullName,
        email,
      });
      setUpdateStatus('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      setUpdateStatus('Failed to update profile.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 pt-[25px]"></div>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-8">
        <h2 className="text-3xl font-kalam text-[#6F3A19] mb-6">My Profile</h2>

        <div className="flex flex-col md:flex-row">
          {/* Section 1: Personal Information */}
          <section className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h3 className="text-2xl font-hedvig text-[#6F3A19] mb-4">Personal Information</h3>
            <form onSubmit={handleUpdate} className="space-y-4 bg-white p-6 rounded shadow">
              <div className="flex items-center space-x-4">
                <img src={sampleProfile} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
                <button type="button" onClick={() => alert('Change Photo Functionality Coming Soon!')} className="px-4 py-2 bg-[#6F3A19] text-white rounded hover:bg-[#5a3216]">
                  Change Photo
                </button>
              </div>

              <div>
                <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={!isEditing}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!isEditing}
                  required
                />
              </div>

              {currentUser && !currentUser.isAnonymous && (
                <div>
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter new password"
                    disabled={!isEditing}
                  />
                </div>
              )}

              {isEditing ? (
                <>
                  <button type="submit" className="w-full bg-[#6F3A19] text-white py-2 rounded hover:bg-[#5a3216]">
                    Save Changes
                  </button>
                  <button type="button" onClick={() => setIsEditing(false)} className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400">
                    Cancel
                  </button>
                </>
              ) : (
                <button type="button" onClick={() => setIsEditing(true)} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                  Edit Profile
                </button>
              )}

              {updateStatus && (
                <div className={`mt-4 text-center ${updateStatus.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
                  {updateStatus}
                </div>
              )}
            </form>
          </section>

          {/* Section 2: Additional Information or Settings */}
          <section className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-hedvig text-[#6F3A19] mb-4">Account Details</h3>
            <div className="bg-white p-6 rounded shadow">
              <p><strong>Account Type:</strong> {currentUser?.isAnonymous ? 'Guest (Anonymous)' : 'Registered User'}</p>
              <p><strong>Member Since:</strong> {userData?.createdAt?.toDate().toLocaleDateString() || 'N/A'}</p>
              {/* Add more account-related details as needed */}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profile;
