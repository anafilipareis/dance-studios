
import React from 'react';
import MainCarousel from '../components/Carousel'; // Import your MainCarousel component

const HomePage = () => {
  return (
    <div className="container">
      <MainCarousel /> {/* Render the MainCarousel component */}
      
      {/* Additional content */}
      <div className="content">
        <div className="about-us">
          <h2>About Us</h2>
          <p>Add your about us content here...</p>
        </div>

        <div className="information">
          <h2>Information</h2>
          <p>Add your information content here...</p>
        </div>

        <div className="contact">
          <h2>Contact</h2>
          {/* Add your contact form or contact information here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;