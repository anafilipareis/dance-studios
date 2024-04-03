import axios from 'axios';
 
class DanceClassService {
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

  // POST /dance-classes
  createDanceClass = requestBody => {
    return this.api.post("/dance-classes/class/create", requestBody);
  };
 
  // GET /dance-classes
  getAllDanceClasses = () => {
    return this.api.get("/dance-classes");
  };
 
  // GET /dance-classes/:id
  getSingleClass = id => {
    return this.api.get(`/dance-classes/class/${id}`);
  };

  getTeacherDanceClasses = () => {
    return this.api.get(`/dance-classes/teacher`);
  };

  
 
  // PUT /dance-classes/:id
  updateSingleClass = (id, requestBody) => {
    return this.api.put(`/dance-classes/class/${id}`, requestBody);
  };
 
  // DELETE /dance-classes:id
  deleteSingleClass = id => {
    return this.api.delete(`/dance-classes/class/${id}`);
  };
  
}
 

const danceClassService = new DanceClassService();
 
export default danceClassService;

