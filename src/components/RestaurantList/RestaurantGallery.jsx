import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RestaurantGallery.css';

const RestaurantGallery = () => {
  const { slug } = useParams();
  const [columns, setColumns] = useState(4);
  const [loadedImages, setLoadedImages] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [restaurantName, setRestaurantName] = useState('');

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchRestaurantPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/restaurants/${slug}/photos`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch restaurant photos');
        }
        
        const data = await response.json();
        setPhotos(data);
        
        // Fetch restaurant name separately if needed
        const restaurantResponse = await fetch(`${API_BASE_URL}/api/restaurants/${slug}`);
        if (restaurantResponse.ok) {
          const restaurantData = await restaurantResponse.json();
          setRestaurantName(restaurantData.name || '');
        }
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantPhotos();
  }, [slug, API_BASE_URL]);

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
  photos.forEach((photo, index) => {
    const columnIndex = index % columns;
    columnsArray[columnIndex].push({
      src: `${API_BASE_URL}${photo.imageUrl}`,
      index,
      loaded: loadedImages.includes(index)
    });
  });

  if (loading) {
    return (
      <div className="restaurant-gallery">
        <div className="restaurant-gallery__loading">Loading photos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="restaurant-gallery">
        <div className="restaurant-gallery__error">Error: {error}</div>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="restaurant-gallery">
        <div className="restaurant-gallery__empty">No photos available for this restaurant</div>
      </div>
    );
  }

  return (
    <div className="restaurant-gallery">
      <div className="restaurant-gallery__header">
        <h1 className="restaurant-gallery__title">{restaurantName || 'Restaurant'} Gallery</h1>
        <p className="restaurant-gallery__subtitle">
          Menu Photography, Cocktail Menu Photography
          Used for Social Media, Online Ordering, Website Content
        </p>
      </div>
      
      <div className="restaurant-gallery__grid" style={{ '--columns': columns }}>
        {columnsArray.map((column, colIndex) => (
          <div key={colIndex} className="restaurant-gallery__column">
            {column.map((item) => (
              <RestaurantGalleryItem 
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

const RestaurantGalleryItem = React.memo(({ src, index, onLoad, isLoaded }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`restaurant-gallery__item ${isLoaded ? 'loaded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${(index % 5) * 0.1}s` }}
    >
      <div className="restaurant-gallery__image-container">
        <img
          src={src}
          alt={`Restaurant gallery image ${index + 1}`}
          loading="lazy"
          onLoad={onLoad}
          className={isHovered ? 'zoomed' : ''}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/500x300?text=Image+Not+Available';
          }}
        />
        <div className={`restaurant-gallery__image-overlay ${isHovered ? 'visible' : ''}`}>
          <span className="restaurant-gallery__image-number">{index + 1}</span>
        </div>
      </div>
    </div>
  );
});

export default RestaurantGallery;