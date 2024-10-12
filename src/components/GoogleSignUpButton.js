import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleSignUpButton = ({ nextStep }) => {
  const handleGoogleSignUp = () => {
    window.location.href = 'http://localhost:5000/auth/google'; // Replace with your backend URL
  };

  const navigate = useNavigate();
  useEffect(() => {
    const checkGoogleResponse = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
  
      if (token) {
        // Log the token received from the backend
        console.log("Google Sign-Up Successful. Token received:", token);
  
        // Store the token in localStorage or perform any other actions
        localStorage.setItem('jwtToken', token);
  
        // Move to the next page
        navigate('/');
      } else {
        console.error('Google Sign-Up failed. No token received.');
      }
    };
  
    checkGoogleResponse();
  }, [navigate]);
  

  return (
    <button onClick={handleGoogleSignUp} className="google-signup-btn">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        alt="Google logo"
        style={{ width: '20px', marginRight: '10px' }}
      />
      Sign Up with Google
    </button>
  );
};

export default GoogleSignUpButton;
