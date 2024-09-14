import axios from 'axios';

const API_URL = 'http://localhost:5000/api/profile';

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

const profileService = {
  getProfile
};

export default profileService;
