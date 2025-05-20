import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './VideoGallery.css';

const getYouTubeId = (url) => {
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1);
    if (u.searchParams.has('v')) return u.searchParams.get('v');
    const m = u.pathname.match(/\/embed\/([^/?]+)/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
};

const YouTubeCard = ({ url, title, index }) => {
  const [play, setPlay] = useState(false);
  const [hover, setHover] = useState(false);
  const id = getYouTubeId(url);
  
  if (!id) return (
    <motion.div 
      className="vg__placeholder"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="vg__placeholder-content">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" strokeWidth="1.5"/>
          <path d="M12 8v4l3 3" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <p>Video unavailable</p>
      </div>
    </motion.div>
  );

  const thumb = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <motion.div
      className="vg__card-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <AnimatePresence mode="wait">
        {play ? (
          <motion.div
            key={`iframe-${id}`}
            className="vg__iframe-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              className="vg__iframe"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            <button 
              className="vg__close-btn"
              onClick={() => setPlay(false)}
              aria-label="Close video"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </motion.div>
        ) : (
          <motion.button
            key={`thumb-${id}`}
            className="vg__thumb"
            onClick={() => setPlay(true)}
            aria-label={`Play ${title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="vg__thumb-image">
              <img src={thumb} alt={title} loading="lazy" />
              <div className="vg__gradient-overlay" />
            </div>
            
            <div className="vg__play">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
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
                <motion.path
                  d="M32 24v32l18-16-18-16z"
                  fill="currentColor"
                  initial={{ scale: 1 }}
                  animate={{ scale: hover ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </svg>
            </div>
            
            <motion.div 
              className="vg__title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 10 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const VIDEO_DATA = [
  {
    url: 'https://youtu.be/nyJTb5KE8gQ',
  
  },
  {
    url: 'https://youtu.be/iuETzejUY88',

  },
  {
    url: 'https://youtu.be/9NI3KlJe4SU',
   
  },
  {
    url: 'https://youtu.be/9NI3KlJe4SU',
  
  },
  {
    url: 'https://youtu.be/8380RYxUCow',

  },
  {
    url: 'https://youtu.be/7vWNWIfIfNE',

  },
];

const VideoGallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="vg">
      <motion.div 
        className="vg__header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
       
      </motion.div>
      
      {isLoading ? (
        <div className="vg__loader">
          {Array(6).fill().map((_, i) => (
            <motion.div
              key={i}
              className="vg__skeleton"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      ) : (
        <motion.div 
          className="vg__grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {VIDEO_DATA.map((video, i) => (
            <YouTubeCard 
              key={i} 
              url={video.url} 
              title={video.title}
              index={i}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default VideoGallery;