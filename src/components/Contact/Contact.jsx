// src/components/Contact/Contact.jsx
import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  /* ───────── State ───────── */
  const [form, setForm] = useState({
    firstName: '',
    lastName : '',
    email    : '',
    subject  : '',
    message  : '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError,   setSubmitError]   = useState(null);

  /* ───────── Helpers ───────── */
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    /* Vars passed to EmailJS template */
    const templateParams = {
      firstName : form.firstName,
      lastName  : form.lastName,
      email     : form.email,
      subject   : form.subject || 'No subject',
      message   : form.message,
      name      : `${form.firstName} ${form.lastName}`.trim(),
      reply_to  : form.email,              // sets Reply-To header
      to_email  : 'connect@connectrader.com', // fixed recipient
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,  // e.g. service_ftlr7qf
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // e.g. template_rgpy8ws
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY   // e.g. 6lZn5TP2f2RGalxgR
      );

      setSubmitSuccess(true);
      setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitError('Sorry, something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  /* ───────── Mark-up ───────── */
  return (
    <section className="contact" id="contact">
      <div className="contact__inner container">
        {/* Left info */}
        <address className="contact__info">
          <h3 className="contact__info-title">Get in touch</h3>
          <p className="contact__info-description">
            Have a project in mind or want to discuss potential opportunities?
            Reach out and let's create something amazing together.
          </p>

          <div className="contact__info-items">
            <div className="contact__info-item">
              <div className="contact__icon-container"><FiPhone className="contact__icon" /></div>
              <div><h4>Phone</h4><p>702-882-4874</p></div>
            </div>

            <div className="contact__info-item">
              <div className="contact__icon-container"><FiMail className="contact__icon" /></div>
              <div><h4>Email</h4><p>moyerproduction@gmail.com</p></div>
            </div>

            <div className="contact__info-item">
              <div className="contact__icon-container"><FiMapPin className="contact__icon" /></div>
              <div><h4>Location</h4><p>Bonney Lake, Washington</p></div>
            </div>
          </div>
        </address>

        {/* Right form */}
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <h3 className="contact__form-title">Send us a message</h3>

          <div className="contact__row">
            <label className="contact__input-group">
              <span>First Name *</span>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className={form.firstName ? 'has-value' : ''}
              />
            </label>

            <label className="contact__input-group">
              <span>Last Name *</span>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className={form.lastName ? 'has-value' : ''}
              />
            </label>
          </div>

          <div className="contact__row">
            <label className="contact__input-group">
              <span>Email *</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className={form.email ? 'has-value' : ''}
              />
            </label>

            <label className="contact__input-group">
              <span>Subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={form.subject ? 'has-value' : ''}
              />
            </label>
          </div>

          <label className="contact__input-group contact__message">
            <span>Message *</span>
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
              className={form.message ? 'has-value' : ''}
            />
          </label>

          <button
            type="submit"
            className={`contact__submit ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : (
              <>
                <FiSend className="contact__submit-icon" />
                Send Message
              </>
            )}
          </button>

          {submitSuccess && (
            <div className="contact__success-message">
              Your message has been sent successfully!
            </div>
          )}
          {submitError && (
            <div className="contact__error-message">
              {submitError}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
