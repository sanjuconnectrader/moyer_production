// src/components/ThePortCantina/ThePortCantina.jsx
import React, { useState, useEffect } from 'react';
import './ThePortCantina.css';

const IMAGES = [
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/d9cbe1f2-d4b8-4b58-865c-ba9c30b8da9d/Wood+Top+Drinks+Small-1.jpg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/fc574040-3b02-4e74-bcc1-09a7e058daf5/Bar+Drinks+Small-1.jpg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/9f690930-71c1-4272-acad-2175e10fedb3/Bar+Drinks+Small-2.jpg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/4bcd5b79-0a3c-4c85-b4a0-cecad833e889/Bar+Drinks+Small-5.jpg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/6d939c56-816c-407c-8d02-117aee20ecdc/Bar+Drinks+Small-6.jpg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/6d939c56-816c-407c-8d02-117aee20ecdc/Bar+Drinks+Small-6.jpg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/88c0be4d-4dbd-4323-9e62-ccc3bc5f636d/Bar+Drinks+Small-17.jpg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/2af3f5ba-35a0-4a09-8aeb-88ffc1b9131d/Side+Shot+Dish+Small-1.jpg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/35a2123b-e6d8-4045-b40f-fbee0e58ee50/Side+Shot+Dish+Small-3.jpg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/35114989-7d6e-4c13-aeeb-435c1efbb107/Bar+Drinks+Small-22.jpg?format=750w',
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
