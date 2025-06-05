import React from 'react';
import './Restaurantheader.css';

const Restaurantheader = () => (
  <section
    className="Restaurantheader"
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/restaurant-header.jpg)` }}
  >
    <div className="Restaurantheader__overlay"></div>

    <div className="Restaurantheader__content">
      <h1>Restaurant Marketing</h1>
      <div className="Restaurantheader__underline"></div>
    </div>
  </section>
);

export default Restaurantheader;
