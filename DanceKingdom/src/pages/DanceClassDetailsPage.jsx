// DanceClassDetailsPage.jsx

import React, { useContext } from 'react';
import DanceClassDetails from '../components/DanceClassDetails';
import { AuthContext } from '../context/auth.context';
import CommentSection from '../components/commentSection'; // Correct import
import { useParams } from 'react-router-dom'; // Import useParams hook

function DanceClassDetailsPage() {
  const { user } = useContext(AuthContext);
  const isTeacher = user && user.status === 'teacher';
  const { id } = useParams(); // Extract the dance class id from the URL params

  return (
    <div>
      <h1>Dance Class Details</h1>
      <DanceClassDetails />
      <CommentSection danceClassId={id} /> {/* Pass the dance class id */}
    </div>
  );
}

export default DanceClassDetailsPage;


