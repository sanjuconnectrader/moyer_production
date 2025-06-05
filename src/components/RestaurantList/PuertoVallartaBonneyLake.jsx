import React, { useState, useEffect } from 'react';
import './PuertoVallartaBonneyLake.css';

const IMAGES = [

]

const PuertoVallartaBonneyLake = () => {
  const [columns, setColumns] = useState(4);
  const [loadedImages, setLoadedImages] = useState([]);

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

  const handleImageLoad = (index) => {
    if (!loadedImages.includes(index)) {
      setLoadedImages(prev => [...prev, index]);
    }
  };

  // Create column arrays
  const columnsArray = Array.from({ length: columns }, () => []);

  // Distribute images to columns
  IMAGES.forEach((img, index) => {
    const columnIndex = index % columns;
    columnsArray[columnIndex].push({
      src: img,
      index,
      loaded: loadedImages.includes(index)
    });
  });

  return (
    <div className="puerto-vallarta-bonney-lake">
      <div className="gallery-header">
        <h1 className="gallery-title">Puerto Vallarta Bonney Lake</h1>
        <p className="gallery-subtitle">Menu Photography, Cocktail Menu Photography
Used for Social Media, Online Ordering, Website Content</p>
      </div>
      
      <div className="gallery-grid" style={{ '--columns': columns }}>
        {columnsArray.map((column, colIndex) => (
          <div key={colIndex} className="gallery-column">
            {column.map((item) => (
              <GalleryItem 
                key={item.index} 
                src={item.src} 
                index={item.index} 
                onLoad={() => handleImageLoad(item.index)}
                isLoaded={item.loaded}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const GalleryItem = React.memo(({ src, index, onLoad, isLoaded }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`gallery-item ${isLoaded ? 'loaded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${(index % 5) * 0.1}s` }}
    >
      <div className="image-container">
        <img
          src={src}
          alt={`Photography portfolio image ${index + 1}`}
          loading="lazy"
          onLoad={onLoad}
          className={isHovered ? 'zoomed' : ''}
        />
        <div className={`image-overlay ${isHovered ? 'visible' : ''}`}>
          <span className="image-number">{index + 1}</span>
        </div>
      </div>
    </div>
  );
});

export default PuertoVallartaBonneyLake;