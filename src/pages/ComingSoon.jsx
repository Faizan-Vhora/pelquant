import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="content-wrapper">
        <h1 className="brand-name">pelquant</h1>
        <h2 className="title">Coming Soon</h2>
        <p className="subtitle">We're working hard to bring you something amazing</p>
        <div className="progress-dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;