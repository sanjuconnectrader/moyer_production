import React from 'react';
import './Header.css';

const Header = () => (
  <section className="hero">
    {/* Full-bleed video background */}
    <video
      className="hero__video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/background-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Dark overlay to reduce video brightness */}
    <div className="hero__overlay"></div>

    {/* Content centered on the video */}
    <div className="hero__content">
      <h1>Commercial Photo–Video Production, Bonney Lake WA</h1>
      <p>Headshot Special · Videography · Photography · Restaurant Marketing</p>
      <a href="#contact" className="hero__btn">Get Started</a>
    </div>
  </section>
);

export default Header;