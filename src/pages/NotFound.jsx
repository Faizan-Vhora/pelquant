import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-text">The page you're looking for doesn't exist.</p>
        <Link to="/" className="notfound-btn">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
