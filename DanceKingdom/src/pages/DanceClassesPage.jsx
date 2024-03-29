import React from 'react';
import DanceClasses from '../components/DanceClassesList';
import Footer from '../components/footer'; // Import your Footer component

const DanceClassesPage = () => {
  return (
    
    <div className='background-color'> 
     <div className='danceClassPage-container'>
      <DanceClasses />
      </div>
      <Footer /> 
    </div>
  );
};

export default DanceClassesPage;



