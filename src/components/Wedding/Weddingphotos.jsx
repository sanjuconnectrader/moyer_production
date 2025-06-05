import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Weddingphotos.css';

const IMAGES = [
  '',
  '',
  '',
  '',
  '',
  '',

];

const Weddingphotos = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setSelectedId((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setSelectedId((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  return (
    <section className="wedding-photos">
      <div className="wedding-photos__container">
        <h2 className="wedding-photos__title">Wedding Memories</h2>
        <p className="wedding-photos__subtitle">Capturing your special moments</p>

        <div className="wedding-photos__grid">
          {IMAGES.map((src, i) => (
            <motion.figure
              key={i}
              className="wedding-photos__item"
              layoutId={`wedding-photos-item-${i}`}
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onClick={() => setSelectedId(i)}
            >
              <img src={src} alt={`Wedding photo ${i + 1}`} loading="lazy" />
              <div className="wedding-photos__item-overlay">
                <span className="wedding-photos__item-number">{i + 1}</span>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence custom={direction}>
        {selectedId !== null && (
          <motion.div className="wedding-photos__lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="wedding-photos__lightbox-backdrop" onClick={() => setSelectedId(null)} />
            
            <motion.div
              className="wedding-photos__lightbox-content"
              layoutId={`wedding-photos-item-${selectedId}`}
              custom={direction}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="wedding-photos__lightbox-close" onClick={() => setSelectedId(null)}>
                <FiX />
              </button>
              
              <img src={IMAGES[selectedId]} alt={`Wedding photo ${selectedId + 1}`} />
              
              <div className="wedding-photos__lightbox-nav">
                <button className="wedding-photos__lightbox-prev" onClick={handlePrev}>
                  <FiChevronLeft />
                </button>
                <span className="wedding-photos__lightbox-counter">
                  {selectedId + 1} / {IMAGES.length}
                </span>
                <button className="wedding-photos__lightbox-next" onClick={handleNext}>
                  <FiChevronRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Weddingphotos;