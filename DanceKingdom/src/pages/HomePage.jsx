import React from 'react';
import MainCarousel from '../components/Carousel';
import Footer from '../components/footer';
import pricesImage from '../assets/prices.png';
import contactUs from '../assets/contactus.png';
import danceGuy from '../assets/danceguy.png';
import danceGuy2 from '../assets/danceguy2.png'; // Import the new image
import '../styles/homePageStyles.css';

const HomePage = () => {
  return (
    <div className="container">

      <MainCarousel />

      <div className="content">
        {/* About Us and Watch Out Our Classes Section */}

        <div className="about-us-section">

          <div className="about-us-image">
            <img src={danceGuy2} alt="Another Image" style={{ width: '250px', height: 'auto' }} />
          </div>

          <div className="about-us">
            <h2>About Us</h2>
            <p>Dance Kingdom has been a beacon of dance excellence in Amsterdam. Over the years, our studio has been graced by extraordinary dancers who have left an indelible mark on the dance world. Our vibrant community celebrates the joy of movement and self-expression. Join us at Dance Kingdom where passion meets dance, and every step tells a story.</p>
          </div>

          {/* <div className="about-us-image">
            <img src={danceGuy2} alt="Another Image" style={{ width: '250px', height: 'auto' }} />
          </div> */}

          <div className="watch-our-classes">
            <h2>Watch Out Our Classes</h2>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_H7CRdx7Vjk"
                title="Watch Our Classes"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Prices and Contact Us Section */}
        <div className="prices-contact-section">
          <div className="prices">
            <div className="prices-image">
              <img src={pricesImage} alt="Prices" style={{ width: '500px', height: 'auto' }} />
            </div>
          </div>

          <div className="contact-us">
            <div className="contact-us-image">
              <img src={contactUs} alt="Contact us" style={{ width: '400px', height: 'auto' }} />
            </div>
          </div>

          <div className="danceguy-image-section">
            <div className="danceguy-image">
              <img src={danceGuy} alt="Dance Image" style={{ width: '250px', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;




