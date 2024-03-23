// DanceClassDetailsPage.jsx

import React, { useContext } from 'react';
import DanceClassDetails from '../components/DanceClassDetails';
import { AuthContext } from '../context/auth.context';

function DanceClassDetailsPage({ match }) {
  const { user } = useContext(AuthContext);
  const isTeacher = user && user.status === 'teacher';

  return (
    <div>
      <h1>Dance Class Details</h1>
      <DanceClassDetails match={match} isTeacher={isTeacher} />
    </div>
  );
}

export default DanceClassDetailsPage;

