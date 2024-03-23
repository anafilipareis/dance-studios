// DanceClassDetailsPage.jsx

import React from 'react';
import DanceClassDetails from '../components/DanceClassDetails';

function DanceClassDetailsPage({ match }) {
    
  return (
    <div>
      <h1>Dance Class Details</h1>
      <DanceClassDetails match={match} />
    </div>
  );
}

export default DanceClassDetailsPage;
