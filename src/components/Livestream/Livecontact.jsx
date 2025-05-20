// src/components/Livecontact/Livecontact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Livecontact.css';

const Livecontact = () => (
  <section className="lc">
    <div className="lc__container">
      <motion.p 
        className="lc__headline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Based in Bonney Lake, we handle everything from event planning and production
        to real-time streaming, ensuring your virtual gathering reaches distributed
        teams and online viewers worldwide.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Link to="/contact" className="lc__btn">
          <span>Contact Us</span>
          <FiArrowRight className="lc__btn-icon" />
          <div className="lc__btn-hover-effect"></div>
        </Link>
      </motion.div>
      
      <div className="lc__contact-info">
       
      
      </div>
    </div>
  </section>
);

export default Livecontact;