import React, { useContext } from 'react';
import AddDanceClass from '../components/AddDanceClass';
import ProfileInfo from '../components/ProfileInfo';
import { AuthContext } from '../context/auth.context';

function ProfilePage() {
  const { user } = useContext(AuthContext);

  const isTeacher = user && user.status === 'teacher';

  return (
    <>
      <ProfileInfo />
      {isTeacher && <AddDanceClass />}
    </>
  );
}

export default ProfilePage;