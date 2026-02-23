import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <img src="/logo.png" alt="Pelquant" className="hero-logo" />
        <p className="hero-subtitle">Fullstack Development & SecOps</p>
        <p className="hero-description">
          Building secure, scalable solutions for the modern web
        </p>
        <div className="hero-cta">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
