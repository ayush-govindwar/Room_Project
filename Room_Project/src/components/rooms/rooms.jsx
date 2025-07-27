import React, { useState } from 'react'
import './rooms.css'

const Rooms = ({ onRoomSelect }) => {
  const roomsData = [
    {
      id: 1,
      name: "Susang F1",
      description: "Enjoy cross ventilation, natural light, and spacious interiors in the Susang F1 room. With access to a large open terrace, it's perfect for fresh air, relaxation, and creating memories. **3 tenants**",
      images: [
        "/images/room5-1.jpg",
        "/images/room5-2.jpg",
        "/images/room5-3.jpg"
      ],
      details: ["Electricity not included in price", "No inverter", "Attached washroom"],
      price: "₹13,500"
    },
    {
      id: 2,
      name: "Susang F2",
      description: "Relax in Susang F2 with your own private balcony, desert cooler, and scenic views. The open terrace is perfect for stargazing and unwinding after a long day. **3 tenants**",
      images: [
        "/images/room6-1.jpg",
        "/images/room6-2.jpg",
        "/images/room6-3.jpg"
      ],
      details: ["Electricity not included in price", "No inverter", "Attached washroom"],
      price: "₹13,500"
    },
    {
      id: 3,
      name: "Susang G1",
      description: "Cozy and well-ventilated room with great cross ventilation and an attached washroom for added comfort. A common kitchen is conveniently located just next door, making daily routines easier. **2 tenants**",
      images: [
        "/images/room1-1.jpg",
        "/images/room1-2.jpg",
        "/images/room1-3.jpg"
      ],
      details: ["Electricity included in price", "Inverter available", "Attached washroom"],
      price: "₹11,000"
    },
    {
      id: 4,
      name: "Susang G2",
      description: "Spacious two-room setup with two coolers to keep things breezy, plus remote-controlled lights and fan for added ease. Located next to a common kitchen, it's perfect for a relaxed and convenient stay. **3 tenants**",
      images: [
        "/images/room2-1.jpg",
        "/images/room2-2.jpg",
        "/images/room2-3.jpg"
      ],
      details: ["Electricity included in price", "Inverter available", "No attached washroom"],
      price: "₹13,500"
    },
    {
      id: 5,
      name: "Susang G3",
      description: "This 150 sq ft room features two comfy beds and opens to a peaceful backyard, letting in plenty of sunlight. With a common kitchen nearby, it's an ideal spot for a calm and cozy stay. **2 tenants**",
      images: [
        "/images/room3-1.jpg",
        "/images/room3-2.jpg",
        "/images/room3-3.jpg"
      ],
      details: ["Electricity included in price", "Inverter available", "No attached washroom"],
      price: "₹9,000"
    },
    {
      id: 6,
      name: "Susang G4",
      description: "Compact yet comfortable 120 sq ft room with two separate beds, a large cupboard, and plenty of storage space. Just steps from a common kitchen, it's perfect for those who like things neat and accessible. **2 tenants**",
      images: [
        "/images/room4-1.jpg",
        "/images/room4-2.jpg",
        "/images/room4-3.jpg"
      ],
      details: ["Electricity included in price", "Inverter available", "No attached washroom"],
      price: "₹9,000"
    },
    {
      id: 7,
      name: "Susang U1",
      description: "Spacious accommodation designed for larger groups, offering comfort and convenience for up to four occupants. Perfect for families or groups seeking a comfortable stay with modern amenities. **4 tenants**",
      images: [
        "/images/room7-1.jpg",
        "/images/room7-2.jpg",
        "/images/room7-3.jpg"
      ],
      details: ["Electricity included in price", "No inverter", "Attached washroom"],
      price: "₹16,000"
    },
    {
      id: 8,
      name: "Susang S1",
      description: "Well-appointed room offering modern comfort and convenience for three occupants. Features thoughtful design elements and practical amenities for a pleasant stay. **3 tenants**",
      images: [
        "/images/room8-1.jpg",
        "/images/room8-2.jpg",
        "/images/room8-3.jpg"
      ],
      details: ["Electricity included in price", "No inverter", "Attached washroom"],
      price: "₹13,500"
    },
    {
      id: 9,
      name: "Susang S2",
      description: "Comfortable accommodation for two guests, featuring modern amenities and a cozy atmosphere. Ideal for couples or friends seeking a relaxing and convenient stay. **2 tenants**",
      images: [
        "/images/room8-1.jpg",
        "/images/room8-2.jpg",
        "/images/room8-3.jpg"
      ],
      details: ["Electricity included in price", "No inverter", "Attached washroom"],
      price: "₹10,000"
    },
    {
      id: 10,
      name: "Susang S3",
      description: "Budget-friendly option for two occupants without compromising on essential comforts. Perfect for travelers seeking affordable accommodation with necessary amenities. **2 tenants**",
      images: [
        "/images/room8-1.jpg",
        "/images/room8-2.jpg",
        "/images/room8-3.jpg"
      ],
      details: ["Electricity included in price", "No inverter", "Attached washroom"],
      price: "₹7,000"
    },
    {
      id: 11,
      name: "Susang V1",
      description: "Economical accommodation option for two guests, offering basic comfort and convenience. A practical choice for budget-conscious travelers seeking clean and comfortable lodging. **2 tenants**",
      images: [
        "/images/room8-1.jpg",
        "/images/room8-2.jpg",
        "/images/room8-3.jpg"
      ],
      details: ["Electricity included in price", "No inverter", "No attached washroom"],
      price: "₹7,000"
    }
  ];

  // Booked rooms data - copy paste room objects here as they get booked
  const bookedRoomsData = [
        {
      id: 1,
      name: "Susang F1",
      description: "Enjoy cross ventilation, natural light, and spacious interiors in the Susang F1 room. With access to a large open terrace, it's perfect for fresh air, relaxation, and creating memories. **3 tenants**",
      images: [
        "/images/room5-1.jpg",
        "/images/room5-2.jpg",
        "/images/room5-3.jpg"
      ],
      details: ["Electricity not included in price", "No inverter", "Attached washroom"],
      price: "₹13,500"
    },
    
    {
      id: 5,
      name: "Susang G3",
      description: "This 150 sq ft room features two comfy beds and opens to a peaceful backyard, letting in plenty of sunlight. With a common kitchen nearby, it's an ideal spot for a calm and cozy stay. **2 tenants**",
      images: [
        "/images/room3-1.jpg",
        "/images/room3-2.jpg",
        "/images/room3-3.jpg"
      ],
      details: ["Electricity included in price", "Inverter available", "No attached washroom"],
      price: "₹9,000"
    },
    {
      id: 6,
      name: "Susang G4",
      description: "Compact yet comfortable 120 sq ft room with two separate beds, a large cupboard, and plenty of storage space. Just steps from a common kitchen, it's perfect for those who like things neat and accessible. **2 tenants**",
      images: [
        "/images/room4-1.jpg",
        "/images/room4-2.jpg",
        "/images/room4-3.jpg"
      ],
      details: ["Electricity included in price", "Inverter available", "No attached washroom"],
      price: "₹9,000"
    },
    {
      id: 11,
      name: "Susang V1",
      description: "Economical accommodation option for two guests, offering basic comfort and convenience. A practical choice for budget-conscious travelers seeking clean and comfortable lodging. **2 tenants**",
      images: [
        "/images/room8-1.jpg",
        "/images/room8-2.jpg",
        "/images/room8-3.jpg"
      ],
      details: ["Electricity included in price", "No inverter", "No attached washroom"],
      price: "₹7,000"
    }
    // Add more booked room objects here by copy-pasting from roomsData
  ];

  // State to manage booked rooms (now using the bookedRoomsData array)
  const [bookedRooms, setBookedRooms] = useState(bookedRoomsData);
  
  // Initialize currentImageIndex state for carousel functionality
  const [currentImageIndex, setCurrentImageIndex] = useState(
    roomsData.reduce((acc, room) => ({ ...acc, [room.id]: 0 }), {})
  );

  // Function to mark a room as booked
  const markRoomAsBooked = (roomId) => {
    const roomToBook = roomsData.find(room => room.id === roomId);
    if (roomToBook && !bookedRooms.find(room => room.id === roomId)) {
      setBookedRooms(prev => [...prev, roomToBook]);
    }
  };

  // Function to unbook a room (remove from booked list)
  const unmarkRoomAsBooked = (roomId) => {
    setBookedRooms(prev => prev.filter(room => room.id !== roomId));
  };

  // Check if a room is booked
  const isRoomBooked = (roomId) => {
    return bookedRooms.some(room => room.id === roomId);
  };

  // Combine available and booked rooms for display
  const allRoomsForDisplay = roomsData.map(room => ({
    ...room,
    isBooked: isRoomBooked(room.id)
  }));

  const nextImage = (roomId, totalImages) => {
    if (isRoomBooked(roomId)) return; // Disable carousel for booked rooms
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: (prev[roomId] + 1) % totalImages
    }));
  };

  const prevImage = (roomId, totalImages) => {
    if (isRoomBooked(roomId)) return; // Disable carousel for booked rooms
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: prev[roomId] === 0 ? totalImages - 1 : prev[roomId] - 1
    }));
  };

  const goToImage = (roomId, index) => {
    if (isRoomBooked(roomId)) return; // Disable carousel for booked rooms
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: index
    }));
  };

  const handleRoomSelect = (room) => {
    if (room.isBooked) return; // Prevent selection of booked rooms
    
    // Call the parent function to handle room selection
    if (onRoomSelect) {
      onRoomSelect(room);
    }
    
    // Scroll to contact form
    const contactElement = document.querySelector('.contact');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className='rooms'>

      {allRoomsForDisplay.map((room, index) => (
        <div key={room.id} className={`room ${index % 2 === 0 ? 'room-left' : 'room-right'} ${room.isBooked ? 'booked' : ''}`}>
          
          <div className="room-carousel">
            <div className="carousel-container">
              <img 
                src={room.images[currentImageIndex[room.id] || 0]} 
                alt={`${room.name} - Image ${(currentImageIndex[room.id] || 0) + 1}`}
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
                    className={`carousel-dot ${(currentImageIndex[room.id] || 0) === imgIndex ? 'active' : ''}`}
                    onClick={() => goToImage(room.id, imgIndex)}
                    aria-label={`Go to image ${imgIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="room-content">
            <h2 className="room-title">{room.name}</h2>
            <div className="room-price">
              <span className="price-label">Price: </span>
              <span className="price-amount">{room.price}</span>
            </div>
            <p className="room-description" dangerouslySetInnerHTML={{__html: room.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}}></p>
            
            <div className="room-amenities">
              <h3>Details:</h3>
              <ul>
                {room.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
            
            <button 
              className="btn1"
              onClick={() => handleRoomSelect(room)}
              disabled={room.isBooked}
            >
              {room.isBooked ? 'Booked' : 'Select'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Rooms