import React from 'react';
import './Packagesheader.css';

const Packagesheader = () => {
  return (
    <section
      className="Packagesheader"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/camera-package-page.jpg)` }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h1>Content Creation When You Need It</h1>
        <div className="underline"></div>
        <p className="subheading">
          With our quarterly content creation packages, your business can have a professional photographer and videographer on standby to make any visual content you need for your business. We work with you to determine the best options for your social media, commercials, advertisements, headshots, and website content.
        </p>
      </div>
    </section>
  );
};

export default Packagesheader;