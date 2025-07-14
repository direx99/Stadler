import React from 'react';
import { FaBed, FaWifi, FaSwimmingPool, FaUtensils, FaSpa, FaCar, FaConciergeBell, FaGift } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaBed />,
      title: "Luxury Accommodations",
      description: "Spacious rooms with premium amenities and stunning views",
      price: "From $200/night"
    },
    {
      icon: <FaUtensils />,
      title: "Fine Dining",
      description: "Multiple restaurants serving international and local cuisine",
      price: "Various options"
    },
    {
      icon: <FaSpa />,
      title: "Spa & Wellness",
      description: "Relaxing treatments and state-of-the-art fitness center",
      price: "From $80"
    },
    {
      icon: <FaSwimmingPool />,
      title: "Pool & Recreation",
      description: "Outdoor pool, tennis courts, and recreational activities",
      price: "Complimentary"
    },
    {
      icon: <FaConciergeBell />,
      title: "Concierge Services",
      description: "24/7 assistance for reservations, tours, and special requests",
      price: "Included"
    },
    {
      icon: <FaGift />,
      title: "Special Packages",
      description: "Honeymoon, business, and family vacation packages",
      price: "Custom pricing"
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Discover our comprehensive range of luxury services designed to make your stay unforgettable.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-price">{service.price}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Experience Luxury?</h3>
            <p>Book your stay today and enjoy our world-class services and amenities.</p>
            <a href="#contact" className="btn btn-primary">Book Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 