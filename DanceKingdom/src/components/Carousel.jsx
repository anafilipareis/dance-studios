import React, { useState, useEffect } from 'react';
import one from '../assets/slideshowmale.jpg';
import two from '../assets/slideshowballet.jpg';
import three from '../assets/slideshowclass.jpg';
import four from '../assets/slideshowsenior.jpg';
import five from '../assets/slideshowkid.jpg';
import six from '../assets/slideshowcontem.jpg';
import seven from '../assets/slideshowgroup.jpg';
import '../App.css'; // Import custom CSS for styling

function MainCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [one, two, three, four, five, six, seven];
  const numImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % numImages);
    }, 3000);
    return () => clearInterval(interval);
  }, [numImages]);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {images.map((image, index) => (
          <img
            key={index}
            className={`carousel-image ${index === activeIndex ? 'active' : ''}`}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


export default MainCarousel;















