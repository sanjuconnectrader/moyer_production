import React from 'react';
import './WeddingPhotographyHeader.css';

const WeddingPhotographyHeader = () => (
  <section
    className="wedding-photography"
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/wedding-header.jpg)` }}
  >
    <div className="wedding-photography__overlay"></div>

    <div className="wedding-photography__content">
      <h1>Wedding Photography</h1>
      <div className="wedding-photography__underline"></div>
    </div>
  </section>
);

export default WeddingPhotographyHeader;
