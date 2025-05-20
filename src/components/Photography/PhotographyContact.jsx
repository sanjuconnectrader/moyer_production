import React from 'react';
import { motion } from 'framer-motion';
import './PhotographyContact.css';

const PhotographyContact = () => {
  return (
    <section className="photography-contact-section">
      <div className="contact-gradient-overlay"></div>
      <div className="contact-container">
        <motion.h2 
          className="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let us photograph your next event
        </motion.h2>
        
        <motion.p 
          className="contact-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Capturing unforgettable moments has never been more essential,<br />
          and partnering with a pro team has never been easier.
        </motion.p>
        
        <motion.button 
          className="contact-btn"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
          <span className="btn-arrow">→</span>
        </motion.button>
      </div>
    </section>
  );
};

export default PhotographyContact;