import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-bracket">[</span>PELQUANT
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {isHome ? (
            <>
              <a href="#services">Services</a>
              <Link to="/about">About</Link>
              <a href="#marketing">Marketing</a>
              <Link to="/contact">Contact</Link>
            </>
          ) : (
            <>
              <Link to="/#services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/#marketing">Marketing</Link>
              <Link to="/contact">Contact</Link>
            </>
          )}
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
