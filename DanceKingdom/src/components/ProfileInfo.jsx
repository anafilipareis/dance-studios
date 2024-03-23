import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service"; // Import profileService instead of userService

function ProfileInfo() {
  const { user } = useContext(AuthContext);
  const [editProfilePictureMode, setEditProfilePictureMode] = useState(false);
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    setNewProfilePicture(e.target.files[0]);
  };

  const handleSubmitProfilePicture = () => {
    if (newProfilePicture) {
      const formData = new FormData();
      formData.append("profilePicture", newProfilePicture);

      profileService.updateProfile(formData) // Use profileService instead of userService
        .then(() => {
          // Refresh user data or update profile picture in context
          // Reset states
          setEditProfilePictureMode(false);
          setNewProfilePicture(null);
        })
        .catch((error) => console.log(error));
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
          <button onClick={handleSubmitProfilePicture}>Save</button>
          <button onClick={() => setEditProfilePictureMode(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <img className="profilePicture" src={user.profilePicture} alt="profile-picture" />
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