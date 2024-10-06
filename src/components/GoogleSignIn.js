import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const CLIENT_ID = '';  // Replace with your Google Client ID

const GoogleSignIn = () => {
  console.log("1")
  const handleLoginSuccess = (response) => {
    console.log("2")

    console.log('Google login successful', response);
    const token = response.credential;

    // Send the token to your backend to validate and sign in the user
    fetch('http://localhost:5000/auth/google/callback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("3")

        // Save the JWT token received from the backend
        localStorage.setItem('jwtToken', data.token);
        console.log('JWT Token:', data.token);
      })
      .catch(err => console.error('3333Error:', err));
  };

  const handleLoginFailure = (error) => {
    console.error('455555Google login failed', error);
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div>
        <h1>Sign Up with Google</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleSignIn;
