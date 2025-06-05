// src/components/Dronephotos/Dronephotos.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Dronephotos.css';

const IMAGES = [
 '',
 '',
 '',
 '',
 '',
 '',
];

const Dronephotos = () => {
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
    <section className="dp">
      <div className="dp__container">
        <h2 className="dp__title">Aerial Perspectives</h2>
        <p className="dp__subtitle">Capturing the world from new heights</p>

        <div className="dp__grid">
          {IMAGES.map((src, i) => (
            <motion.figure
              key={i}
              className="dp__item"
              layoutId={`dp-item-${i}`}
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onClick={() => setSelectedId(i)}
            >
              <img src={src} alt={`Drone shot ${i + 1}`} loading="lazy" />
              <div className="dp__item-overlay">
                <span className="dp__item-number">{i + 1}</span>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence custom={direction}>
        {selectedId !== null && (
          <motion.div className="dp__lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="dp__lightbox-backdrop" onClick={() => setSelectedId(null)} />
            
            <motion.div
              className="dp__lightbox-content"
              layoutId={`dp-item-${selectedId}`}
              custom={direction}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="dp__lightbox-close" onClick={() => setSelectedId(null)}>
                <FiX />
              </button>
              
              <img src={IMAGES[selectedId]} alt={`Drone shot ${selectedId + 1}`} />
              
              <div className="dp__lightbox-nav">
                <button className="dp__lightbox-prev" onClick={handlePrev}>
                  <FiChevronLeft />
                </button>
                <span className="dp__lightbox-counter">
                  {selectedId + 1} / {IMAGES.length}
                </span>
                <button className="dp__lightbox-next" onClick={handleNext}>
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

export default Dronephotos;