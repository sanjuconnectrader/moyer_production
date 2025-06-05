// src/components/FiaolaPolynesianDeli/FiaolaPolynesianDeli.jsx
import React, { useState, useEffect } from 'react';
import './FiaolaPolynesianDeli.css';

const IMAGES = [

];

const FiaolaPolynesianDeli = () => {
  const [columns, setColumns] = useState(4);
  const [loaded, setLoaded] = useState([]);

  /* ─── responsive columns ─── */
  useEffect(() => {
    const resize = () => {
      const w = window.innerWidth;
      if (w >= 1440) setColumns(4);
      else if (w >= 1024) setColumns(3);
      else if (w >= 768) setColumns(2);
      else setColumns(1);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const handleLoad = (i) => {
    if (!loaded.includes(i)) setLoaded((prev) => [...prev, i]);
  };

  /* ─── distribute images ─── */
  const cols = Array.from({ length: columns }, () => []);
  IMAGES.forEach((src, i) => cols[i % columns].push({ src, i }));

  return (
    <div className="FiaolaPolynesianDeli">
      <header className="FiaolaPolynesianDeli__header">
        <h1 className="FiaolaPolynesianDeli__title">Fiaola Polynesian Deli</h1>
        <p className="FiaolaPolynesianDeli__subtitle">
          Menu &nbsp;•&nbsp; Specialty Drinks &nbsp;•&nbsp; Social&nbsp;/&nbsp;Web
        </p>
      </header>

      <div
        className="FiaolaPolynesianDeli__grid"
        style={{ '--columns': columns }}
      >
        {cols.map((col, cIdx) => (
          <div key={cIdx} className="FiaolaPolynesianDeli__column">
            {col.map(({ src, i }) => (
              <GalleryItem
                key={i}
                src={src}
                index={i}
                loaded={loaded.includes(i)}
                onLoad={() => handleLoad(i)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── gallery item component ─── */
const GalleryItem = React.memo(({ src, index, onLoad, loaded }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`FiaolaPolynesianDeli__item ${loaded ? 'loaded' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ animationDelay: `${(index % 5) * 0.1}s` }}
    >
      <div className="FiaolaPolynesianDeli__img-wrap">
        <img
          src={src}
          alt={`Gallery ${index + 1}`}
          loading="lazy"
          onLoad={onLoad}
          className={hover ? 'zoomed' : ''}
        />
        <div className={`FiaolaPolynesianDeli__overlay ${hover ? 'visible' : ''}`}>
          <span className="FiaolaPolynesianDeli__number">{index + 1}</span>
        </div>
      </div>
    </div>
  );
});

export default FiaolaPolynesianDeli;
