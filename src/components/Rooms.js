import React from 'react';
import { FaBed, FaWifi, FaTv, FaSnowflake, FaShower, FaStar } from 'react-icons/fa';
import './Rooms.css';

const Rooms = () => {
  const rooms = [
    {
      name: "Deluxe Room",
      description: "Spacious room with city view and premium amenities",
      price: "$200",
      perNight: "/night",
      features: ["King Bed", "City View", "Free WiFi", "Mini Bar"],
      rating: 4.8,
      image: "Deluxe Room"
    },
    {
      name: "Executive Suite",
      description: "Luxury suite with separate living area and balcony",
      price: "$350",
      perNight: "/night",
      features: ["King Bed", "Balcony", "Living Room", "Premium WiFi"],
      rating: 4.9,
      image: "Executive Suite"
    },
    {
      name: "Presidential Suite",
      description: "Ultimate luxury with panoramic views and butler service",
      price: "$800",
      perNight: "/night",
      features: ["King Bed", "Panoramic View", "Butler Service", "Private Pool"],
      rating: 5.0,
      image: "Presidential Suite"
    }
  ];

  return (
    <section id="rooms" className="rooms section">
      <div className="container">
        <h2 className="section-title">Our Rooms</h2>
        <p className="section-subtitle">
          Choose from our carefully designed rooms and suites, each offering comfort and luxury.
        </p>
        
        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <div key={index} className="room-card">
              <div className="room-image">
                <div className="image-placeholder">
                  <span>{room.image}</span>
                </div>
                <div className="room-rating">
                  <FaStar />
                  <span>{room.rating}</span>
                </div>
              </div>
              
              <div className="room-content">
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                
                <div className="room-features">
                  {room.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="room-price">
                  <div className="price">
                    <span className="amount">{room.price}</span>
                    <span className="period">{room.perNight}</span>
                  </div>
                  <a href="#contact" className="btn btn-primary">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="rooms-info">
          <div className="info-card">
            <h3>Room Amenities</h3>
            <div className="amenities-grid">
              <div className="amenity">
                <FaBed />
                <span>Premium Bedding</span>
              </div>
              <div className="amenity">
                <FaWifi />
                <span>High-Speed WiFi</span>
              </div>
              <div className="amenity">
                <FaTv />
                <span>Smart TV</span>
              </div>
              <div className="amenity">
                <FaSnowflake />
                <span>Air Conditioning</span>
              </div>
              <div className="amenity">
                <FaShower />
                <span>Rain Shower</span>
              </div>
              <div className="amenity">
                <FaStar />
                <span>Room Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms; 