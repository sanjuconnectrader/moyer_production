// src/components/Dronephotos/Dronephotos.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Dronephotos.css';

const IMAGES = [
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/67f2a1e2-3cc3-4411-8146-6f954d8ff159/DJI_0081.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/0faccd5e-467d-4368-839a-af4e9a1a8479/DSC_8406.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/1987aa5c-8a2d-4bd9-919e-6f15657ef392/portfolio+3.JPG?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/b1d5f694-5238-4553-958d-08718d49fc94/1800+Water+Damage+Group+Photos+19+Oct-4.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/3dbd8900-e73e-448d-9295-7e6f0de21a85/Sumner+Rainier.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/a6a37183-ac8e-463e-9605-a190071e6dde/Steilacoom+Ferry-6.jpg?format=2500w',
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