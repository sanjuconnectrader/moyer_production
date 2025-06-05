// src/components/ImpeckableFoodTruck/ImpeckableFoodTruck.jsx
import React, { useState, useEffect } from 'react';
import './ImpeckableFoodTruck.css';

const IMAGES = [

];

const ImpeckableFoodTruck = () => {
  const [columns, setColumns] = useState(4);
  const [loaded, setLoaded] = useState([]);

  // ── responsive column count ──
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w >= 1440) setColumns(4);
      else if (w >= 1024) setColumns(3);
      else if (w >= 768) setColumns(2);
      else setColumns(1);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleLoad = (idx) => {
    if (!loaded.includes(idx)) setLoaded((prev) => [...prev, idx]);
  };

  // ── split images into columns ──
  const colData = Array.from({ length: columns }, () => []);
  IMAGES.forEach((src, idx) => colData[idx % columns].push({ src, idx }));

  return (
    <div className="ImpeckableFoodTruck">
      {/* header */}
      <header className="ImpeckableFoodTruck__header">
        <h1 className="ImpeckableFoodTruck__title">Impeckable Food Truck</h1>
        <p className="ImpeckableFoodTruck__subtitle">
          Menu Photography&nbsp;•&nbsp;Street-Food Shoots&nbsp;•&nbsp;Social&nbsp;/&nbsp;Web
        </p>
      </header>

      {/* masonry grid */}
      <div
        className="ImpeckableFoodTruck__grid"
        style={{ '--columns': columns }}
      >
        {colData.map((col, cIdx) => (
          <div key={cIdx} className="ImpeckableFoodTruck__column">
            {col.map(({ src, idx }) => (
              <GalleryItem
                key={idx}
                src={src}
                index={idx}
                loaded={loaded.includes(idx)}
                onLoad={() => handleLoad(idx)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// ── gallery item (memoised) ──
const GalleryItem = React.memo(({ src, index, onLoad, loaded }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`ImpeckableFoodTruck__item ${loaded ? 'loaded' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ animationDelay: `${(index % 5) * 0.1}s` }}
    >
      <div className="ImpeckableFoodTruck__img-wrap">
        <img
          src={src}
          alt={`Gallery image ${index + 1}`}
          loading="lazy"
          onLoad={onLoad}
          className={hover ? 'zoomed' : ''}
        />
        <div
          className={`ImpeckableFoodTruck__overlay ${
            hover ? 'visible' : ''
          }`}
        >
          <span className="ImpeckableFoodTruck__number">{index + 1}</span>
        </div>
      </div>
    </div>
  );
});

export default ImpeckableFoodTruck;
