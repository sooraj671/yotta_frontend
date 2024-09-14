import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import authService from '../services/authService'; // Import authService for handling login logic

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // State to manage form data and error messages
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const { email, password } = formData;

  // Function to update formData state on input change
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Function to handle form submission
  const onSubmit = async e => {
    e.preventDefault();
    try {
      // Call authService.login to attempt user login
      const response = await authService.login({ email, password });
      console.log('Login successful', response);
      // Store the token or user data as needed (e.g., localStorage, context)
      localStorage.setItem('token', response.token); // Example of storing the token
      // Redirect to dashboard or home page upon successful login
      navigate('/dashboard'); // Change this to the appropriate route
    } catch (error) {
      // Handle login error
      console.error('Login error:', error.response.data);
      setError(error.response.data.message); // Assuming authService returns an error with a 'message' property
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <br />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if login fails */}
    </div>
  );
};

export default Login;
