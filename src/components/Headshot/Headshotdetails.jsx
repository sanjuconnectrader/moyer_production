import React from 'react';
import './Headshotdetails.css';

const images = [
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/ff43d20d-7e1c-4b31-9fc0-a8dfaaca32d9/BNI+Headshots+Jan+24-23.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/4e9c96c3-1f45-47c2-af6e-ad177d942c54/Cetera+Investors-10.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/08ea8434-7842-4526-a097-71bc73396378/The+Suite+Brand+Photos-13.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/1a8ea236-0f2f-4724-8dbc-3bb554a09ca7/Center+Collision+Headshots-18.jpg?format=1000w',
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