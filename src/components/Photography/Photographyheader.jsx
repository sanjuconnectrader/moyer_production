import React from 'react';
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
      </div>
    </section>
  );
};

export default Photography;