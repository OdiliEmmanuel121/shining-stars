import React from 'react';
import './Aboutus.css';
// import schoolBuilding from '../../assets/school-image.jpeg'; // Replace with your assets
import shine2 from '../../assets/shine2.jpg';
import { Facebook, Instagram, Twitter, LinkedIn, Mail, Phone, LocationOn } from '@mui/icons-material';

const Aboutus = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Our Legacy of Excellence</h1>
          <p>Since 1995, shaping the leaders of tomorrow.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="story-grid">
          <div className="story-image">
            <img src={shine2} alt="Shining Star Students" />
          </div>
          <div className="story-text">
            <h2 className="section-title">The Shining Star Story</h2>
            <p className='ptag' >
              Established in 1995, Shining Star International Academy began with a humble 
              vision to provide holistic education in Lagos, Nigeria. What started as 
              a Nursery and Primary school has evolved into a world-class institution 
              acclaimed locally and internationally.
            </p>
            <p className='ptag'  >
              Our journey is defined by a commitment to antagonistic development—cultivating 
              creativity, wellbeing, and character through diverse experiences in the arts, 
              sport, service, and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="values-section">
        <h2 className="section-title center">Our Core Pillars</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🎓</div>
            <h3>Academic Rigor</h3>
            <p className='ptag'  >An accredited IB World School offering PYP, MYP, and DP programs.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>Global Mindset</h3>
            <p className='ptag' >Nurturing intercultural understanding across 60+ nationalities.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p className='ptag' >Benchmarking best practices to produce the total, socially responsible child.</p>
          </div>
        </div>
      </section>

           <footer className="footer">
                      <div className="footer-content">
                          {/* Column 1: About */}
                          <div className="footer-column">
                              <h3 className="footer-logo">Shining Stars</h3>
                              <p className="footer-about">
                                  Nurturing global-mindedness, intercultural understanding, and academic excellence since 1995.
                              </p>
                              <div className="social-links">
                                  <Facebook /> <Instagram /> <Twitter /> <LinkedIn />
                              </div>
                          </div>
      
                          {/* Column 2: Quick Links */}
                          <div className="footer-column">
                              <h3>Quick Links</h3>
                              <ul>
                                  <li><a href="/abt">About Us</a></li>
                                  <li><a href="/adm">Admissions</a></li>
                                  <li><a href="/aca">Academics</a></li>
                                  <li><a href="/con">Contact</a></li>
                              </ul>
                          </div>
      
                          {/* Column 3: Contact Info */}
                          <div className="footer-column">
                              <h3>Contact Us</h3>
                              <div className="contact-item">
                                  <LocationOn /> <span>10 Zone2 road Egbeda, Ibadan, Nigeria</span>
                              </div>
                              <div className="contact-item">
                                  <Phone /> <span>+234 813 117 6627</span>
                              </div>
                              <div className="contact-item">
                                  <Mail /> <span>info@shiningstars.edu</span>
                              </div>
                          </div>
                      </div>
      
                      <div className="footer-bottom">
                          <p>© 2026 Shining Stars International Academy. All rights reserved.</p>
                      </div>
                  </footer>
              
    </div>
  );
};

export default Aboutus;