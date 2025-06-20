import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Rooms from './components/rooms/rooms'
import Title from './components/title/title'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import AboutUs from './components/aboutus/aboutus'

const App = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div>
      <Navbar/>
      <Hero />
      <AboutUs />
      <Title subtitle='OUR ROOMS' title='What We Offer'/>
      <Rooms onRoomSelect={handleRoomSelect} />
      <Title subtitle='TESTIMONIALS' title='What Our Customers Say '/>
      <Testimonials/>
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact selectedRoom={selectedRoom} />
    </div>
  )
}

export default App;