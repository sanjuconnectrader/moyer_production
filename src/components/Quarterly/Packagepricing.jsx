import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Packagepricing.css';

const PACKAGES = [
  { 
    tier: 'STARTER', 
    price: '$2000/quarter', 
    hours: '6 production hours',
    features: [
      '2 social media content shoots',
      '1 product photography session',
      'Basic editing included',
      '1 location'
    ]
  },
  { 
    tier: 'PRO',     
    price: '$3500/quarter', 
    hours: '12 production hours',
    featured: true,
    features: [
      '4 social media content shoots',
      '2 product photography sessions',
      'Premium editing included',
      'Up to 2 locations',
      '1 promotional video'
    ]
  },
  { 
    tier: 'EXPERT',  
    price: '$4500/quarter', 
    hours: '18 production hours',
    features: [
      'Unlimited content shoots',
      '3 product photography sessions',
      'Premium+ editing included',
      'Multiple locations',
      '2 promotional videos',
      'Priority scheduling'
    ]
  }
];

const PackagePricing = () => {
  const navigate = useNavigate();

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <h2 className="section-title">Choose Your Package</h2>
        <p className="section-subtitle">
          Professional content creation tailored to your business needs
        </p>
        
        <div className="pricing-grid">
          {PACKAGES.map(({ tier, price, hours, features, featured }) => (
            <div 
              key={tier} 
              className={`pricing-card ${featured ? 'featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={featured ? "100" : "0"}
            >
              {featured && <div className="featured-badge">Most Popular</div>}
              
              <div className="card-header">
                <h3 className="package-tier">
                  {tier}
                  <svg className="underline-curve" viewBox="0 0 160 20" preserveAspectRatio="none">
                    <path d="M5 15 Q80 5 155 15" stroke="currentColor" fill="transparent" />
                  </svg>
                </h3>
                <div className="package-price">{price}</div>
                <div className="package-hours">{hours}</div>
              </div>
              
              <ul className="package-features">
                {features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <svg className="check-icon" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <button 
            className="cta-button" 
            onClick={() => navigate('/contact')}
            aria-label="Get started with our packages"
          >
            Get Started Today
            <svg className="arrow-icon" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
          
          <p className="pricing-note">
            Pay quarterly, or split packages into 3 monthly payments. Production hours can be used for any photo/video work you need for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagePricing;