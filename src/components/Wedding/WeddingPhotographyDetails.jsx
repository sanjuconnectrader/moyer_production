// src/components/WeddingPhotographyDetails/WeddingPhotographyDetails.jsx
import React from 'react';
import './WeddingPhotographyDetails.css';

const WeddingPhotographyDetails = () => (
  <section className="wedding-photography-details">
    <div className="wedding-photography-details__container">
      {/* ── Centered Heading ── */}
      <h2 className="wedding-photography-details__heading">
        Capture your love story in timeless images with&nbsp;Moyer&nbsp;Productions in&nbsp;Bonney&nbsp;Lake, Washington!
      </h2>

      {/* ── Main Copy ── */}
      <div className="wedding-photography-details__content">
        <p className="wedding-photography-details__paragraph">
          At <strong>Moyer Productions</strong> we deliver end-to-end&nbsp;
          <em>wedding photography</em> that rivals premier destination studios
          while keeping the warm, personal touch of a hometown partner. From
          timeline consultations and must-have shot lists to art-direction and
          masterful lighting, we document every heartfelt moment—first looks,
          quiet glances, and joyous dance-floor celebrations—so your special day
          lives on in beautiful, authentic detail.
        </p>

        <p className="wedding-photography-details__paragraph">
          Our seasoned team manages each wedding in-house for seamless quality
          control. Dual photographers arrive with full-frame cameras, fast prime
          lenses, and off-camera flash systems, ensuring gorgeously lit images in
          everything from sun-drenched gardens to candle-lit ballrooms. A calm,
          unobtrusive approach lets you stay present, while real-time previews on
          calibrated tablets reassure you that every key moment is captured
          perfectly.
        </p>

        <p className="wedding-photography-details__paragraph">
          When the confetti settles, our editors apply cinematic color grading,
          tasteful retouching, and artful black-and-white treatments. You’ll
          receive a curated highlight slideshow, a full-resolution online
          gallery, and social-media-ready sneak peeks—plus optional heirloom
          albums and wall-art design. From engagement session to final album,&nbsp;
          <strong>Moyer Productions</strong> turns your once-in-a-lifetime day
          into stunning photographs that will be treasured for generations.
        </p>
      </div>
    </div>
  </section>
);

export default WeddingPhotographyDetails;
