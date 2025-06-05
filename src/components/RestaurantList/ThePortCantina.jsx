// src/components/ThePortCantina/ThePortCantina.jsx
import React, { useState, useEffect } from 'react';
import './ThePortCantina.css';

const IMAGES = [

];

const ThePortCantina = () => {
  const [columns, setColumns] = useState(4);
  const [loaded, setLoaded] = useState([]);

  /* ─── handle responsive columns ─── */
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

  const onImgLoad = (i) => {
    if (!loaded.includes(i)) setLoaded((prev) => [...prev, i]);
  };

  /* split images across columns */
  const cols = Array.from({ length: columns }, () => []);
  IMAGES.forEach((src, i) => cols[i % columns].push({ src, i }));

  return (
    <div className="ThePortCantina">
      {/* ─── header ─── */}
      <header className="ThePortCantina__header">
        <h1 className="ThePortCantina__title">The Port Cantina</h1>
        <p className="ThePortCantina__subtitle">
          Menu &nbsp;•&nbsp; Cocktail &nbsp;•&nbsp; Social&nbsp;/&nbsp;Web&nbsp;Photography
        </p>
      </header>

      {/* ─── masonry grid ─── */}
      <div
        className="ThePortCantina__grid"
        style={{ '--columns': columns }}
      >
        {cols.map((col, cIdx) => (
          <div key={cIdx} className="ThePortCantina__column">
            {col.map(({ src, i }) => (
              <Item
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

/* ─── gallery item ─── */
const Item = React.memo(({ src, index, onLoad, loaded }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`ThePortCantina__item ${loaded ? 'loaded' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ animationDelay: `${(index % 5) * 0.1}s` }}
    >
      <div className="ThePortCantina__img-wrap">
        <img
          src={src}
          alt={`Gallery ${index + 1}`}
          loading="lazy"
          onLoad={onLoad}
          className={hover ? 'zoomed' : ''}
        />
        <div className={`ThePortCantina__overlay ${hover ? 'visible' : ''}`}>
          <span className="ThePortCantina__number">{index + 1}</span>
        </div>
      </div>
    </div>
  );
});

export default ThePortCantina;
