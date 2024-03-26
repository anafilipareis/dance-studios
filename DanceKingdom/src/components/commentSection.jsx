// CommentSection.jsx

import React, { useState } from 'react';
import commentService from '../services/comment.services'; // Import your comment service
import { useParams } from 'react-router-dom';


function CommentSection({setDanceClass, danceClass}) {
  const [newCommentText, setNewCommentText] = useState('');
  const params = useParams();
  const danceClassId = params.id;

  const handleCommentSubmit = async () => {
    try {
        const response = await commentService.addComment(danceClassId, newCommentText)
        const comments = danceClass.comments
        comments.push(response.data)

        console.log(response.data)
      setDanceClass(prev => ({
        ...prev,
        comments
      }))
      setNewCommentText(''); // Clear the input field after submitting the comment
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div>

      <h2>Comments</h2>
      <textarea
        value={newCommentText}
        onChange={(e) => setNewCommentText(e.target.value)}
        placeholder="Write a comment..."
      ></textarea>
      <button onClick={handleCommentSubmit}>Submit</button>
    </div>
  );
}

export default CommentSection;
