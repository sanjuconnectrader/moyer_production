import React from 'react';
import { motion } from 'framer-motion';
import './Featuredwork.css';

const items = [
  { src: 'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/35e7d4b2-1c64-42ed-a874-d00985c7115e/P1005348-Edit.jpg?format=1000w',  },
  { src: 'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/d3119c53-b813-4896-ab89-4093412a5572/Brandon+and+Jenna+Wedding-340.jpg?format=1000w',  },
  { src: 'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/a514c3f2-97e7-4ffc-a7f6-8fda6d365d31/5119800.jpg?format=1000w',  },
  { src: 'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/5f9622b9-e1f9-430b-9788-226362b96a75/21.jpg?format=1000w',  },
  { src: 'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/bb0130d3-bd30-42e4-837b-b37335de8148/Forks+and+Corks+2023-74.jpg?format=1000w', },
  { src: 'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/037986fa-bffb-4cf2-864b-5fae9ab0967e/Tacoma+Waterfront-2.jpg?format=1000w', },
  { src: 'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/2fef630e-72e7-42d5-ad7a-7e3949ad6af8/170612-N-LU649-051.jpg?format=1000w',   },
  { src: 'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/04b3416b-677e-4302-9102-f30ceaf3dfb4/DSC_8353.jpg?format=1000w', },
  { src: 'https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/e59c694f-f980-4b75-bc66-1119f01749c0/Top+Down+Shot+Dish+Small-7.jpg?format=1000w',   },
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