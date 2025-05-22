import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PhotographyContact.css';

const PhotographyContact = () => (
  <section className="photography-contact-section">
    <div className="contact-gradient-overlay" />

    <div className="contact-container">
      {/* ── Heading ── */}
      <motion.h2
        className="contact-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Let us photograph your next event
      </motion.h2>

      {/* ── Description ── */}
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

      {/* ── Button linked to /contact ── */}
      <Link to="/contact" className="contact-link">
        <motion.button
          className="contact-btn"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact&nbsp;Us <span className="btn-arrow">→</span>
        </motion.button>
      </Link>
    </div>
  </section>
);

export default PhotographyContact;
