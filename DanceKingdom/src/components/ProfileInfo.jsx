

import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service";
import danceClassService from "../services/danceClass.services";

function ProfileInfo() {
  const { user: userInfo } = useContext(AuthContext);

  const [editProfilePictureMode, setEditProfilePictureMode] = useState(false);
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [user, setUser] = useState(null);
  const [danceClasses, setDanceClasses] = useState([]);

  const handleProfilePictureChange = (e) => {
    setNewProfilePicture(e.target.files[0]);
  };

  const handleSubmitProfilePicture = () => {
    if (newProfilePicture) {
      const formData = new FormData();
      formData.append("profilePicture", newProfilePicture);

      profileService
        .updateProfile(formData)
        .then((response) => {
          console.log(response.data);
          setUser((prev) => ({
            ...prev,
            profilePictureUrl: response.data.user.profilePictureUrl,
          }));
          // Refresh user data or update profile picture in context
          // Reset states
          setEditProfilePictureMode(false);
          setNewProfilePicture(null);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    if (!userInfo._id) return;

    const getUserData = () => {
      profileService.getProfile({ id: userInfo._id }).then((data) => {
        setUser(data.data.user);
      });
    };

    const getTeacherClasses = () => {
      danceClassService
        .getTeacherDanceClasses()
        .then((response) => {
          setDanceClasses(response.data);
        })
        .catch((error) => {
          console.error("Error fetching teacher's dance classes:", error);
        });
    };

    getUserData();
    getTeacherClasses();
  }, [userInfo._id]);

  if (!user) {
    return <p>Loading</p>;
  }

  const handleSubscribe = async (classId) => {
    try {
      window.location.href = `/dance-classes/class/${classId}`;
    } catch (error) {
      console.error('Error navigating to class details:', error);
    }
  };

  return (
    <div className="baseProfInfo">
      <>
        <img
          className="profilePicture"
          src={user.profilePictureUrl}
          alt="profile-picture"
        />
        <button
          className="profPicEdit"
          onClick={() => setEditProfilePictureMode(true)}
        >
          New profile picture
        </button>
        {editProfilePictureMode && (
          <div className="EditProfilePicture">
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
            <button onClick={handleSubmitProfilePicture}>Upload</button>
            <button onClick={() => setEditProfilePictureMode(false)}>
              Cancel
            </button>
          </div>
        )}
        <h2 className="welcome-text"> Good to see you {user.username}</h2>
        <h4 className="status">{user.status}</h4>

        <div>
          <h3>My Classes:</h3>
          <ul>
            {danceClasses.map((danceClass) => (
              <li key={danceClass._id} className="myClasseslist">
                <h2>{danceClass.title}</h2>
                <p>Day: {danceClass.day}</p>
                <p>Time: {danceClass.time}</p>
                <button onClick={() => handleSubscribe(danceClass._id)}>
                  More Information
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    </div>
  );
}

export default ProfileInfo;






