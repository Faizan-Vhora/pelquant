import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Pelquant</h3>
          <p>Fullstack Development & SecOps</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@pelquant.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Pelquant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
