import React from 'react';
import './aboutus.css';
import { Link } from 'react-scroll';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Title Section */}
      <div className="title">
        About Us
        <h2>Get to Know Susang</h2>
      </div>

      {/* Main Content */}
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-subtitle">Where Care Meets Community!</h2>
          <p className="about-intro">
            At Susang Coliving, we're not just about providing a roof over your head - we're about creating a home. Here are some interesting facts about us:
          </p>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">👥</div>
              <div className="feature-content">
                <h3>We care about our team</h3>
                <p>We believe in taking care of those who take care of you! That's why we pay our employees an advance salary, ensuring they're financially secure. Plus, all our staff members are covered with insurance, giving them peace of mind.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🏠</div>
              <div className="feature-content">
                <h3>Comfort at its best</h3>
                <p>Our rooms are equipped with all the essentials, including a laundry bag, bed, and cupboard. We've got you covered!</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🎬</div>
              <div className="feature-content">
                <h3>Movie Nights & Sports Frenzy</h3>
                <p>Under the stars on our terrace, we'll screen 2 movies/matches for you to enjoy with your fellow residents. It's the perfect way to unwind and make some unforgettable memories.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🎉</div>
              <div className="feature-content">
                <h3>Celebrating together</h3>
                <p>Life's special moments are meant to be shared! That's why we host two dinner parties every year - one during Diwali and another during our annual Milan celebration. It's a great way to bond with your fellow residents and make unforgettable memories.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-image-section">
          <div className="about-image-container">
            <img 
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Susang Coliving Community" 
              className="about-image"
            />
          </div>
        </div>
      </div>

      {/* Centered Conclusion with Join Button */}
      <div className="join-community-section">
        <div className="about-conclusion">
          <p>At Susang Coliving, we're all about building a community that feels like family. Join us and experience it for yourself!</p>
          <Link to='rooms' 
      smooth={true} 
      offset={-210} 
      duration={500} 
      className={`btn1 `}>
        Join Our Community</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;