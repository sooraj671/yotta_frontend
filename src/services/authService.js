// src/services/authService.js
import axios from 'axios';

const API_URL = 'https://yottabackend-production.up.railway.app/api/auth';

const register = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, formData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

const authService = {
  register,
};

export default authService;
