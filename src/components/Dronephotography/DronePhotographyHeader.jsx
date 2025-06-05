import React from 'react';
import './DronePhotographyHeader.css';

const DronePhotographyHeader = () => (
  <section
    className="drone-photography"
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/drone-photography.jpg)` }}
  >
    <div className="drone-photography__overlay"></div>

    <div className="drone-photography__content">
      <h1>Drone Photography</h1>
      <div className="drone-photography__underline"></div>
    </div>
  </section>
);

export default DronePhotographyHeader;
