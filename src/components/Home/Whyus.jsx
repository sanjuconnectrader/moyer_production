import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Whyus.css';

const Whyus = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#ffffff",
      color: "#000000",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="why">
      <div className="why__container">
        {/* Text Column */}
        <motion.div 
          className="why__text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We offer a free consultation to find the right fit for our services.
            Whether photography, videography, headshots, or social content, we are
            here for you. From the first brainstorming call to the final delivery,
            we'll walk you through every step so you always know what to expect.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            Our flexible scheduling means we can shoot on-location or in-studio at
            times that cause minimal disruption to your day. Thoughtful
            pre-production planning ensures your brand voice, color palette, and
            goals are woven into every frame.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We maintain full FAA Part 107 drone certification and liability insurance, 
            so every aerial capture is both legal and safe. All files are delivered 
            in multiple resolutions and aspect ratios—optimized for web, social, and 
            print—so you can publish instantly without extra work.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            Need ongoing content? Ask about our retainer packages, which lock in 
            lower rates and guarantee priority booking each month. Finally, if you're 
            not completely satisfied with a shoot, we'll reschedule or re-edit at no 
            additional cost—your peace of mind is part of the package.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            And because your deadlines matter, we back our work with prompt editing 
            turnarounds and unlimited minor revisions to make sure you love the 
            final result.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              to="/contact" 
              className="why__btn"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Contact Us
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <motion.figure 
          className="why__media"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="why__image-container">
            <img
              src="https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/5ec90b87-2100-4004-b649-589611217852/maxine-10.jpg?format=1000w"
              alt="Client on set with our production team"
              loading="lazy"
              className="why__image"
            />
            <div className="why__image-overlay"></div>
          </div>
        </motion.figure>
      </div>
    </section>
  );
};

export default Whyus;