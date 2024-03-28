import React from 'react';
import MainCarousel from '../components/Carousel'; // Import your MainCarousel component
import '../styles/homePageStyles.css';
import Footer from '../components/footer';
import pricesImage from '../assets/prices.png'; // Import the prices image

const HomePage = () => {
  return (
    <div className="container">
      <MainCarousel /> {/* Render the MainCarousel component */}
      
      {/* About Us Section */}
      <div className="content">
        <div className="about-us">
          <h2>About Us</h2>
          <p>Dance Kingdom has been a beacon of dance excellence in Amsterdam. 
            Over the years, our studio has been graced by extraordinary dancers who have left an indelible mark on the dance world. 
            Our vibrant community celebrates the joy of movement and self-expression. 
            Join us at Dance Kingdom where passion meets dance, and every step tells a story.</p>
        </div>

        {/* Watch Out Our Classes Section */}
        <div className="watch-our-classes">
          <h2>Watch Out Our Classes</h2>
          {/* Embedded YouTube Video */}
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_H7CRdx7Vjk"
              title="Watch Our Classes"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Prices Section */}
        <div className="prices">
          <h2>Prices</h2>
          {/* Image for Prices section */}
          <div className="prices-image">
            <img src={pricesImage} alt="Prices" />
          </div>
        </div>

        {/* Information Section */}
        <div className="information">
          <h2>Information</h2>
          {/* Information content */}
          {/* Add your contact form or contact information here */}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;


