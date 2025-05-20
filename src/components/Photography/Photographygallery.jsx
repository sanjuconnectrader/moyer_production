import React, { useState, useRef, useEffect } from 'react';
import './Photographygallery.css';

const IMAGES = [
  // Replace with your actual image paths
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/1a8ea236-0f2f-4724-8dbc-3bb554a09ca7/Center+Collision+Headshots-18.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/c5f6acf8-7862-42e6-935b-4a6e965e3f07/P1005365-Edit.jpg?format=1000w',
  "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/7a341d91-e588-44cb-8bc1-a97f7a16ac38/Center+Collision+Photos+6+aug-7.jpg?format=1000w",
  "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/5ec90b87-2100-4004-b649-589611217852/maxine-10.jpg?format=1000w",
  "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/1469f033-3c07-494c-8e70-e3d3030915d9/Fiaola+Menu+Photos+Top+Down-16.jpg?format=1000w",
  "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/35e7d4b2-1c64-42ed-a874-d00985c7115e/P1005348-Edit.jpg?format=1000w",
  "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/9a3239d7-a31e-4e3c-9934-32ec90c91624/Vowel+Renewal-90.jpg?format=1000w",

  "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/3a9efa75-e23e-436f-ad91-20a8b491209e/P1005389.jpg?format=1000w",
  "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/9ec90af3-2db3-450c-9673-58cdb05d23f8/Impeckable+Aug+1+shoot-5.jpg?format=1000w",
 "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/e4cb8873-a372-4518-a100-66f2c3aed6e3/Vowel+Renewal-101.jpg?format=1000w",
 "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/3e8abb59-cda2-4ed4-9756-3802df1cdd5d/VSO+billboard+Photos-12.jpg?format=1000w",
 "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/ff43d20d-7e1c-4b31-9fc0-a8dfaaca32d9/BNI+Headshots+Jan+24-23.jpg?format=1000w",
 "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/5ee46c24-3680-4f2a-bde3-27058a4b4bf6/Jan+11+McMenamins+Comedy+Show-262.jpg?format=1000w",
 "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/eac2c3bf-7a93-441a-8ffb-699bbf26bda2/1.jpg?format=1000w",
 "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/83754adb-d0b3-4851-a7f2-663d0a4c2b24/Lily+Grad+Photos+2021-17.jpg?format=1000w",
 "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/59bae685-97cd-4045-aeaa-a3964138a47c/June+13+wedding-176.jpg?format=1000w",
 "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/75d27e70-ea9e-4974-8588-2bb362dcf43b/June+13+wedding-173.jpg?format=1000w",
 "https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/5df3be01-7b41-41b4-825b-4aff3679446a/Mason%27s+Menu+Photos+Fixed-26.jpg?format=1000w",
  // Add more images as needed
];

const GalleryItem = ({ src, index, style, onLoad }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef(null);

  return (
    <div 
      className="gallery-items"
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        ref={imgRef}
        src={src}
        alt={`Gallery image ${index + 1}`}
        loading="lazy"
        onLoad={() => onLoad(index, imgRef.current)}
        className={isHovered ? 'zoomed' : ''}
      />
      <div className={`image-overlay ${isHovered ? 'visible' : ''}`}>
        <span className="image-number">{index + 1}</span>
      </div>
    </div>
  );
};

const Photographygallery = () => {
  const [columns, setColumns] = useState(3);
  const [heights, setHeights] = useState([]);
  const [positions, setPositions] = useState([]);
  const galleryRef = useRef(null);

  const calculateLayout = () => {
    if (!galleryRef.current) return;
    
    const galleryWidth = galleryRef.current.offsetWidth;
    const columnWidth = galleryWidth / columns;
    const newHeights = new Array(columns).fill(0);
    const newPositions = [];

    IMAGES.forEach((_, index) => {
      const imgHeight = heights[index] || columnWidth; // Default to square if not loaded
      const shortestColumn = newHeights.indexOf(Math.min(...newHeights));
      
      newPositions[index] = {
        top: newHeights[shortestColumn],
        left: shortestColumn * columnWidth,
        width: columnWidth,
        height: imgHeight
      };
      
      newHeights[shortestColumn] += imgHeight;
    });

    setPositions(newPositions);
    galleryRef.current.style.height = `${Math.max(...newHeights)}px`;
  };

  const handleImageLoad = (index, imgElement) => {
    if (!imgElement) return;
    
    const newHeights = [...heights];
    const columnWidth = galleryRef.current.offsetWidth / columns;
    const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;
    newHeights[index] = columnWidth / aspectRatio;
    
    setHeights(newHeights);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) setColumns(4);
      else if (width >= 900) setColumns(3);
      else if (width >= 600) setColumns(2);
      else setColumns(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    calculateLayout();
  }, [columns, heights]);

  return (
    <div className="photography-gallery">
      <div className="gallery-header">
        <h1>PHOTOGRAPHY</h1>
      </div>
      
      <div className="gallery-grid" ref={galleryRef}>
        {IMAGES.map((src, index) => (
          <GalleryItem
            key={index}
            src={src}
            index={index}
            style={{
              position: 'absolute',
              top: `${positions[index]?.top || 0}px`,
              left: `${positions[index]?.left || 0}px`,
              width: `${positions[index]?.width || 0}px`,
              height: `${positions[index]?.height || 0}px`,
              transition: 'all 0.3s ease'
            }}
            onLoad={handleImageLoad}
          />
        ))}
      </div>
    </div>
  );
};

export default Photographygallery;