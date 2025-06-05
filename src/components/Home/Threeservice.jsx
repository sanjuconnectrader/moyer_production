// src/components/Threeservice/Threeservice.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Threeservice.css';

const SERVICES = [
  {
    img: 'livestream-header.jpg',
    title: 'Live Stream',
    blurb: 'Dynamic live-streaming solutions that broadcast your brand in real time, captivating audiences with broadcast-quality visuals and authentic, on-the-spot storytelling',
    path: '/live-stream'
  },
  {
    img: 'drone-photography.jpg',
    title: 'Drone Photography',
    blurb: 'Immersive live-drone coverage that captures breathtaking aerial perspectives in real time, elevating your story and captivating audiences on every platform.',
    path: '/drone-photography'
  },
  {
    img: 'wedding-header.jpg',
    title: 'Wedding Photography',
    blurb: 'Artful retouching, signature color toning, and elegant album design that transform your wedding moments into timeless photographic heirlooms',
    path: '/wedding-photography'
  },
];

const Threeservice = () => (
  <section className="services-section">
    <div className="services-container">
      <div className="services-header">
        <h2 className="services-title">Our Premium Services</h2>
        <p className="services-subtitle">Delivering exceptional quality with creative expertise</p>
      </div>
      
      <div className="services-grid">
        {SERVICES.map(({ img, title, blurb, path }, index) => (
          <div key={index} className="service-card">
            <div className="card-inner">
              <div className="card-media">
                <img 
                  src={img} 
                  alt={title} 
                  loading="lazy" 
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{blurb}</p>
                <Link to={path} className="card-link">
                  Explore service
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Threeservice;