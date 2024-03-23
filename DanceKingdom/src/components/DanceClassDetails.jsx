// DanceClassDetails.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import danceClassService from '../services/danceClass.services';

function DanceClassDetails({  }) {
  const [danceClass, setDanceClass] = useState(null);
  const [loading, setLoading] = useState(true);
const params=useParams()
console.log(params)

  useEffect(() => {
    const fetchDanceClassDetails = async () => {
      try {
        const response = await danceClassService.getSingleClass(params.id);
        setDanceClass(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dance class details:', error);
        setLoading(false);
      }
    };

    fetchDanceClassDetails();
  }, [params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!danceClass) {
    return <p>Dance class not found</p>;
  }

  return (
    <div>
      <h1>{danceClass.title}</h1>
      <div>
        <p>Day: {danceClass.schedule.day}</p>
        <p>Time: {danceClass.schedule.time}</p>
        <p>Teacher: {danceClass.teacher}</p>
        <p>Spots Left: {danceClass.spotsLeft}</p>
      </div>
      <div>
        <p>Description: {danceClass.description}</p>
      </div>
      <div>
        <img src={danceClass.pictures[0]} alt="Dance Class" />
      </div>
    </div>
  );
}

export default DanceClassDetails;
