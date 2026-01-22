import { Facebook, Instagram, Twitter, LinkedIn, Mail, Phone, LocationOn } from '@mui/icons-material';
import './Schools.css';
import nurseryImg from '../../assets/nurseryImg.jpg';
import primaryImg from '../../assets/primaryImg.jpg';
import secondaryImg from '../../assets/secondaryImg.jpg';

const Schools = () => {
  const schoolLevels = [
    {
      title: "Nursery School",
      age: "Ages 2 - 5",
      image: nurseryImg,
      desc: "A warm, nurturing environment where our youngest stars begin their journey through play-based learning and social development.",
      curriculum: "Early Years Foundation Stage (EYFS)"
    },
    {
      title: "Primary School",
      age: "Ages 6 - 11",
      image: primaryImg,
      desc: "Focusing on core literacy, numeracy, and inquiry-based learning to build a strong academic foundation.",
      curriculum: "IB Primary Years Programme (PYP)"
    },
    {
      title: "Secondary School",
      age: "Ages 12 - 18",
      image: secondaryImg,
      desc: "Preparing students for global success through rigorous academics, leadership, and university preparation.",
      curriculum: "IB MYP & Diploma Programme (DP)"
    }
  ];

  return (
    <div className="schools-page">
      <header className="schools-header">
        <h1>Our Schools</h1>
        <p>Tailored education for every stage of your child's development.</p>
      </header>

      <div className="schools-grid">
        {schoolLevels.map((level, index) => (
          <div className="school-card" key={index}>
            <div className="school-image-container">
              <img src={level.image} alt={level.title} />
              <span className="age-badge">{level.age}</span>
            </div>
            <div className="school-info">
              <h2>{level.title}</h2>
              <p className="curriculum-tag">{level.curriculum}</p>
              <p className="school-desc">{level.desc}</p>
              <button className="learn-more-btn">Explore {level.title}</button>
            </div>
          </div>
        ))}
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

export default Schools;