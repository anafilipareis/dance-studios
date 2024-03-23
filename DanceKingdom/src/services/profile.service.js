import axios from 'axios';

class ProfileService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.SERVER_URL || 'http://localhost:5005'
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // GET /profile
  getProfile = () => {
    return this.api.get('/profile');
  };

  // PUT /profile
  updateProfile = (formData) => {
    return this.api.put('/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Set content type for FormData
      }
    });
  };
}

// Create one instance object
const profileService = new ProfileService();

export default profileService;