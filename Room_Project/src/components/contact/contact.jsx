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
    "Deluxe Garden Suite",
    "Executive Plant Paradise",
    "Botanical Retreat",
    "Green Oasis Suite",
    "Serenity Garden Room",
    "Urban Jungle Suite",
    "Zen Sanctuary",
    "Premium Eco Suite"
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
            <p>Reach our to us through contact form. Your 
            feedback is important to us, 
            and we will get back to you as soon as possible.
            </p>
            <ul>
                <li><img src={mailIcon} alt=""/>Swayush.govindwar@gmail.com</li>
                <li><img src={phoneIcon} alt=""/>+1 1234567890</li>
                <li><img src={locationIcon} alt=""/>Aurangabad, Sambhaji-Nagar</li>
            </ul>
        </div>
        <div className="contact-col">
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