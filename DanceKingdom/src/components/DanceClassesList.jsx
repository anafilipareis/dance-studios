import React, { useState, useEffect } from 'react';
import { getAllDanceClasses, subscribeToClass } from '../services/auth.service';

function DanceClassesList() {
  const [danceClasses, setDanceClasses] = useState([]);

  useEffect(() => {
    const fetchDanceClasses = async () => {
      try {
        const classes = await getAllDanceClasses();
        setDanceClasses(classes);
      } catch (error) {
        console.error('Error fetching dance classes:', error);
      }
    };

    fetchDanceClasses();
  }, []);

  const handleSubscribe = async (classId) => {
    try {
      // Instead of subscribing directly here, let's navigate to the class details page
      // You can use the classId to construct the URL
      window.location.href = `/dance-classes/class/${classId}`;
    } catch (error) {
      console.error('Error navigating to class details:', error);
    }
  };

  return (
    <div>
      <h1>Dance Classes</h1>
      {danceClasses.length > 0 ? (
        danceClasses.map((danceClass) => (
          <div key={danceClass._id} className="dance-class">
            <h2>{danceClass.title}</h2>
            <p>Day: {danceClass.schedule.day}</p>
            <p>Time: {danceClass.schedule.time}</p>
            <p>Teacher: {danceClass.teacher}</p>
            <button onClick={() => handleSubscribe(danceClass._id)}>More Information</button>
          </div>
        ))
      ) : (
        <p>No dance classes available</p>
      )}
    </div>
  );
}

export default DanceClassesList;




