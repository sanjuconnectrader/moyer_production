import React, { useState, useEffect } from 'react';
import './PuertoVallartaBonneyLake.css';

const IMAGES = [
"https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/d9cbe1f2-d4b8-4b58-865c-ba9c30b8da9d/Wood+Top+Drinks+Small-1.jpg?format=750w",
"https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/fc574040-3b02-4e74-bcc1-09a7e058daf5/Bar+Drinks+Small-1.jpg?format=750w",
"https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/9f690930-71c1-4272-acad-2175e10fedb3/Bar+Drinks+Small-2.jpg?format=750w",
"https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/4bcd5b79-0a3c-4c85-b4a0-cecad833e889/Bar+Drinks+Small-5.jpg?format=750w",
"https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/6d939c56-816c-407c-8d02-117aee20ecdc/Bar+Drinks+Small-6.jpg?format=750w",
"https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/6d939c56-816c-407c-8d02-117aee20ecdc/Bar+Drinks+Small-6.jpg?format=750w",
"https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/88c0be4d-4dbd-4323-9e62-ccc3bc5f636d/Bar+Drinks+Small-17.jpg?format=750w",
"https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/2af3f5ba-35a0-4a09-8aeb-88ffc1b9131d/Side+Shot+Dish+Small-1.jpg?format=750w",
"https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/35a2123b-e6d8-4045-b40f-fbee0e58ee50/Side+Shot+Dish+Small-3.jpg?format=750w",
"https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/35114989-7d6e-4c13-aeeb-435c1efbb107/Bar+Drinks+Small-22.jpg?format=750w",
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