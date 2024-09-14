// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// const API_URL = 'https://yottabackend-production.up.railway.app/api/auth';

const register = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, formData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

const login = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, formData);
    localStorage.setItem('token',response.data["token"]);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

const authService = {
  register, login
};

export default authService;

