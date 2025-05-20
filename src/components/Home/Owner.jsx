import React from 'react';
import './Owner.css';

const Owner = () => (
  <div className="owner-container">
    <section className="owner">
      {/* Text Column */}
      <div className="owner__copy">
        <h2 className="owner__title">Moyer Production Co LLC</h2>
        <div className="owner__underline"></div>
        
        <p className="owner__description">
          I pride myself on clear communication, fast turn-around times, and a
          collaborative workflow that keeps you involved from first storyboard to
          final edit. Each project—big or small—gets the same meticulous attention
          to lighting, sound, and cinematic storytelling, so your brand message is
          unmistakable. I invest in cutting-edge cameras, licensed drone gear, and
          color-grading workflows that make your visuals pop on every screen, from
          smartphones to cinema displays. Serving Bonney Lake and the greater
          Puget Sound region, I'm committed to building long-term partnerships
          that help local brands stand out and grow.
        </p>
      </div>

      {/* Image Column */}
      <figure className="owner__media">
        <div className="owner__image-wrapper">
          <img
            src="https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/d8c0c1c9-b2ea-4cbf-81f6-a7fdd2e551a3/LukeMoyerPhotos.jpeg?format=2500w"
            alt="Owner behind the camera"
            loading="lazy"
            className="owner__image"
          />
        </div>
      </figure>
    </section>
  </div>
);

export default Owner;