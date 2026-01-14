import React, { useState } from 'react'; // Added useState
import './Navup.css';
import shin from '../../assets/shin.jpeg';
import { Link } from 'react-router-dom';

const Navup = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track menu toggle

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='Navup-Container'>
            <div className='NavupLinkImg'>
                <img src={shin} alt="Shining Star Logo" className='shinImg' />
                <h1 className='shintext'>Shining Stars Int'l Academy</h1>
            </div>

            {/* Hamburger Icon */}
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Links - now controlled by isOpen state */}
            <div className={`NavupLinks ${isOpen ? 'open' : ''}`}>
                <Link className='navLink1' to="/" onClick={toggleMenu}>Home</Link>
                <Link className='navLink2' to="/abt" onClick={toggleMenu}>About Us</Link>
                <Link className='navLink3' to="/sch" onClick={toggleMenu}>Schools</Link>
                <Link className='navLink4' to="/aca" onClick={toggleMenu}>Academics</Link>
                <Link className='navLink5' to="/adm" onClick={toggleMenu}>Admission</Link>
                <Link className='navLink6' to="/con" onClick={toggleMenu}>Contact</Link>    
            </div>
        </div>
    );
};

export default Navup;