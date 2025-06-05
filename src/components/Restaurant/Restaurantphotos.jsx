// src/components/Restaurantphotos/Restaurantphotos.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Restaurantphotos.css';

const Restaurantphotos = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/restaurants/getall-restaurant`);
        if (!response.ok) {
          throw new Error('Failed to fetch restaurants');
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const handleNext = () => {
    setDirection(1);
    setSelectedId((prev) => (prev === restaurants.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setSelectedId((prev) => (prev === 0 ? restaurants.length - 1 : prev - 1));
  };

  const handleImageClick = (index, e) => {
    if (e.target.closest('.restaurant__item-link')) return;
    if (restaurants[index]?.slug) {
      navigate(`/${restaurants[index].slug}`);
    }
  };

  const handleNavigate = (slug) => {
    navigate(`/${slug}`);
  };

  if (loading) {
    return (
      <section className="restaurant">
        <div className="restaurant__container">
          <h2 className="restaurant__title">Capturing flavor in every frame</h2>
          <p className="restaurant__subtitle">
            Explore our curated collection of the finest dining experiences
            through stunning aerial photography
          </p>
          <div className="restaurant__loading">Loading restaurants...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="restaurant">
        <div className="restaurant__container">
          <h2 className="restaurant__title">Capturing flavor in every frame</h2>
          <p className="restaurant__subtitle">
            Explore our curated collection of the finest dining experiences
            through stunning aerial photography
          </p>
          <div className="restaurant__error">Error: {error}</div>
        </div>
      </section>
    );
  }

  if (restaurants.length === 0) {
    return (
      <section className="restaurant">
        <div className="restaurant__container">
          <h2 className="restaurant__title">Capturing flavor in every frame</h2>
          <p className="restaurant__subtitle">
            Explore our curated collection of the finest dining experiences
            through stunning aerial photography
          </p>
          <div className="restaurant__empty">No restaurants available</div>
        </div>
      </section>
    );
  }

  return (
    <section className="restaurant">
      <div className="restaurant__container">
        <h2 className="restaurant__title">Capturing flavor in every frame</h2>
        <p className="restaurant__subtitle">
          Explore our curated collection of the finest dining experiences
          through stunning aerial photography
        </p>

        <div className="restaurant__grid">
          {restaurants.map((restaurant, i) => (
            <motion.figure
              key={restaurant.id}
              className="restaurant__item"
              layoutId={`restaurant-item-${restaurant.id}`}
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              onClick={(e) => handleImageClick(i, e)}
            >
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}${restaurant.coverImage}`}
                alt={`${restaurant.name} aerial view`}
                loading="lazy"
              />
              <div className="restaurant__item-overlay">
                <div className="restaurant__item-info">
                  <button
                    className="restaurant__item-link"
                    onClick={() => handleNavigate(restaurant.slug)}
                  >
                    <h3 className="restaurant__item-title">
                      {restaurant.name}
                    </h3>
                  </button>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurantphotos;