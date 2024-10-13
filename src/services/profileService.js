import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/profile';
const API_URL = 'https://yottabackend-production.up.railway.app/api/profile';


// Get the user profile
const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/getProfile`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching profile: service', error);
    throw error;
  }
};

// Get all profiles
const getAllProfiles = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllProfiles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    throw error;
  }
};


// Get profile by ID
const getProfileById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/getProfileById/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching profile by ID: ${id}`, error);
    throw error;
  }
};

const profileService = {
  getProfile,
  getAllProfiles,
  getProfileById, // Add this function to service

};

export default profileService;


