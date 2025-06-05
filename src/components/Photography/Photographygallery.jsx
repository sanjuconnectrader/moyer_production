import React, { useState, useRef, useEffect } from 'react';
import './Photographygallery.css';

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
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/500x300?text=Image+Not+Available';
        }}
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
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/photography`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        
        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const calculateLayout = () => {
    if (!galleryRef.current || photos.length === 0) return;
    
    const galleryWidth = galleryRef.current.offsetWidth;
    const columnWidth = galleryWidth / columns;
    const newHeights = new Array(columns).fill(0);
    const newPositions = [];

    photos.forEach((_, index) => {
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
  }, [columns, heights, photos]);

  if (loading) {
    return (
      <div className="photography-gallery">
        <div className="gallery-loading">Loading photos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="photography-gallery">
        <div className="gallery-error">Error: {error}</div>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="photography-gallery">
        <div className="gallery-empty">No photos available</div>
      </div>
    );
  }

  return (
    <div className="photography-gallery">
      <div className="gallery-header">
        <h1>PHOTOGRAPHY</h1>
      </div>
      
      <div className="gallery-grid" ref={galleryRef}>
        {photos.map((photo, index) => (
          <GalleryItem
            key={photo.id}
            src={`${process.env.REACT_APP_API_BASE_URL}${photo.imageUrl}`}
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