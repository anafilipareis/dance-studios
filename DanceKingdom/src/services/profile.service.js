import axios from 'axios';

class ProfileService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_DEPLOYMENT_URL
    });

   
    this.api.interceptors.request.use(config => {
  
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // GET /profile
  getProfile = ({id}) => {
    return this.api.get(`/profile/${id}`);
  };

  // PUT /profile
  updateProfile = (formData) => {
    return this.api.put('/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data' 
      }
    });
  };
}


const profileService = new ProfileService();

export default profileService;