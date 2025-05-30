import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; // Adjust the import path as necessary
import { generateChallenge } from './emojis';

const AuthPage = ({ onClose }) => {
  const { register, login, loginAsGuest, loginWithGoogle, loginWithEmotionChallenge, authError } = useAuth();
  const [isRegister, setIsRegister] = useState(true); // Toggle between Register and Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  
  // Emotion challenge state
  const [showEmotionChallenge, setShowEmotionChallenge] = useState(false);
  const [emotionChallenges, setEmotionChallenges] = useState([]);
  const [userEmotionAnswers, setUserEmotionAnswers] = useState([]);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);

  // Generate new challenges when the emotion challenge is shown
  useEffect(() => {
    if (showEmotionChallenge) {
      const challenges = generateChallenge(3); // Generate 3 challenges
      setEmotionChallenges(challenges);
      setUserEmotionAnswers(Array(challenges.length).fill(''));
      setCurrentChallengeIndex(0);
    }
  }, [showEmotionChallenge]);

  // Handle form submission for registration or login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isRegister) {
        await register(email, password);
      } else {
        await login(email, password);
      }
      onClose(); // Close the Auth modal/page upon successful authentication
    } catch (error) {
      // Error handling is managed within AuthContext
    } finally {
      setLoading(false);
    }
  };

  // Handle Google sign-in
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      onClose(); // Close the Auth modal/page upon successful authentication
    } catch (error) {
      // Error handling is managed within AuthContext
    } finally {
      setLoading(false);
    }
  };

  // Handle emotion selection in the challenge
  const handleEmotionSelection = (emotion) => {
    const newAnswers = [...userEmotionAnswers];
    newAnswers[currentChallengeIndex] = emotion;
    setUserEmotionAnswers(newAnswers);
    
    if (currentChallengeIndex < emotionChallenges.length - 1) {
      // Move to next challenge
      setCurrentChallengeIndex(currentChallengeIndex + 1);
    } else {
      // All challenges answered, verify the answers
      handleEmotionChallengeSubmit();
    }
  };

  // Handle emotion challenge submission
  const handleEmotionChallengeSubmit = async () => {
    setLoading(true);
    try {
      await loginWithEmotionChallenge(email, userEmotionAnswers, emotionChallenges);
      onClose(); // Close the Auth modal/page upon successful authentication
    } catch (error) {
      // Generate new challenges and show the error
      const challenges = generateChallenge(3);
      setEmotionChallenges(challenges);
      setUserEmotionAnswers(Array(challenges.length).fill(''));
      setCurrentChallengeIndex(0);
      
      // Show the error message for a moment before trying again
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  // Handle anonymous sign-up
  const handleAnonymousSignup = async () => {
    setLoading(true);
    try {
      await loginAsGuest();
      onClose(); // Close the Auth modal/page upon successful authentication
    } catch (error) {
      // Error handling is managed within AuthContext
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold mb-4">
          {isRegister ? 'Register' : 'Login'}
        </h2>
        {authError && (
          <div className="mb-4 text-red-500">
            {authError}
          </div>
        )}
        
        {/* Show the main form when not in emotion challenge mode */}
        {!showEmotionChallenge ? (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter your password"
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className={`w-full bg-[#6F3A19] text-white py-2 rounded-md hover:bg-[#8B533B] transition-colors duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? (isRegister ? 'Registering...' : 'Logging in...') : (isRegister ? 'Register' : 'Login')}
              </button>
            </form>
            
            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            
            {/* Google Sign-in Button */}
            <button 
              onClick={handleGoogleLogin}
              disabled={loading}
              className={`w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors duration-300 mb-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {/* Google Icon - Simple SVG Inline */}
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" 
                      fill="#4285F4"/>
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                      fill="#34A853"/>
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                      fill="#FBBC05"/>
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                      fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            
            {/* Emotion Challenge Button */}
            <button 
              onClick={() => {
                if (!email) {
                  alert("Please enter your email first");
                  return;
                }
                setShowEmotionChallenge(true);
              }}
              disabled={loading || !email}
              className={`w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors duration-300 ${(loading || !email) ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="mr-2 text-xl">😀</span>
              Continue with Emotion Challenge
            </button>
            
            <div className="mt-4 flex items-center justify-between">
              <button 
                onClick={() => setIsRegister(!isRegister)}
                className="text-sm text-[#6F3A19] hover:underline"
              >
                {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
              </button>
              <button 
                onClick={handleAnonymousSignup}
                disabled={loading}
                className={`text-sm text-gray-600 hover:underline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Continue as Guest
              </button>
            </div>
          </>
        ) : (
          /* Emotion Challenge UI */
          <div className="emotion-challenge">
            <h3 className="text-lg font-semibold mb-3">Emotion Recognition Challenge</h3>
            <p className="mb-4 text-sm text-gray-600">
              Select the emotion that matches this emoji to verify your identity.
            </p>
            
            {emotionChallenges.length > 0 && (
              <>
                <div className="flex justify-center my-6">
                  <span className="text-6xl">{emotionChallenges[currentChallengeIndex].targetEmoji.emoji}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {emotionChallenges[currentChallengeIndex].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleEmotionSelection(option.emotion)}
                      disabled={loading}
                      className="py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors capitalize"
                    >
                      {option.emotion}
                    </button>
                  ))}
                </div>
                
                <div className="text-center text-sm text-gray-500 mb-3">
                  Challenge {currentChallengeIndex + 1} of {emotionChallenges.length}
                </div>
                
                <button
                  onClick={() => setShowEmotionChallenge(false)}
                  className="w-full text-gray-600 text-sm hover:underline"
                >
                  Cancel and go back
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
