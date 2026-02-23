import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-bracket">[</span>PELQUANT
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#marketing">Marketing</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button className="btn-ghost">Talk to Sales</button>
          <button className="btn-primary">Get Started</button>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
