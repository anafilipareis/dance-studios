import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service"; // Import profileService instead of userService

function ProfileInfo() {
  const { user: userInfo } = useContext(AuthContext);
  
  const [editProfilePictureMode, setEditProfilePictureMode] = useState(false);
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [user, setUser] = useState(null)

  const handleProfilePictureChange = (e) => {
    setNewProfilePicture(e.target.files[0]);
  };

  const handleSubmitProfilePicture = () => {
    if (newProfilePicture) {
      const formData = new FormData();
      formData.append("profilePicture", newProfilePicture);

      profileService.updateProfile(formData) 
        .then((response) => {
          console.log(response.data)
          setUser(prev => ({...prev, profilePictureUrl: response.data.user.profilePictureUrl}))
          // Refresh user data or update profile picture in context
          // Reset states
          setEditProfilePictureMode(false);
          setNewProfilePicture(null);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => { 
    if(!userInfo._id) return 
    const getUserData = () => { 
      profileService.getProfile ( { id:userInfo._id})
      .then((data) => { 
        setUser(data.data.user)
      })
    }
    getUserData()
}, [userInfo._id])
  if(!user) { 
    return (<p>loading</p>) 
  }
  return (
    <div className="baseProfInfo"> 
      {editProfilePictureMode ? (
        <div className="EditProfilePicture">
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
          <button onClick={handleSubmitProfilePicture}>Save</button>
          <button onClick={() => setEditProfilePictureMode(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <img className="profilePicture" src={user.profilePictureUrl} alt="profile-picture" />
          
          <h2 className="welcome-text"> Good to see you {user.username}</h2>
          <h4 className="status">{user.status}</h4>
          <button onClick={() => setEditProfilePictureMode(true)}>Edit Profile Picture</button>
        </>
      )}
    </div>
  );
}

export default ProfileInfo;





























// import { AuthContext } from "../context/auth.context";
// import { useContext } from "react";

// function ProfileInfo() {

//     const {user} = useContext(AuthContext);

//     return (

//         <div className="baseProfInfo"> 
//             <img className="profilePicture"
//                src={user.profilePictrure} alt="profile-picture" />
//             <h2 className="welcome-text"> Good to see you {user.username}</h2>
//             <h4 className="status">{user.status}</h4>
//         </div>
//     );
// }

// export default ProfileInfo;