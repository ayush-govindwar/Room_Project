import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo4.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight-60) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img 
        src={logo} 
        alt="Logo" 
      />
      
      
      <ul className="desktop-menu">
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
        <li><Link to='rooms' smooth={true} offset={-210} duration={500}>Rooms</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
        <li><Link to='about-us' smooth={true} offset={0} duration={500}>About Us</Link></li> 
        <li><Link to='contact' smooth={true} offset={-100} duration={500} className={`btn ${sticky ? 'dark-btn' : ''}`}>Contact Us</Link></li>
      </ul>

      
      <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
        <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
        <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
        <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
      </div>

      
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>

      
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to='rooms' smooth={true} offset={-210} duration={500} onClick={closeMobileMenu}>Rooms</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-250} duration={500} onClick={closeMobileMenu}>Testimonials</Link></li>
          <li><Link to='about-us' smooth={true} offset={0} duration={500} onClick={closeMobileMenu}>About Us</Link></li>
          <li><Link to='contact' smooth={true} offset={-90} duration={500} className={`btn ${sticky ? 'dark-btn' : ''}`} onClick={closeMobileMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar