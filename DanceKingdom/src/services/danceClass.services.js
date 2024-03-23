import axios from 'axios';
 
class DanceClassService {
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

  // POST /dance-classes
  createDanceClass = requestBody => {
    return this.api.post("/dance-classes", requestBody);
  };
 
  // GET /dance-classes
  getAllDanceClasses = () => {
    return this.api.get("/dance-classes");
  };
 
  // GET /dance-classes/:id
  getSingleClass = id => {
    return this.api.get(`/dance-classes/class/${id}`);
  };
 
  // PUT /dance-classes/:id
  updateSingleClass = (id, requestBody) => {
    return this.api.put(`/dance-classes/${id}`, requestBody);
  };
 
  // DELETE /dance-classes:id
  deleteSingleClass = id => {
    return this.api.delete(`/dance-classes/${id}`);
  };
  
}
 
// Create one instance object
const danceClassService = new DanceClassService();
 
export default danceClassService;

