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

  console.log('User status:', localStorage.getItem('status'));

  const handleSubscribe = async (classId) => {
    try {
      await subscribeToClass(classId);
      // Optionally, you can show a success message or update the state to reflect the subscription
    } catch (error) {
      console.error('Error subscribing to class:', error);
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
            <button onClick={() => handleSubscribe(danceClass._id)}>Subscribe</button>
          </div>
        ))
      ) : (
        <p>No dance classes available</p>
      )}
      
    </div>
  );
}

export default DanceClassesList;



