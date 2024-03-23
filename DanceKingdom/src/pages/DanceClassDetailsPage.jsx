// DanceClassDetailsPage.jsx
import React, { useContext } from 'react';
import DanceClassDetails from '../components/DanceClassDetails';
import { AuthContext } from '../context/auth.context';
import CommentSection from '../components/commentSection'; // Import the CommentSection component

function DanceClassDetailsPage() {
  const { user } = useContext(AuthContext);
  const isTeacher = user && user.status === 'teacher';

  return (
    <div>
      <h1>Dance Class Details</h1>
      <DanceClassDetails isTeacher={isTeacher} />
      <CommentSection /> 
    </div>
  );
}

export default DanceClassDetailsPage;


