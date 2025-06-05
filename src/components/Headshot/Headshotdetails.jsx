import React from 'react';
import './Headshotdetails.css';

const images = [
  'hd1.jpg',
  'hd2.jpg',
  'hd3.jpg',
  'hd4.jpg',
];

const Headshotdetails = () => (
  <section className="headshot-details">
    <div className="headshot-details__container">
      <div className="headshot-details__content">
        <p className="headshot-details__paragraph">
          At Moyer Productions, we know a stand-out headshot is your digital
          handshake in today's competitive market. We deliver premium
          headshot photography right here in Bonney Lake, serving professionals
          across the Puget Sound region. Step into our comfortable studio and
          let us capture the confidence and character that make you
          unforgettable.
        </p>
        <p className="headshot-details__paragraph">
          We can just as easily bring the studio to you. Our fully mobile
          setup—complete with pro-grade lighting, neutral backdrops, and
          tethered capture—turns any office, co-working loft, or outdoor
          location into a portrait set. Each image is shot on high-resolution
          full-frame cameras and then tastefully retouched to preserve natural
          skin texture while refining stray hairs and distractions. You'll
          receive multiple crops and aspect ratios sized for LinkedIn,
          websites, and print, all delivered through an intuitive online
          gallery. Volume packages keep large teams consistent and
          cost-effective, and our punctual scheduling plus satisfaction
          guarantee ensure you walk away with headshots you're proud to share.
        </p>
      </div>

      <div className="headshot-details__gallery">
        {images.map((src, idx) => (
          <div className="headshot-details__item" key={idx}>
            <div className="headshot-details__image-wrapper">
              <img 
                src={src} 
                alt={`Professional headshot example ${idx + 1}`} 
                className="headshot-details__image"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Headshotdetails;