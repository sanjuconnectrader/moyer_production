import React from 'react';
import './Headshotheader.css';

const Headshotheader = () => {
  return (
    <section
      className="Headshotheader"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Headshot-header-image.jpg)` }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h1>Headshots Packages</h1>
        <div className="underline"></div>
      </div>
    </section>
  );
};

export default Headshotheader;