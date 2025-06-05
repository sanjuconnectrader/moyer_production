import React from 'react';
import './Headshotprice.css';

const Headshotprice = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className="headshot-price">
      <div className="headshot-price__container">
        <div className="headshot-price__header">
          <h2 className="price-tag">$300 SETUP FEE.</h2>
          <h2 className="price-tag">$100 PER HEADSHOT.</h2>
          <h2 className="price-tag">THAT'S IT.</h2>
          <div className="divider"></div>
          <p className="subtitle">Professional headshots with transparent pricing</p>
        </div>

        <form className="headshot-price__form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                First Name<span className="required">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="form-input"
                required
                placeholder="Enter your first name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="form-input"
                placeholder="Enter your last name"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="email" className="form-label">
                Email<span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="form-input"
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Preferred Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="form-input"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="count" className="form-label">
                How Many People Need Headshots?<span className="required">*</span>
              </label>
              <input
                id="count"
                name="count"
                type="number"
                className="form-input"
                placeholder="Estimates are OK"
                min="1"
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message" className="form-label">
                Message<span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-textarea"
                required
                placeholder="Tell us about your needs, preferred location, or any special requests"
              ></textarea>
            </div>

            <div className="form-group full-width checkbox-container">
              <div className="checkbox-group">
                <input
                  id="signup"
                  name="signup"
                  type="checkbox"
                  className="checkbox-input"
                />
                <label htmlFor="signup" className="checkbox-label">
                  Sign up for news and updates
                </label>
              </div>
            </div>

            <div className="form-group full-width">
              <button type="submit" className="submit-btn">
                <span>SUBMIT REQUEST</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Headshotprice;