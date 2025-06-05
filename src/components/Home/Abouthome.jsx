import React from 'react';
import './Abouthome.css';

const Abouthome = () => (
  <section className="about-section">
    <div className="about-container">
      {/* Text Content */}
      <div className="about-content">
   
        <p className="about-description">
          At <strong>Moyer Production Co. LLC</strong>, we specialize in creating
          exceptional photography and video production services. Based in Bonney Lake, Washington, our team is dedicated to capturing your vision and bringing it to life. With a focus on quality and creativity, we strive to deliver outstanding results for every project. Trust Moyer Production Co. LLC for all your photography and video production needs. Our experienced professionals use state-of-the-art equipment and innovative techniques to ensure every shot exceeds expectations. Whether it’s a corporate event, promotional video, family portrait, or a creative commercial, we tailor our services to meet your unique requirements. Client satisfaction is our top priority, and we are committed to making every project a success.

In addition to our technical expertise, we pride ourselves on building strong relationships with our clients, ensuring open communication and a smooth creative process. From initial concept to final delivery, we work collaboratively to ensure your story is told exactly the way you envision it. No matter the size or scope of the project, Moyer Production Co. LLC delivers results that inspire, engage, and captivate
        </p>
      </div>

      {/* Image Grid */}
      <div className="about-gallery">
        {['Abouthomepic1.jpg', 'Abouthomepic2.jpg', 'Abouthomepic3.jpg', 'Abouthomepic4.jpg'].map(
          (src, i) => (
            <div key={i} className="gallery-item">
              <img 
                src={src} 
                alt={`Our work ${i + 1}`} 
                loading="lazy"
                className="gallery-image"
              />
              <div className="image-overlay"></div>
            </div>
          )
        )}
      </div>
    </div>
  </section>
);

export default Abouthome;