// src/components/Restaurantphotos/Restaurantphotos.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Restaurantphotos.css';

const RESTAURANTS = [
  {
    id: 1,
    name: 'Puerto Vallarta Bonney Lake',
    slug: 'PuertoVallartaBonneyLake',
    image:
      'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/1694579459820-HACOTAYTW58S2OHAXRGL/Side+Shot+Dish+Small-2.jpg?format=1000w',
    location: 'Puerto Vallarta Bonney Lake',
  },
  {
    id: 2,
    name: 'Mason’s Cheesecakes',
    slug: 'Mason’sCheesecakes',
    image:
      'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/1694579543973-QSK70TJ7HOU6G3YDTCB1/Mason%27s+Menu+Photos+Fixed-1.jpg?format=1000w',
    location: 'Mason’s Cheesecakes',
  },
  {
    id: 3,
    name: 'The Port Cantina & Taco Truck',
    slug: 'ThePortCantina&TacoTruck',
    image:
      'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/1694580203090-5MFHI5UQS9T9XSA4WI2L/PMOY5876-Enhanced-NR.jpg?format=1000w',
    location: 'The Port Cantina & Taco Truck',
  },
  {
    id: 4,
    name: 'Fiaola Polynesian Deli',
    slug: 'FiaolaPolynesianDeli',
    image:
      'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/1723752714384-WNL1X49H30MH3IZ5KGYA/Fiaola+Menu+Photos+Top+Down-13.jpg?format=1000w',
    location: 'FiaolaPolynesianDeli',
  },
  {
    id: 5,
    name: 'Impeckable Food Truck',
    slug: 'ImpeckableFoodTruck',
    image:
      'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/1723752952298-FP45TH3WUV2K771R83N3/Impeckable+Aug+1+shoot-104.jpg?format=1000w',
    location: 'Impeckable Food Truck',
  },
  {
    id: 6,
    name: 'Coastal Kitchen',
    slug: 'CoastalKitchen',
    image:
      'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/1723753761062-IURSTJU6XOVMDPFLTR1E/Puerto+Vallarta+Federal+Way+May+Photos-61.jpg?format=500w',
    location: 'CoastalKitchen',
  },
];

const Restaurantphotos = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setDirection(1);
    setSelectedId((prev) => (prev === RESTAURANTS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setSelectedId((prev) => (prev === 0 ? RESTAURANTS.length - 1 : prev - 1));
  };

  // ⬇️ When the figure (image area) is clicked, redirect to its slug
  const handleImageClick = (index, e) => {
    // Ignore clicks on the overlay button itself
    if (e.target.closest('.restaurant__item-link')) return;
    navigate(`/${RESTAURANTS[index].slug}`);
  };

  const handleNavigate = (slug) => {
    navigate(`/${slug}`);
  };

  return (
    <section className="restaurant">
      <div className="restaurant__container">
        <h2 className="restaurant__title">Capturing flavor in every frame</h2>
        <p className="restaurant__subtitle">
          Explore our curated collection of the finest dining experiences
          through stunning aerial photography
        </p>

        <div className="restaurant__grid">
          {RESTAURANTS.map((restaurant, i) => (
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
                src={restaurant.image}
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
