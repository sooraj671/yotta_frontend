import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import authService from '../services/authService'; // Import authService for handling registration logic

const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // State to manage form data and error messages
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const { username, email, password } = formData;

  // Function to update formData state on input change
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Function to handle form submission
  const onSubmit = async e => {
    e.preventDefault();
    try {
      // Call authService.register to attempt user registration
      const response = await authService.register(username, email, password);
      console.log('Registration successful', response);
      // Redirect to login page upon successful registration
      navigate('/login');
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error.response.data);
      setError(error.response.data.message); // Assuming authService returns an error with a 'message' property
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" required />
        <br />
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <br />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        <br />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if registration fails */}
    </div>
  );
};

export default Register;
