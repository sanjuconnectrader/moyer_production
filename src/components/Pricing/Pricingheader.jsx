import React from 'react';
import './Pricingheader.css';

const Pricingheader = () => {
  return (
    <section
      className="pricing-header"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Pricingpage.jpg)` }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h1>Pricing</h1>
        <div className="underline"></div>
      </div>
    </section>
  );
};

export default Pricingheader;