// DanceClassDetails.jsx

import React, { useState, useEffect, useContext } from 'react';
import danceClassService from '../services/danceClass.services';
import { useNavigate } from 'react-router-dom';

function DanceClassDetails({ user, danceClass, loading, setDanceClass }) {
  const navigate = useNavigate();
  const [pictureFile, setPictureFile] = useState(null);

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
      setDanceClass(updatedDanceClass.data);
      console.log("Dance class updated successfully");
      navigate("/dance-classes")
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
    const keys = name.split('.');

    if (keys.length === 1) {
      setDanceClass(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else if (keys.length === 2) {
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
      <h2>Dance Class Details:</h2>
      <p>
        Title:
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
      </p>
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
          Teacher: {danceClass.teacher.firstName}
        </p>
      </div>
      <div>
        <p>
          Description:
          {user && user.status === 'teacher' ? (
            <textarea
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
      {user && user.status === 'teacher' && (
        <div>
          <p>
            Video Link:
            <input
              type="text"
              name="video"
              value={danceClass.video}
              onChange={handleInputChange}
            />
          </p>
        </div>
      )}
     
     

      {user && user.status === 'teacher' && (
        <>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}

     
      {danceClass?.comments?.map((comment) => {
        return (
          <div key={comment._id}>
            <h5>{comment.user.username} says:</h5>
            <h>{comment.text}</h>
          </div>
        )
      })}
      
    </div>
  );
}

export default DanceClassDetails;
