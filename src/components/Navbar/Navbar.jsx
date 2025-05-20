import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Pages where navbar should be transparent initially
  const transparentPages = ['/headshot', '/video', '/photography', '/restaurant'];
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };
  
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleMobileServices = () => setMobileServicesOpen(!mobileServicesOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Check if current page should have transparent navbar
    const shouldBeTransparent = transparentPages.some(page => 
      location.pathname.includes(page)
    );

    if (shouldBeTransparent) {
      window.addEventListener('scroll', handleScroll);
      // Set initial state based on scroll position
      handleScroll();
    } else {
      setScrolled(true); // Always solid on other pages
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, location.pathname]);

  const servicesItems = [
    { name: 'Headshot Special', link: '/headshot' },
    { name: 'Video Production', link: '/video' },
    { name: 'Photography', link: '/photography' },
    { name: 'Restaurant Marketing', link: '/restaurant' }
  ];

  // Determine navbar class based on scroll state and current page
  const shouldBeTransparent = transparentPages.some(page => 
    location.pathname.includes(page)
  );
  const navbarClass = shouldBeTransparent 
    ? `navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`
    : 'navbar';

  return (
    <header className={navbarClass}>
      <div className="navbar__container">
        {/* Logo */}
        <a href="/" className="navbar__logo">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/61d5db7decffa01140e4de33/7fa38bf8-f9ef-4372-98f2-6fe58bc54a14/Tshirt+1-01-02+light+text-02.png?format=1500w" 
            alt="Company Logo" 
            className={shouldBeTransparent && !scrolled ? 'logo--light' : ''}
          />
        </a>

        {/* Desktop Menu */}
        <nav className="navbar__menu">
          <ul className="navbar__list">
            <li><a href="/" className="navbar__link">Home</a></li>
            
            <li 
              className="navbar__dropdown" 
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="navbar__link navbar__dropdown-toggle"
                onClick={toggleServices}
                aria-expanded={servicesOpen}
              >
                Services
                {servicesOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              
              {servicesOpen && (
                <ul className="navbar__dropdown-menu">
                  {servicesItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.link} className="navbar__dropdown-link">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            
            <li><a href="/packages" className="navbar__link">Quarterly Packages</a></li>
            <li><a href="/pricing" className="navbar__link">Pricing</a></li>
            <li><a href="/contact" className="navbar__link">Contact</a></li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="navbar__social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="navbar__social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="navbar__social-icon" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`navbar__toggle ${shouldBeTransparent && !scrolled ? 'navbar__toggle--light' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${isOpen ? 'is-open' : ''}`}>
        <ul className="navbar__mobile-list">
          <li><a href="/" className="navbar__mobile-link" onClick={closeMenu}>Home</a></li>
          
          <li className="navbar__mobile-dropdown">
            <button 
              className="navbar__mobile-link navbar__mobile-dropdown-toggle"
              onClick={toggleMobileServices}
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              {mobileServicesOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            
            <ul className={`navbar__mobile-dropdown-menu ${mobileServicesOpen ? 'is-open' : ''}`}>
              {servicesItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    className="navbar__mobile-dropdown-link"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          
          <li><a href="/packages" className="navbar__mobile-link" onClick={closeMenu}>Quarterly Packages</a></li>
          <li><a href="/pricing" className="navbar__mobile-link" onClick={closeMenu}>Pricing</a></li>
          <li><a href="/contact" className="navbar__mobile-link" onClick={closeMenu}>Contact</a></li>
        </ul>

        <div className="navbar__mobile-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="navbar__mobile-social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="navbar__mobile-social-icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;