// src/components/Dronecontact/Dronecontact.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './Dronecontact.css';

const Dronecontact = () => {
  const navigate = useNavigate();

  return (
    <section className="dc">
      <div className="dc__container">
        <motion.p 
          className="dc__text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          We manage everything from meticulous flight planning&nbsp;and FAA clearances to cinematic
          color&nbsp;grading, ensuring your drone-captured visuals wow stakeholders and audiences
          everywhere
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <button
            className="dc__btn"
            onClick={() => navigate('/contact')}
          >
            <span>Contact Us</span>
            <FiArrowRight className="dc__btn-icon" />
            <div className="dc__btn-hover-effect"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Dronecontact;