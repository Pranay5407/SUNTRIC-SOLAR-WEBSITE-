import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => (
  <section className="hero-banner">
    <div className="hero-content">
      <h1>SUNTRIC SOLAR SYSTEM</h1>
      <p>Owned by PRANAY GURNULE | Premium Solar Installation Services</p>
      <div className="hero-buttons">
        <a href="tel:+918390323024" className="cta">Call Now</a>
        <a href="https://wa.me/918390323024" target="_blank" rel="noreferrer" className="cta">WhatsApp</a>
        <a href="#contact" className="cta">Get Free Quote</a>
      </div>
    </div>
  </section>
);

export default HeroBanner;
