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
              <div className="feature-icon">🏠</div>
                <div className="feature-content">
                <h3>Comfort at its best</h3>
                <p> Enjoy <strong>caretaker cleaning services every third day for rooms</strong>, along with <strong>daily bathroom and backyard cleaning</strong>. With <strong>24/7 running water</strong>, <strong>free drinking water</strong>, and a <strong>common kitchen equipped with a fridge for self-cooking</strong>, everything is set for a smooth stay. Our fully furnished rooms come with a <strong>bed, mattress, cupboards, cooler, and geyser</strong> to ensure a peaceful and homely environment.</p>
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
                <p>We celebrate every festival at Susang with wholehearted joy and enthusiasm.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">👥</div>
              <div className="feature-content">
                <h3>We care about our team</h3>
                <p>We believe in taking care of those who take care of you! That's why we pay our employees an advance salary, ensuring they're financially secure. Plus, all our staff members are covered with insurance, giving them peace of mind.</p>
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
            Join Our Community
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
