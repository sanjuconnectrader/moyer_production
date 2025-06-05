import React from 'react';
import { FiClock, FiCheckCircle, FiXCircle, FiMail, FiUser } from 'react-icons/fi';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <section className="pricing-intro">
        <h1 className="pricing-title">Pricing Structure</h1>
        <p className="pricing-subtitle">
          I charge day rates for all of my services, with the exception of any specials posted on this website or my social media pages.
        </p>
      </section>

      <section className="pricing-cards">
        <div className="pricing-card">
          <div className="card-header">
            <FiClock className="card-icon" />
            <h3>Half Day</h3>
          </div>
          <div className="card-price">$1,600</div>
          <div className="card-duration">Up to 4 hours of work</div>
          <ul className="card-features">
            <li>Perfect for smaller projects</li>
            <li>Quick turnaround</li>
            <li>Focused session</li>
          </ul>
        </div>

        <div className="pricing-card featured">
          <div className="card-header">
            <FiClock className="card-icon" />
            <h3>Full Day</h3>
          </div>
          <div className="card-price">$2,400</div>
          <div className="card-duration">Up to 8 hours of work</div>
          <ul className="card-features">
            <li>Comprehensive coverage</li>
            <li>Multiple locations</li>
            <li>Extended creative time</li>
          </ul>
        </div>
      </section>

      <section className="pricing-cta">
        <h2>Looking for long-term marketing?</h2>
        <p>Check out our quarterly content packages!</p>
      </section>

      <div className="pricing-details-container">
        <section className="included-section">
          <h3 className="section-title">What is included in 'work'?</h3>
          <ul className="included-list">
            <li>
              <FiCheckCircle className="list-icon included" />
              <span>Shooting</span>
            </li>
            <li>
              <FiCheckCircle className="list-icon included" />
              <span>Editing time</span>
            </li>
            <li>
              <FiCheckCircle className="list-icon included" />
              <span>Extensive pre-production efforts</span>
           
            </li>
          </ul>
        </section>

        <section className="not-included-section">
          <h3 className="section-title">What is not charged?</h3>
          <ul className="not-included-list">
            <li>
              <FiXCircle className="list-icon excluded" />
              <span>Initial calls</span>
            </li>
            <li>
              <FiXCircle className="list-icon excluded" />
              <span>Discussions of potential ideas</span>
            </li>
            <li>
              <FiXCircle className="list-icon excluded" />
              <span>Answering any questions you may have</span>
            </li>
          </ul>
        </section>
      </div>

      <section className="packages-form">
        <h2 className="form-title"> Packages Inquiry</h2>
        <form className="pricing-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name (required)</label>
              <div className="name-fields">
                <div className="input-group">
                  <FiUser className="input-icon" />
                  <input type="text" placeholder="First Name" required />
                </div>
                <div className="input-group">
                  <FiUser className="input-icon" />
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email (required)</label>
              <div className="input-group">
                <FiMail className="input-icon" />
                <input type="email" placeholder="Your email address" required />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group checkbox-group">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter">Sign up for news and updates</label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Subject (required)</label>
              <input type="text" placeholder="Subject of your inquiry" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Message (required)</label>
              <textarea placeholder="Tell us about your project needs" required></textarea>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Pricing;