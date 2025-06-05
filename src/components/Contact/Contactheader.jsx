import React from 'react';
import './Contactheader.css';

const Contactheader = () => {
  return (
    <section
      className="contact-header"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/contact-header.jpg)` }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h1>Contact Us</h1>
        <div className="underline"></div>
      </div>
    </section>
  );
};

export default Contactheader;