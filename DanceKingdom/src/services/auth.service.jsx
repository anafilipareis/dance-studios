import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_DEPLOYMENT_URL, 
});


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

export const verifyToken = async () => {
  try {
    const response = await api.get('/auth/verify');
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

export const getAllDanceClasses = async () => {
  try {
    const response = await api.get('/dance-classes');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const subscribeToClass = async (classId) => {
  try {
    const response = await api.get(`/dance-classes/class/${classId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};




export default {
  login,
  register,
  verifyToken,
  getUserProfile,
  getAllDanceClasses,
  subscribeToClass,
  
};