// src/services/documentService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the base URL if needed

// Fetch all document URLs
export const fetchDocumentUrls = async () => {
  try {
    const response = await axios.get(`${API_URL}/documents/urls`);
    return response.data; // Returns an array of document URLs
  } catch (error) {
    console.error('Error fetching document URLs:', error);
    throw error; // Rethrow the error so it can be handled in the component
  }
};


export const uploadDocument = async (formData) => {
  const response = await axios.post(`${API_URL}/uploadDocument`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Important to set multipart header
    },
  });
  return response;
};