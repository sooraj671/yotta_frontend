// frontend/src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(atob(token.split('.')[1]));
      setUser(user);
    }
  }, []);

  const login = async (email, password) => {
    const res = await authService.login(email, password);
    const { token } = res.data;
    localStorage.setItem('token', token);
    const user = JSON.parse(atob(token.split('.')[1]));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
