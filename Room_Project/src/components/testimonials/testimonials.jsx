import React, { useState } from 'react';
import './testimonials.css';
import next_icon from '../../assets/next-icon.png';
import prev_icon from '../../assets/back-icon.png';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonial data 
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "California, USA",
      review: "The room was spotless, cozy, and beautifully decorated. The staff was friendly, and check-in was smooth. I loved the peaceful atmosphere and stunning view from the window."
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Tokyo, Japan", 
      review: "Exceptional service and attention to detail. The amenities were top-notch and the location was perfect for exploring the city. Will definitely be back!"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      review: "A truly memorable experience. The hospitality was outstanding and every detail was carefully thought out. Highly recommend to anyone visiting the area."
    },
    {
      id: 4,
      name: "James Wilson",
      location: "London, UK",
      review: "Perfect blend of comfort and luxury. The room was immaculate and the staff went above and beyond to make our stay special. Five stars!"
    },
    {
      id: 5,
      name: "Priya Sharma",
      location: "Mumbai, India",
      review: "Beautiful property with amazing views. The breakfast was delicious and the staff was incredibly helpful with local recommendations."
    },
    {
      id: 6,
      name: "David Brown",
      location: "Sydney, Australia",
      review: "Outstanding value for money. Clean, comfortable, and well-located. The customer service was exceptional from start to finish."
    }
  ];

  const maxIndex = Math.ceil(testimonials.length / 2) - 1;

  const handleNext = () => {
    setCurrentIndex(prev => prev < maxIndex ? prev + 1 : 0);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : maxIndex);
  };

  return (
    <div className="testimonials">
      
      <button onClick={handlePrev} className="nav-btn prev-btn">
        <img src={prev_icon} alt="Previous" className="nav-btn" />;
      </button>
      
      <button onClick={handleNext} className="nav-btn next-btn">
        <img src={next_icon} alt="next" className="nav-btn" />;
      </button>

      
      <div className="slider">
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, slideIndex) => (
            <div key={slideIndex} className="slide-pair">
              {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="slide">
                    <div className="user-info">
                      <div className="user-avatar">
                        <span>👤</span>
                      </div>
                      <div className="user-details">
                        <h3>{testimonial.name}</h3>
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                    <p>{testimonial.review}</p>
                  </div>
                </div>
              ))}
              
              {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).length === 1 && (
                <div className="testimonial-card"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      
      <div className="dots-container">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;