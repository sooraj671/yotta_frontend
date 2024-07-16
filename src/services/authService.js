// frontend/src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const register = (userData) => {
  return axios.post(API_URL + 'register', userData);
};

const login = (email, password) => {
  return axios.post(API_URL + 'login', {
    email,
    password
  });
};

export default {
  register,
  login
};
