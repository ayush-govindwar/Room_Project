import React, { useState } from 'react';
import './testimonials.css';
import next_icon from '../../assets/next-icon.png';
import prev_icon from '../../assets/back-icon.png';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


const testimonials = [
  {
    id: 1,
    name: "Suyog Gadewar",
    highlight: "Clean, non-AC but well-maintained, peaceful stay",
    review: "I stayed at this service apartment for a few days and was pleasantly surprised. Although the room wasn't air-conditioned, it was spotlessly clean and well-maintained. A peaceful, comfortable stay."
  },
  {
    id: 2,
    name: "Janhavi Deshmukh",
    highlight: "Safe for solo female travelers, clean washrooms",
    review: "Highly recommend this hostel! As a solo female traveler, I felt extremely safe and comfortable here. The professional crowd and clean, well-maintained washrooms were a big plus!"
  },
  {
    id: 3,
    name: "Amogh Inamdar",
    highlight: "Cooler, fridge, supportive host",
    review: "Fantastic stay! The owner went the extra mile—gave us an air cooler, fridge access, and ensured the room was cool and comfortable. Professional and peaceful environment."
  },
  {
    id: 4,
    name: "Shubhali Bacchewar",
    highlight: "Chill vibe, respectful crowd, great for professionals",
    review: "It’s a co-ed facility but everyone’s super respectful and professional. Chill, friendly vibe and great sense of community. Cleanliness and amenities are on point!"
  },
  {
    id: 5,
    name: "Jay More",
    highlight: "24/7 water, ideal for students, peaceful",
    review: "Fantastic stay at Susang Co-living! Clean, comfortable & convenient. The 24/7 water and professional atmosphere helped me focus on my studies. Highly recommend for students!"
  },
  {
    id: 6,
    name: "Rajshri Avadhut",
    highlight: "Solo-travel friendly, clean & modern amenities",    
    review: "Loved my short stay here! Felt safe & comfortable as a solo female traveler. Clean rooms, modern amenities & friendly community. Perfect for a brief stay—definitely recommend!"
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
                        <span>{testimonial.highlight}</span>
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