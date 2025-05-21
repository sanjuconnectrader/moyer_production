import React from 'react';
import { Link } from 'react-router-dom';
import './Photographyheader.css';

const Photography = () => {
  return (
    <section
      className="Photography"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/photography.jpg)` }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h1>Photography</h1>
        <div className="underline"></div>
        <div className="button-container">
          <Link to="/drone-photography" className="photo-btn">Drone Photography</Link>
          <Link to="/wedding-photography" className="photo-btn">Wedding Photography</Link>
      
        </div>
      </div>
    </section>
  );
};

export default Photography;