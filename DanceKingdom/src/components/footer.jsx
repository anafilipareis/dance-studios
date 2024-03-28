import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="URL_TO_YOUTUBE" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="URL_TO_INSTAGRAM" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="URL_TO_FACEBOOK" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Dance Kingdom All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
