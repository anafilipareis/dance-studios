import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VITE_DEPLOYMENT_URL,
});

// CHECK THIS LATER!
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await api.get('/profile');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add other authentication-related functions as needed

export default {
  login,
  register,
  getUserProfile,
  // Add other functions here
};