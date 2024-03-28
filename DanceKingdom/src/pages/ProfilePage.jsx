import React, { useContext } from 'react';
import AddDanceClass from '../components/AddDanceClass';
import ProfileInfo from '../components/ProfileInfo';
import { AuthContext } from '../context/auth.context';
import Footer from '../components/footer'; 
import '../index.css';
import '../styles/profileStyles.css'

function ProfilePage() {
  const { user } = useContext(AuthContext);

  const isTeacher = user && user.status === 'teacher';

  return (
    <div className='background-color'>
    <>
    <div className="profile-page-container">
      <div className="profile-info-box">
        <ProfileInfo />
      </div>
      {isTeacher && (
        <div className="add-dance-class-box">
          <AddDanceClass />
        </div>
      )}
      
    </div> 
    <Footer /> </>
    </div>
  );
}

export default ProfilePage;
