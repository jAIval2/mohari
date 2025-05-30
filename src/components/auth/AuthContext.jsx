import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../../firebase/firebaseInit';
import { 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInAnonymously, 
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { validateEmotionChallenge } from './emojis';

// Create a Context for Authentication
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null); // Data from Firestore
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null); // To handle authentication errors

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          setUserData(null);
        }
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  /**
   * Register a new user with email and password
   * @param {string} email 
   * @param {string} password 
   */
  const register = async (email, password) => {
    setAuthError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create a corresponding user document in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email || null,
        isAnonymous: false,
        createdAt: new Date(),
      });

      // Optionally, initialize orders and favourites subcollections
      // Firestore creates subcollections as documents are added
    } catch (error) {
      console.error('Registration Error:', error);
      setAuthError(error.message);
      throw error; // Re-throw the error for further handling if needed
    }
  };

  /**
   * Login an existing user with email and password
   * @param {string} email 
   * @param {string} password 
   */
  const login = async (email, password) => {
    setAuthError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged will update currentUser and userData accordingly
    } catch (error) {
      console.error('Login Error:', error);
      setAuthError(error.message);
      throw error;
    }
  };

  /**
   * Sign in with Google
   */
  const loginWithGoogle = async () => {
    setAuthError(null);
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      // Check if this user document already exists
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      
      // If the user doesn't exist in Firestore yet, create a new document
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          email: user.email || null,
          displayName: user.displayName || null,
          photoURL: user.photoURL || null,
          isAnonymous: false,
          createdAt: new Date(),
        });
      }
      
      // onAuthStateChanged will update currentUser and userData accordingly
    } catch (error) {
      console.error('Google Login Error:', error);
      setAuthError(error.message);
      throw error;
    }
  };

  /**
   * Login using the emotion challenge
   * @param {string} email 
   * @param {Array} userAnswers 
   * @param {Array} challenges 
   */
  const loginWithEmotionChallenge = async (email, userAnswers, challenges) => {
    setAuthError(null);
    try {
      // Validate if the user correctly identified the emotions
      const isPassed = validateEmotionChallenge(userAnswers, challenges);
      
      if (!isPassed) {
        setAuthError("Emotion recognition challenge failed. Please try again.");
        throw new Error("Emotion recognition challenge failed");
      }
      
      if (email) {
        // Check if the user already exists
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          // User doesn't exist, create a new account
          // Since we can't create a password-less user directly in Firebase Auth,
          // we'll use anonymous authentication and then update the user record
          const userCredential = await signInAnonymously(auth);
          const user = userCredential.user;
          
          // Update the user document with the email
          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            email: email,
            isAnonymous: false,
            createdAt: new Date(),
            authMethod: 'emotion-challenge',
          });
          
          return true;
        } else {
          // User exists - in a real app, you'd need to verify identity more securely
          // Here we'll allow emotion challenge login for any existing user for demo purposes
          // This is simplified and not secure for production!
          
          // For demo purposes, we'll sign in anonymously and then link it to the existing email
          try {
            const userCredential = await signInAnonymously(auth);
            const user = userCredential.user;
            
            // Update the user's document to reflect they've logged in via emotion challenge
            const existingUserDoc = querySnapshot.docs[0];
            await setDoc(doc(db, 'users', user.uid), {
              ...existingUserDoc.data(),
              uid: user.uid,
              email: email,
              isAnonymous: false,
              lastLoginAt: new Date(),
              lastLoginMethod: 'emotion-challenge'
            });
            
            return true;
          } catch (error) {
            console.error("Error signing in:", error);
            setAuthError("Authentication failed. Please try again.");
            throw error;
          }
        }
      } else {
        setAuthError("Email is required for authentication");
        throw new Error("Email is required");
      }
    } catch (error) {
      console.error('Emotion Challenge Error:', error);
      setAuthError(error.message || "Failed the emotion challenge");
      throw error;
    }
  };

  /**
   * Sign in anonymously
   */
  const loginAsGuest = async () => {
    setAuthError(null);
    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;

      // Create a corresponding user document in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: null,
        isAnonymous: true,
        createdAt: new Date(),
      });

      // Initialize orders and favourites subcollections as needed
    } catch (error) {
      console.error('Anonymous Login Error:', error);
      setAuthError(error.message);
      throw error;
    }
  };

  /**
   * Logout the current user
   */
  const logout = async () => {
    setAuthError(null);
    try {
      await signOut(auth);
      // onAuthStateChanged will handle state updates
    } catch (error) {
      console.error('Logout Error:', error);
      setAuthError(error.message);
      throw error;
    }
  };

  // Value to be passed to consuming components
  const value = {
    currentUser,
    userData,
    register,
    login,
    loginWithGoogle,
    loginWithEmotionChallenge,
    loginAsGuest,
    logout,
    authError,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
