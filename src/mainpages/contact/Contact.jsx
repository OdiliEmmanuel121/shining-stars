import React from 'react';
import './Contact.css';
import { Mail, Phone, LocationOn, AccessTime } from '@mui/icons-material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header */}
      <header className="contact-header">
        <h1>Get In Touch</h1>
        <p className='pgoot' >Have questions? We are here to help you start your journey with us.</p>
      </header>

      <div className="contact-wrapper">
        {/* Left Side: Contact Information */}
        <div className="contact-info">
          <h2 className='h4git' >Contact Information</h2>
          <p className='pgit'>Reach out to our administrative office for any inquiries.</p>

          <div className="info-blocks">
            <div className="info-item">
              <LocationOn className="icon" />
              <div>
                <h3 className='pgit' >Location</h3>
                <p>123 School Avenue, Lagos, Nigeria</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="icon" />
              <div>
                <h3 className='pgit' >Phone</h3>
                <p>+234 800 123 4567</p>
              </div>
            </div>
            <div className="info-item">
              <Mail className="icon" />
              <div>
                <h3 className='pgit' >Email</h3>
                <p>admissions@shiningstar.edu</p>
              </div>
            </div>
            <div className="info-item">
              <AccessTime className="icon" />
              <div>
                <h3 className='pgit' >Office Hours</h3>
                <p>Mon - Fri: 8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Inquiry Type</option>
                <option value="admission">Admissions</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* Embedded Map Section */}
      <div className="map-section">
        <iframe
          title="school-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.06348603215!2d3.3362!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e83067ad3c97c!2sLagos!5e0!3m2!1sen!2sng!4v1614761234567!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy">
        </iframe>
      </div>

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

export default Contact;