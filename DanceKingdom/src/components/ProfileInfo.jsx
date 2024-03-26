
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service"; // Import profileService instead of userService
import danceClassService from "../services/danceClass.services"; // Import DanceClassService


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
      danceClassService.getAllDanceClasses()
        .then((response) => {
          const userCreatedClasses = response.data.filter(danceClass => danceClass.teacher === userInfo._id);
          setDanceClasses(userCreatedClasses);
        })
        .catch((error) => {
          console.error("Error fetching dance classes:", error);
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
      // Instead of subscribing directly here, let's navigate to the class details page
      // You can use the classId to construct the URL
      window.location.href = `/dance-classes/class/${classId}`;
    } catch (error) {
      console.error('Error navigating to class details:', error);
    }
  };


  return (
    <div className="baseProfInfo">
      {editProfilePictureMode ? (
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
      ) : (
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
            Edit Profile Picture
          </button>
          <h2 className="welcome-text"> Good to see you {user.username}</h2>
          <h4 className="status">{user.status}</h4>
          {/* Display fetched dance classes */}
          <div>
            <h3>My Classes:</h3>
            <ul>
              {danceClasses.map((danceClass) => (
                <li key={danceClass._id} className="myClasseslist">
                  <h2>{danceClass.title}</h2>
                  <p>Day: {danceClass.day}</p>
                  <p>Time: {danceClass.time}</p>
                  <p>Teacher: {danceClass.teacher}</p>
                  <button onClick={() => handleSubscribe(danceClass._id)}>More Information</button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileInfo;

































// import { useState, useContext, useEffect } from "react";
// import { AuthContext } from "../context/auth.context";
// import profileService from "../services/profile.service"; // Import profileService instead of userService

// function ProfileInfo() {
//   const { user: userInfo } = useContext(AuthContext);
  
//   const [editProfilePictureMode, setEditProfilePictureMode] = useState(false);
//   const [newProfilePicture, setNewProfilePicture] = useState(null);
//   const [user, setUser] = useState(null)

//   const handleProfilePictureChange = (e) => {
//     setNewProfilePicture(e.target.files[0]);
//   };

//   const handleSubmitProfilePicture = () => {
//     if (newProfilePicture) {
//       const formData = new FormData();
//       formData.append("profilePicture", newProfilePicture);

//       profileService.updateProfile(formData) 
//         .then((response) => {
//           console.log(response.data)
//           setUser(prev => ({...prev, profilePictureUrl: response.data.user.profilePictureUrl}))
//           // Refresh user data or update profile picture in context
//           // Reset states
//           setEditProfilePictureMode(false);
//           setNewProfilePicture(null);
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   useEffect(() => { 
//     if(!userInfo._id) return 
//     const getUserData = () => { 
//       profileService.getProfile ( { id:userInfo._id})
//       .then((data) => { 
//         setUser(data.data.user)
//       })
//     }
    
//     getUserData()
//     }, [userInfo._id])
//         if(!user) { 
//     return (<p>loading</p>) 
//   }


//   return (
//     <div className="baseProfInfo"> 
//       {editProfilePictureMode ? (
//         <div className="EditProfilePicture">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleProfilePictureChange}
//           />
//           <button onClick={handleSubmitProfilePicture}>Upload</button>
//           <button onClick={() => setEditProfilePictureMode(false)}>Cancel</button>
//         </div>
//       ) : (
//         <>
//           <img className="profilePicture" src={user.profilePictureUrl} alt="profile-picture" />
//           <button className="profPicEdit" onClick={() => setEditProfilePictureMode(true)}>Edit Profile Picture</button>
//           <h2 className="welcome-text"> Good to see you {user.username}</h2>
//           <h4 className="status">{user.status}</h4>
          
//         </>
//       )}
//     </div>
//   );
// }

// export default ProfileInfo;