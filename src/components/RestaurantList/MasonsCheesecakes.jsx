// src/components/MasonsCheesecakes/MasonsCheesecakes.jsx
import React, { useState, useEffect } from 'react';
import './MasonsCheesecakes.css';

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
