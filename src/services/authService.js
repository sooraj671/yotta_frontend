import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';
// const API_URL = 'https://yottabackend-production.up.railway.app/api/auth';

// Register new user
const register = async (formData) => {
  try {
    // Set the correct Content-Type header for multipart/form-data
    const response = await axios.post(`${API_URL}/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.status;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Login user
const login = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, formData);
    localStorage.setItem('token', response.data["token"]);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Login user
const signup = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, formData);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

const authService = {
  register,
  signup,
  login
};

export default authService;
