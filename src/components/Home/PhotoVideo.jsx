import React from 'react';
import { motion } from 'framer-motion';
import './PhotoVideo.css';

const items = [
  { 
    label: 'Photos',  
    img: './home-ph1.jpg',  
    link: '/photography',
    bgGradient: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)'
  },
  { 
    label: 'Videos',  
    img: './home-ph2.jpg',  
    link: '/video',
    bgGradient: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)'
  },
];

const cardVariants = {
  hover: {
    y: -10,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.08,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const buttonVariants = {
  initial: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    color: '#fff'
  },
  hover: {
    backgroundColor: '#fff',
    color: '#000',
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const PhotoVideo = () => (
  <section className="photo-video-section">
    <div className="photo-video-container">
      {items.map(({ label, img, link, bgGradient }) => (
        <motion.a 
          key={label}
          href={link}
          className="photo-video-card"
          variants={cardVariants}
          whileHover="hover"
          initial="initial"
        >
          <div className="image-wrapper">
            <motion.img 
              src={img} 
              alt={`${label} thumbnail`} 
              loading="lazy"
              variants={imageVariants}
            />
            <div 
              className="image-overlay"
              style={{ background: bgGradient }}
            />
          </div>
          
          <motion.span 
            className="photo-video-btn"
            variants={buttonVariants}
          >
            {label}
            <span className="btn-arrow">→</span>
          </motion.span>
        </motion.a>
      ))}
    </div>
  </section>
);

export default PhotoVideo;
