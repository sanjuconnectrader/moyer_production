// src/components/CoastalKitchen/CoastalKitchen.jsx
import React, { useState, useEffect } from 'react';
import './CoastalKitchen.css';

const IMAGES = [
  
];

const CoastalKitchen = () => {
  const [columns, setColumns] = useState(4);
  const [loaded, setLoaded] = useState([]);

  /* ── responsive columns ── */
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1440) setColumns(4);
      else if (w >= 1024) setColumns(3);
      else if (w >= 768) setColumns(2);
      else setColumns(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onImgLoad = (i) => {
    if (!loaded.includes(i)) setLoaded((prev) => [...prev, i]);
  };

  /* ── distribute images ── */
  const cols = Array.from({ length: columns }, () => []);
  IMAGES.forEach((src, i) => cols[i % columns].push({ src, i }));

  return (
    <div className="CoastalKitchen">
      <header className="CoastalKitchen__header">
        <h1 className="CoastalKitchen__title">Coastal Kitchen</h1>
        <p className="CoastalKitchen__subtitle">
          Menu&nbsp;&nbsp;•&nbsp;&nbsp;Cocktail&nbsp;&nbsp;•&nbsp;&nbsp;Social&nbsp;/&nbsp;Web&nbsp;Photography
        </p>
      </header>

      <div className="CoastalKitchen__grid" style={{ '--columns': columns }}>
        {cols.map((col, colIdx) => (
          <div key={colIdx} className="CoastalKitchen__column">
            {col.map(({ src, i }) => (
              <GalleryItem
                key={i}
                src={src}
                index={i}
                loaded={loaded.includes(i)}
                onLoad={() => onImgLoad(i)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── gallery item component ── */
const GalleryItem = React.memo(({ src, index, onLoad, loaded }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`CoastalKitchen__item ${loaded ? 'loaded' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ animationDelay: `${(index % 5) * 0.1}s` }}
    >
      <div className="CoastalKitchen__img-wrap">
        <img
          src={src}
          alt={`Gallery ${index + 1}`}
          loading="lazy"
          onLoad={onLoad}
          className={hover ? 'zoomed' : ''}
        />
        <div
          className={`CoastalKitchen__overlay ${hover ? 'visible' : ''}`}
        >
          <span className="CoastalKitchen__number">{index + 1}</span>
        </div>
      </div>
    </div>
  );
});

export default CoastalKitchen;
