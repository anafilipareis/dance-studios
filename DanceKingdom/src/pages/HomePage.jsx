
import React from 'react';
import MainCarousel from '../components/Carousel'; // Import your MainCarousel component

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to Our Dance School</h1>
      <MainCarousel /> {/* Render the MainCarousel component */}
    </div>
  );
};

export default HomePage;
