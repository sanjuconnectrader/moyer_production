import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Packagedetails.css';

const getYouTubeId = (url) => {
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1);
    if (u.searchParams.has('v')) return u.searchParams.get('v');
    const embedMatch = u.pathname.match(/\/embed\/([^/?]+)/);
    return embedMatch ? embedMatch[1] : null;
  } catch {
    return null;
  }
};

const YouTubeLazy = ({ url, title }) => {
  const [play, setPlay] = useState(false);
  const [hover, setHover] = useState(false);
  const id = getYouTubeId(url);

  if (!id) {
    return (
      <motion.div 
        className="pd__placeholder"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Video unavailable
      </motion.div>
    );
  }

  const thumb = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return play ? (
    <motion.div
      className="pd__video-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <iframe
        className="pd__video"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
      <motion.button
        className="pd__close-btn"
        onClick={() => setPlay(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Close video"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </motion.button>
    </motion.div>
  ) : (
    <motion.button
      className="pd__thumb"
      onClick={() => setPlay(true)}
      aria-label={`Play ${title}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <div className="pd__thumb-image">
        <motion.img 
          src={thumb} 
          alt={title} 
          loading="lazy"
          initial={{ scale: 1 }}
          animate={{ scale: hover ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="pd__gradient-overlay" />
      </div>
      
      <motion.div 
        className="pd__play"
        initial={{ scale: 1 }}
        animate={{ scale: hover ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
          <motion.circle 
            cx="40" 
            cy="40" 
            r="38" 
            stroke="rgba(255,255,255,0.2)" 
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: hover ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <path d="M32 24v32l18-16-18-16z" fill="currentColor" />
        </svg>
      </motion.div>
    </motion.button>
  );
};

const CONTENT = [
  {
    type: 'video',
    media: 'https://youtu.be/6lFRq1rxPKI?si=1sjvpFliB-MfdfF1',
    heading: 'Brand Video – 8-12 production hours',
    copy: 'Your brand video is the primary video for your business that tells customers who you are and what you do. This is a longer, 2-4 minute video that is great for the main page of your website, allowing clients to build trust in you and your team before they ever walk through the door.',
  },
  {
    type: 'video',
    reverse: true,
    media: 'https://youtu.be/4kJ-Fy2lECs?si=gkwXR7XRXvgOtj9K',
    heading: 'Commercial – 2-4 production hours',
    copy: 'Highlight a sale, let customers know about a special event, or showcase your work with a 30-second commercial.',
  },
  {
    type: 'video',
    media: 'https://youtu.be/yEdXWBxb8aQ?si=45Ge1MlkWPPMQyPJ',
    heading: 'Social Media Videos – 1-2 production hours',
    copy: 'Showcase your business on social media! Create trendy videos, satisfying time-lapses, and project highlights that help reach customers where they spend most of their screen time.',
  },
  {
    type: 'photos',
    reverse: true,
    heading: 'Photography – 1-4 production hours',
    copy: 'Professional photography that showcases your business. Headshots, product photos, working photos, before-and-after photos, event coverage, drone photography, and more!',
    images: [
      'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/a627b5a3-677f-476a-9d1a-7d101e7708d4/Shaun+and+Shelby+Engagement+-35.jpg?format=1000w',
      'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/bb0130d3-bd30-42e4-837b-b37335de8148/Forks+and+Corks+2023-74.jpg?format=1000w',
      'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/3dbd8900-e73e-448d-9295-7e6f0de21a85/Sumner+Rainier.jpg?format=1000w',
    ],
  },
];

const PackageDetails = () => (
  <section className="pd-container">
    <div className="pd-background">
      <div className="pd-swoosh" />
    </div>

    <div className="pd-content">
      <div className="pd-intro">
        <h2 className="pd-title">Content Creation Packages</h2>
        <p className="pd-description">
          Each business has unique photography and video needs. Below are some examples of great
          products that will help your business shine on your website, social media, advertisements,
          and anywhere else your business needs. Your quarterly hours can go towards any photo or
          video project.
        </p>
      </div>

      <div className="pd-blocks">
        {CONTENT.map((block, idx) => (
          <div
            key={idx}
            className={`pd-block ${block.reverse ? 'reverse' : ''}`}
          >
            <div className="pd-media">
              {block.type === 'video' ? (
                <YouTubeLazy url={block.media} title={block.heading} />
              ) : (
                <div className="pd-photo-grid">
                  <div className="pd-photo-main">
                    <img
                      src={block.images[0]}
                      alt="Primary content"
                      loading="lazy"
                    />
                  </div>
                  <div className="pd-photo-secondary">
                    <img
                      src={block.images[1]}
                      alt="Secondary content 1"
                      loading="lazy"
                    />
                    <img
                      src={block.images[2]}
                      alt="Secondary content 2"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="pd-text">
              <h3 className="pd-block-title">{block.heading}</h3>
              <p className="pd-block-copy">{block.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PackageDetails;