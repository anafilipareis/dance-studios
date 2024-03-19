import React, { useState, useEffect } from 'react';
import one from '../assets/ballet_homepage.jpg';
import two from '../assets/hiphop_homepage.jpg';
import three from '../assets/salsa_homepage.jpg';
import '../App.css'; // Import custom CSS for styling

function MainCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [one, two, three];
  const numImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % numImages);
    }, 3000); // Adjust the interval for a faster transition
    return () => clearInterval(interval);
  }, [numImages]);

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            className="carousel-image"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MainCarousel;















