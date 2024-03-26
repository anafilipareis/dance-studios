// DanceClassDetails.jsx

import React, { useState, useEffect, useContext } from 'react';
import danceClassService from '../services/danceClass.services';
import { useNavigate } from 'react-router-dom';


function DanceClassDetails({ user, danceClass, loading, setDanceClass }) {
//const [danceClass, setDanceClass] = useState(null);
  console.log(user)
  const navigate = useNavigate();


  const handleUpdate = async () => {
    try {     
        const updatedData = {
            title: danceClass.title,
              day: danceClass.day,
              time: danceClass.time,
            description: danceClass.description,
            picture: danceClass.picture
          };
        
      const updatedDanceClass = await danceClassService.updateSingleClass(danceClass._id, updatedData); 
      console.log(updatedDanceClass)     
      setDanceClass(updatedDanceClass.data);
      console.log("Dance class updated successfully");
    } catch (error) {
      console.error("Error updating dance class:", error);
    }
  };
  
  const handleDelete = async () => {
    try {
     
      await danceClassService.deleteSingleClass(danceClass._id);      
      console.log("Dance class deleted successfully");
      navigate("/dance-classes")

    } catch (error) {
      console.error("Error deleting dance class:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Split the name into keys to handle nested properties
    const keys = name.split('.');
    
    if (keys.length === 1) {
      // If it's not a nested property, update directly
      setDanceClass(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else if (keys.length === 2) {
      // If it's a nested property, update the nested object
      setDanceClass(prevState => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: value
        }
      }));
    }
  };

 
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!danceClass) {
    return <p>Dance class not found</p>;
  }

  return (
    <div>
      <h1>
        {user && user.status === 'teacher' ? (
          <input
            type="text"
            name="title"
            value={danceClass.title}
            onChange={handleInputChange}
          />
        ) : (
          <>{danceClass.title}</>
        )}
      </h1>
      <div>
        <p>
          Day:
          {user && user.status === 'teacher' ? (
            <input
              type="text"
              name="day"
              value={danceClass.day}
              onChange={handleInputChange}
            />
          ) : (
            <>{danceClass.day}</>
          )}
        </p>
        <p>
          Time:
          {user && user.status === 'teacher' ? (
            <input
              type="text"
              name="time"
              value={danceClass.time}
              onChange={handleInputChange}
            />
          ) : (
            <>{danceClass.time}</>
          )}
        </p>
        <p>
          Teacher:
          {user && user.status === 'teacher' ? (
            <input
              type="text"
              name="teacher"
              value={danceClass.teacher}
              onChange={handleInputChange}
            />
          ) : (
            <>{danceClass.teacher}</>
          )}
        </p>
        <p>
          Spots Left: {danceClass.spotsLeft}
        </p>
      </div>
      <div>
        <p>
          Description:
          {user && user.status === 'teacher' ? (
            <input
              type="text"
              name="description"
              value={danceClass.description}
              onChange={handleInputChange}
            />
          ) : (
            <>{danceClass.description}</>
          )}
        </p>
      </div>
      <div>
        <p>
          Watch out our Dance Class:
          {user && user.status === 'teacher' ? (
            <input
              type="text"
              name="video"
              value={danceClass.video}
              onChange={handleInputChange}
            />
          ) : (
            <>{danceClass.video}</>
          )}
        </p>
      </div>
      <div>
        {/* <img src={danceClass.picture[0]} alt="Dance Class" /> */}
      </div>
      {user && user.status === 'teacher' && (
        <>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
<h2>Comments</h2>
      {danceClass?.comments?.map((comment) => { 
        return (
            <div key={comment._id}>   
                <h5>{comment.user.username} says:</h5> 
                <h>{comment.text} </h> 
            </div>
        ) 

      })}
      
    </div>   
    
  );
}

export default DanceClassDetails;
