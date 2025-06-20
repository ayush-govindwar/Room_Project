import React, { useState, useEffect } from 'react'
import './hero.css'
import { Link } from 'react-scroll'

const Hero = () => {
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 80; 

      if (scrollY >= fadeStart) {
        const fadeProgress = (scrollY - fadeStart) / 20;
        setTextOpacity(Math.max(0, 1 - fadeProgress));
      } else {
        setTextOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='hero container'>
        <div className='hero-text' style={{ 
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: textOpacity,
        transition: 'opacity 0.1s ease',
        pointerEvents: textOpacity < 0.1 ? 'none' : 'auto'
        }}>
            <h1>Susang Co-living Spaces-Hostel</h1>
            <div className="quote-container">
                <p className="quote-line-1">"सुसंगती सदा घडो सुजन वाक्य कानी पडो</p>
                <p className="quote-line-2">कलंक मतीचा झडो विषय सर्वथा नावडो"</p>
            </div>
            <Link to='rooms' smooth={true} offset={-210} duration={500} className='btn'>Book Now</Link>
        </div>
    </div>
  )
}

export default Hero