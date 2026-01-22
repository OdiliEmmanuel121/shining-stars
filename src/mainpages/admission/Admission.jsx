import React from 'react';
import './Admission.css';
import { Assignment, Event, Groups, School } from '@mui/icons-material';
import { Facebook, Instagram, Twitter, LinkedIn, Mail, Phone, LocationOn } from '@mui/icons-material';

const Admission = () => {
  const steps = [
    { icon: <Assignment />, title: "Apply", text: "Fill out the online application form and submit required documents." },
    { icon: <Event />, title: "Entrance Exam", text: "Students undergo a baseline assessment in English and Mathematics." },
    { icon: <Groups />, title: "Interview", text: "A brief interaction with the student and parents to align on values." },
    { icon: <School />, title: "Enrollment", text: "Successful candidates receive an offer letter to join our community." }
  ];

  return (
    <div className="admission-page">
      {/* Hero Section */}
      <header className="adm-hero">
        <h1>Join the Galaxy of Stars</h1>
        <p className='pgit ' >Start your child’s journey toward global leadership today.</p>
      </header>

      {/* Step-by-Step Process */}
      <section className="process-section">
        <h2 className="adm-title">Admission Process</h2>
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-icon">{step.icon}</div>
              <h3 className='h4git' >{step.title}</h3>
              <p className='pgit'>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements & CTA */}
      <section className="req-section">
        <div className="req-card">
          <h2>Requirements</h2>
          <ul>
            <li>Birth Certificate (Copy)</li>
            <li>Recent Passport Photographs (4)</li>
            <li>Previous School Academic Reports</li>
            <li>Immunization Records</li>
          </ul>
          <div className="adm-cta">
            <button className="apply-btn">Download Application Form</button>
            <button className="inquiry-btn">Enquire Now</button>
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
              <LocationOn /> <span>123 School Lane, Lagos, Nigeria</span>
            </div>
            <div className="contact-item">
              <Phone /> <span>+234 000 000 0000</span>
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

export default Admission;