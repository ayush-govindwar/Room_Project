import React, { useState } from 'react'
import './rooms.css'

const Rooms = ({ onRoomSelect }) => {
  const roomsData = [
    {
      id: 1,
      name: "Deluxe Garden Suite",
      description: "Immerse yourself in tranquil luxury with our Deluxe Garden Suite. Featuring panoramic garden views, premium amenities, and elegant furnishings that complement our natural aesthetic. Perfect for guests seeking serenity and comfort.",
      images: [
        "/images/room1-1.jpg",
        "/images/room1-2.jpg",
        "/images/room1-3.jpg"
      ],
      amenities: ["Garden View", "King Bed", "Private Balcony", "Mini Bar"]
    },
    {
      id: 2,
      name: "Executive Plant Paradise",
      description: "Experience modern comfort surrounded by lush greenery. This executive room combines contemporary design with our signature plant-filled atmosphere, creating a refreshing sanctuary for business and leisure travelers.",
      images: [
        "/images/room2-1.jpg",
        "/images/room2-2.jpg",
        "/images/room2-3.jpg"
      ],
      amenities: ["City View", "Queen Bed", "Work Desk", "Air Purifying Plants"]
    },
    {
      id: 3,
      name: "Botanical Retreat",
      description: "Discover ultimate relaxation in our Botanical Retreat. Thoughtfully designed with natural materials and surrounded by carefully curated plants, this room offers a perfect escape from the urban hustle.",
      images: [
        "/images/room3-1.jpg",
        "/images/room3-2.jpg",
        "/images/room3-3.jpg"
      ],
      amenities: ["Forest View", "King Bed", "Reading Nook", "Aromatherapy"]
    },
    {
      id: 4,
      name: "Green Oasis Suite",
      description: "Step into your personal green oasis. This spacious suite features floor-to-ceiling windows, abundant natural light, and our signature collection of air-purifying plants for the ultimate wellness experience.",
      images: [
        "/images/room4-1.jpg",
        "/images/room4-2.jpg",
        "/images/room4-3.jpg"
      ],
      amenities: ["Panoramic Views", "King Bed", "Sitting Area", "Yoga Mat"]
    },
    {
      id: 5,
      name: "Serenity Garden Room",
      description: "Find peace in our Serenity Garden Room, where minimalist design meets natural beauty. Each element is carefully chosen to create a harmonious environment that promotes rest and rejuvenation.",
      images: [
        "/images/room5-1.jpg",
        "/images/room5-2.jpg",
        "/images/room5-3.jpg"
      ],
      amenities: ["Garden Access", "Queen Bed", "Meditation Corner", "Herbal Tea Set"]
    },
    {
      id: 6,
      name: "Urban Jungle Suite",
      description: "Embrace the urban jungle concept in this stunning suite. Featuring living walls, natural textures, and modern amenities, it's designed for guests who appreciate innovative biophilic design.",
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