// comment.services.js

import axios from 'axios';

class CommentService {
  constructor() {
    this.api = axios.create({
        baseURL: import.meta.env.VITE_DEPLOYMENT_URL,
    });
  }

  

  addComment = (danceClassId, comment) => {
    return this.api.post(`/comments/class/${danceClassId}`, { comment });
  };
}

const commentService = new CommentService();
export default commentService;
