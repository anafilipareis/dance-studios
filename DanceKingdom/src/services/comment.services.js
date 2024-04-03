

import axios from 'axios';

class CommentService {
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

  

  addComment = (danceClassId, comment) => {
    return this.api.post(`/comments/class/${danceClassId}`, { comment });
  };
}

const commentService = new CommentService();
export default commentService;
