import React, { useState } from 'react'
import './rooms.css'

const Rooms = ({ onRoomSelect }) => {
  const roomsData = [
    {
      id: 1,
      name: "Susang G1",
      description: "Cozy and well-ventilated room with great cross ventilation and an attached washroom for added comfort. A common kitchen is conveniently located just next door, making daily routines easier.",
      images: [
        "/images/room1-1.jpg",
        "/images/room1-2.jpg",
        "/images/room1-3.jpg"
      ],
      amenities: ["Garden View", "King Bed", "Private Balcony", "Mini Bar"]
    },
    {
      id: 2,
      name: "Susang G2",
      description: "Spacious two-room setup with two coolers to keep things breezy, plus remote-controlled lights and fan for added ease. Located next to a common kitchen, it's perfect for a relaxed and convenient stay.",
      images: [
        "/images/room2-1.jpg",
        "/images/room2-2.jpg",
        "/images/room2-3.jpg"
      ],
      amenities: ["City View", "Queen Bed", "Work Desk", "Air Purifying Plants"]
    },
    {
      id: 3,
      name: "Susang G3",
      description: "This 150 sq ft room features two comfy beds and opens to a peaceful backyard, letting in plenty of sunlight. With a common kitchen nearby, it’s an ideal spot for a calm and cozy stay.",
      images: [
        "/images/room3-1.jpg",
        "/images/room3-2.jpg",
        "/images/room3-3.jpg"
      ],
      amenities: ["Forest View", "King Bed", "Reading Nook", "Aromatherapy"]
    },
    {
      id: 4,
      name: "Susang G4",
      description: "Compact yet comfortable 120 sq ft room with two separate beds, a large cupboard, and plenty of storage space. Just steps from a common kitchen, it's perfect for those who like things neat and accessible.",
      images: [
        "/images/room4-1.jpg",
        "/images/room4-2.jpg",
        "/images/room4-3.jpg"
      ],
      amenities: ["Panoramic Views", "King Bed", "Sitting Area", "Yoga Mat"]
    },
    {
      id: 5,
      name: "Susang F1",
      description: "Enjoy cross ventilation, natural light, and spacious interiors in the Susang F1 room. With access to a large open terrace, it's perfect for fresh air, relaxation, and creating memories.",
      images: [
        "/images/room5-1.jpg",
        "/images/room5-2.jpg",
        "/images/room5-3.jpg"
      ],
      amenities: ["Garden Access", "Queen Bed", "Meditation Corner", "Herbal Tea Set"]
    },
    {
      id: 6,
      name: "Susang F2",
      description: "Relax in Susang F2 with your own private balcony, desert cooler, and scenic views. The open terrace is perfect for stargazing and unwinding after a long day.",
      images: [
        "/images/room6-1.jpg",
        "/images/room6-2.jpg",
        "/images/room6-3.jpg"
      ],
      amenities: ["Living Wall", "King Bed", "Rain Shower", "Smart Home Features"]
    },
    {
      id: 7,
      name: "Zen Sanctuary",
      description: "Experience true zen in our carefully crafted sanctuary. This room combines Japanese-inspired minimalism with lush greenery, creating a space that nurtures both body and soul.",
      images: [
        "/images/room7-1.jpg",
        "/images/room7-2.jpg",
        "/images/room7-3.jpg"
      ],
      amenities: ["Zen Garden View", "Tatami Area", "Natural Materials", "Essential Oils"]
    },
    {
      id: 8,
      name: "Premium Eco Suite",
      description: "Our flagship Premium Eco Suite represents the pinnacle of sustainable luxury. Every detail reflects our commitment to environmental harmony while providing uncompromising comfort and elegance.",
      images: [
        "/images/room8-1.jpg",
        "/images/room8-2.jpg",
        "/images/room8-3.jpg"
      ],
      amenities: ["Eco-Friendly", "King Bed", "Private Terrace", "Sustainable Amenities"]
    },
    {
      id: 9,
      name: "Premium Eco Suite",
      description: "Our flagship Premium Eco Suite represents the pinnacle of sustainable luxury. Every detail reflects our commitment to environmental harmony while providing uncompromising comfort and elegance.",
      images: [
        "/images/room8-1.jpg",
        "/images/room8-2.jpg",
        "/images/room8-3.jpg"
      ],
      amenities: ["Eco-Friendly", "King Bed", "Private Terrace", "Sustainable Amenities"]
    },
    {
      id: 10,
      name: "Premium Eco Suite",
      description: "Our flagship Premium Eco Suite represents the pinnacle of sustainable luxury. Every detail reflects our commitment to environmental harmony while providing uncompromising comfort and elegance.",
      images: [
        "/images/room8-1.jpg",
        "/images/room8-2.jpg",
        "/images/room8-3.jpg"
      ],
      amenities: ["Eco-Friendly", "King Bed", "Private Terrace", "Sustainable Amenities"]
    },
    {
      id: 11,
      name: "Premium Eco Suite",
      description: "Our flagship Premium Eco Suite represents the pinnacle of sustainable luxury. Every detail reflects our commitment to environmental harmony while providing uncompromising comfort and elegance.",
      images: [
        "/images/room8-1.jpg",
        "/images/room8-2.jpg",
        "/images/room8-3.jpg"
      ],
      amenities: ["Eco-Friendly", "King Bed", "Private Terrace", "Sustainable Amenities"]
    }
  ];


  
  const [currentImageIndex, setCurrentImageIndex] = useState(
    roomsData.reduce((acc, room) => ({ ...acc, [room.id]: 0 }), {})
  );

  const nextImage = (roomId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: (prev[roomId] + 1) % totalImages
    }));
  };

  const prevImage = (roomId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: prev[roomId] === 0 ? totalImages - 1 : prev[roomId] - 1
    }));
  };

  const goToImage = (roomId, index) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: index
    }));
  };

  const handleRoomSelect = (room) => {
    // the parent function to handle room selection
    onRoomSelect(room);
    
    // scroll to contact form
    const contactElement = document.querySelector('.contact');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className='rooms' >
      {roomsData.map((room, index) => (
        <div key={room.id} className={`room ${index % 2 === 0 ? 'room-left' : 'room-right'}`}>
          
          <div className="room-carousel">
            <div className="carousel-container">
              <img 
                src={room.images[currentImageIndex[room.id]]} 
                alt={`${room.name} - Image ${currentImageIndex[room.id] + 1}`}
                className="room-image"
              />
              
              
              <button 
                className="carousel-btn carousel-btn-prev"
                onClick={() => prevImage(room.id, room.images.length)}
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button 
                className="carousel-btn carousel-btn-next"
                onClick={() => nextImage(room.id, room.images.length)}
                aria-label="Next image"
              >
                &#8250;
              </button>
              
              
              <div className="carousel-dots">
                {room.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    className={`carousel-dot ${currentImageIndex[room.id] === imgIndex ? 'active' : ''}`}
                    onClick={() => goToImage(room.id, imgIndex)}
                    aria-label={`Go to image ${imgIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          
          <div className="room-content">
            <h2 className="room-title">{room.name}</h2>
            <p className="room-description">{room.description}</p>
            
            <div className="room-amenities">
              <h3>Amenities:</h3>
              <ul>
                {room.amenities.map((amenity, amenityIndex) => (
                  <li key={amenityIndex}>{amenity}</li>
                ))}
              </ul>
            </div>
            
            <button 
              className="btn1"
              onClick={() => handleRoomSelect(room)}
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Rooms