// src/components/MasonsCheesecakes/MasonsCheesecakes.jsx
import React, { useState, useEffect } from 'react';
import './MasonsCheesecakes.css';

const IMAGES = [

];

const MasonsCheesecakes = () => {
  const [columns, setColumns] = useState(4);
  const [loadedImages, setLoadedImages] = useState([]);

  /* ---------- responsive columns ---------- */
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1440) setColumns(4);
      else if (width >= 1024) setColumns(3);
      else if (width >= 768) setColumns(2);
      else setColumns(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageLoad = (idx) => {
    if (!loadedImages.includes(idx)) {
      setLoadedImages((prev) => [...prev, idx]);
    }
  };

  /* ---------- split images into columns ---------- */
  const colsArr = Array.from({ length: columns }, () => []);
  IMAGES.forEach((src, idx) => colsArr[idx % columns].push({ src, idx }));

  return (
    <div className="MasonsCheesecakes">
      <header className="MasonsCheesecakes__header">
        <h1 className="MasonsCheesecakes__title">Masons Cheesecakes</h1>
        <p className="MasonsCheesecakes__subtitle">
          Menu Photography&nbsp;&nbsp;•&nbsp;&nbsp;Cocktail Shoots&nbsp;&nbsp;•&nbsp;&nbsp;Social Media&nbsp;/&nbsp;Web
        </p>
      </header>

      <div
        className="MasonsCheesecakes__grid"
        style={{ '--columns': columns }}
      >
        {colsArr.map((col, colIdx) => (
          <div key={colIdx} className="MasonsCheesecakes__column">
            {col.map(({ src, idx }) => (
              <GalleryItem
                key={idx}
                src={src}
                idx={idx}
                loaded={loadedImages.includes(idx)}
                onLoad={() => handleImageLoad(idx)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------- memoised gallery item ---------- */
const GalleryItem = React.memo(({ src, idx, loaded, onLoad }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`MasonsCheesecakes__item ${loaded ? 'loaded' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${(idx % 5) * 0.1}s` }}
    >
      <div className="MasonsCheesecakes__image-wrap">
        <img
          src={src}
          alt={`Portfolio ${idx + 1}`}
          loading="lazy"
          onLoad={onLoad}
          className={hovered ? 'zoomed' : ''}
        />
        <div
          className={`MasonsCheesecakes__overlay ${
            hovered ? 'visible' : ''
          }`}
        >
          <span className="MasonsCheesecakes__number">{idx + 1}</span>
        </div>
      </div>
    </div>
  );
});

export default MasonsCheesecakes;
