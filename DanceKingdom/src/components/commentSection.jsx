// CommentSection.jsx

import React, { useState } from 'react';
import commentService from '../services/comment.services'; // Import your comment service

function CommentSection({ danceClassId }) {
  const [newCommentText, setNewCommentText] = useState('');

  const handleCommentSubmit = async () => {
    try {
      // Make an API call to submit the comment
      await commentService.addComment(danceClassId, newCommentText);
      // Optionally, update state to fetch and display updated comments
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
