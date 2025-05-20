import React from 'react';
import './Videoheader.css';

const Videoheader = () => {
  return (
    <section
      className="video-production"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/video-prod.webp)` }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h1>Video Production Packages</h1>
        <div className="underline"></div>
      </div>
    </section>
  );
};

export default Videoheader;