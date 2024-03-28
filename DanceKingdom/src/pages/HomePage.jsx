import React from 'react';
import MainCarousel from '../components/Carousel'; // Import your MainCarousel component
import '../styles/homePageStyles.css';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div className="container">
      <MainCarousel /> {/* Render the MainCarousel component */}
      
      {/* Additional content */}
      <div className="content">
        <div className="about-us">
          <h2>About Us</h2>
          <p>Established in 1990, Dance Kingdom has been a beacon of dance excellence in Amsterdam. 
            Over the years, our studio has been graced by extraordinary dancers who have left an indelible mark on the dance world. 
            Our vibrant community celebrates the joy of movement and self-expression. 
            Join us at Dance Kingdom where passion meets dance, and every step tells a story.</p>
        </div>

        {/* Information Section */}
        <div className="information">
          <h2>Information</h2>
          <div className="prices-container">
            <div className="price-box">
              <h3>20€ / 1 class</h3>
              <p>€20</p>
            </div>
            <div className="price-box">
              <h3>80€ / 5 classes</h3>
              <p>€80</p>
            </div>
            <div className="price-box">
              <h3>120€ / 10 classes</h3>
              <p>€120</p>
            </div>
            <div className="price-box">
              <h3>1 year unlimited</h3>
              <p>€50 per month</p>
            </div>
          </div>
        </div>

        <div className="contact">
          <h2>Contact</h2>
          {/* Add your contact form or contact information here */}
        </div>
      </div>

      <div>
      <Footer />
    </div>
    </div>
    
  );
};

export default HomePage;