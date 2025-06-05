import React from 'react';
import { motion } from 'framer-motion';
import './Featuredwork.css';

const items = [
  { src: './f1.jpg', },
  { src: './f2.jpg', },
  { src: './f3.jpg', },
  { src: './f4.jpg', },
  { src: './f5.jpg', },
  { src: './f6.jpg', },
  { src: './f7.jpg', },
  { src: './f8.jpg', },
  { src: './f9.jpg', },

  


];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3
    }
  }
};

const FeaturedWork = () => (
  <section className="featured-work">
    <div className="fw-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="fw-title"
      >
        CHECK OUT OUR FEATURED WORK
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fw-subtitle"
      >
        Selected projects that showcase our creativity and expertise
      </motion.p>

      <motion.div
        className="fw-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {items.map((item, i) => (
          <motion.figure
            key={i}
            className="fw-item"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="fw-image-container">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="fw-image"
              />
              <div className="fw-overlay">
                <div className="fw-overlay-content">
                  <h3 className="fw-item-title">{item.title}</h3>
                  <p className="fw-item-category">{item.category}</p>
                  <button className="fw-view-button">View Project</button>
                </div>
              </div>
            </div>
          </motion.figure>
        ))}
      </motion.div>


    </div>
  </section>
);

export default FeaturedWork;