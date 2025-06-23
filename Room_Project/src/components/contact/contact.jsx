import React, { useState, useEffect } from 'react'
import './contact.css'
import mailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png' 
import locationIcon from '../../assets/location-icon.png'

const Contact = ({ selectedRoom }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    room: selectedRoom?.name || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

const roomOptions = [
  "Susang F1",
  "Susang F2",
  "Susang G1",
  "Susang G2",
  "Susang G3",
  "Susang G4",
  "Susang U1",
  "Susang S1",
  "Susang S2",
  "Susang S3",
  "Susang V1"
];


  // Update room selection when selectedRoom prop changes
  useEffect(() => {
    if (selectedRoom) {
      setFormData(prev => ({
        ...prev,
        room: selectedRoom.name
      }));
    }
  }, [selectedRoom]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitting(true);
    setSubmitMessage('');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b61d3b05-f782-4aa9-8feb-8a05e9069231',
          name: formData.name,
          phone: formData.phone,
          room: formData.room,
          message: formData.message,
          subject: `Hotel Room Inquiry - ${formData.room}`,
          from_name: formData.name,
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        
        setFormData({
          name: '',
          phone: '',
          room: selectedRoom?.name || '',
          message: ''
        });
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message</h3>
            <p>Reach out to us through contact form. Your 
            feedback is important to us, 
            and we will get back to you as soon as possible.
            </p>
            <ul>
                <li><img src={mailIcon} alt=""/>swapnil283@gmail.com</li>
                <li><img src={phoneIcon} alt=""/>+91 9834179216</li>
                <li><img src={locationIcon} alt=""/>Aurangabad, Sambhaji-Nagar</li>
            </ul>
            
            {/* Google Maps Section */}
            <div className="map-container">
                <h4>Find Us Here</h4>
                <div className="map-wrapper">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.080023229881!2d75.34334767522587!3d19.878842581498084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba37af08bc9eb%3A0xc926d00d0ad7a640!2sSusang%20Co-living%20Spaces%20-%20Hostel!5e0!3m2!1sen!2sin!4v1750675578086!5m2!1sen!2sin"
                        width="100%" 
                        height="250" 
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Hotel Location"
                    ></iframe>
                </div>
            </div>
        </div>
        <div className="contact-col1">
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input 
                  type="text" 
                  name='name' 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name" 
                  required 
                />
                
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  name='phone' 
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number" 
                  required 
                />
                
                <label>Select Room</label>
                <select 
                  name="room" 
                  value={formData.room}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Choose a room...</option>
                  {roomOptions.map((room, index) => (
                    <option key={index} value={room}>
                      {room}
                    </option>
                  ))}
                </select>
                
                <label>Write your message here</label>
                <textarea 
                  name="message" 
                  rows="6" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message here..." 
                  required
                ></textarea>
                
                <button 
                  type="submit" 
                  className='btn dark-btn'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitMessage && (
                  <div className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
                    {submitMessage}
                  </div>
                )}
            </form>
        </div>
    </div>
  )
}

export default Contact