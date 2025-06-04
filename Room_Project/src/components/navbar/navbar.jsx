import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  
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

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img 
        src={logo} 
        alt="Logo" 
      />
      <ul>
        <li>Home</li>
        <li>Rooms</li>
        <li>Testimonials</li>
        <li>About Us</li> 
        <li><button className={`btn ${sticky ? 'dark-btn' : ''}`}>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar