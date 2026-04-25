
import './Academics.css';
import { School, WorkspacePremium, Language, Science } from '@mui/icons-material';
import { Facebook, Instagram, Twitter, LinkedIn, Mail, Phone, LocationOn } from '@mui/icons-material';

const Academics = () => {
  const programs = [
    {
      code: "PYP",
      name: "Primary Years Programme",
      description: "Developing young learners as caring, active participants in a lifelong journey of learning."
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      description: "A challenging framework that encourages students to make practical connections between their studies and the real world."
    },
    {
      code: "DP",
      name: "Diploma Programme",
      description: "A future-ready curriculum that develops students who have excellent breadth and depth of knowledge."
    }
  ];

  return (
    <div className="academics-page">
      {/* Hero Section */}
      <header className="acad-hero">
        <div className="hero-overlay">
          <h1>Academic Excellence</h1>
          <p className='pgit' >A learning pathway committed to global-mindedness and rigorous inquiry.</p>
        </div>
      </header>

      {/* IB Program Section */}
      <section className="ib-section">
        <h2 className="acad-title">Educational Procedure</h2>
        <div className="ib-grid">
          {programs.map((item, index) => (
            <div className="ib-card" key={index}>
              <div className="ib-badge">{item.code}</div>
              <h3 className='h4git' >{item.name}</h3>
              <p className='pgit' >{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="acad-features">
        <div className="feature-item">
          <Science className="feature-icon" />
          <div>
            <h4 className='h4git' >Research-Led Learning</h4>
            <p className='pgit' >Our students engage in inquiry-based projects that foster critical thinking.</p>
          </div>
        </div>
        <div className="feature-item">
          <Language className="feature-icon" />
          <div>
            <h4 className='h4git'  >Multilingualism</h4>
            <p className='pgit' >Fostering intercultural understanding through diverse language options.</p>
          </div>
        </div>
        <div className="feature-item">
          <WorkspacePremium className="feature-icon" />
          <div>
            <h4 className='h4git'  >Top University Placements</h4>
            <p className='pgit' >Preparing students for success at leading universities worldwide.</p>
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

export default Academics;