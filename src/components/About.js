import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about" style={{ padding: '4rem 0', background: '#f8fafc' }}>
      <div className="about-content" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '3rem',
        maxWidth: 1200,
        margin: '0 auto',
        flexWrap: 'wrap',
        padding: '0 1rem',
      }}>
        <div className="about-image" style={{ flex: 1, minWidth: 260, display: 'flex', justifyContent: 'center' }}>
          <div className="image-container" style={{
            width: 260,
            height: 260,
            borderRadius: 24,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: '1.5rem',
            boxShadow: '0 8px 32px rgba(102,126,234,0.10)'
          }}>
            Stadler Hotel
          </div>
        </div>
        <div className="about-description" style={{ flex: 2, minWidth: 260 }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: 800,
            marginBottom: '1.2rem',
            color: '#2d3748',
            letterSpacing: '-1px',
            lineHeight: 1.1
          }}>
            About Stadler Hotel
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#4a5568',
            marginBottom: '1.5rem',
            lineHeight: 1.7
          }}>
            Stadler Hotel offers a unique blend of comfort, luxury, and convenience. Our rooms are designed to provide the utmost relaxation, and our services are tailored to meet all your needs.
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .about-content {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .about-image, .about-description {
            min-width: 0 !important;
            width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .about {
            padding: 2rem 0 !important;
          }
          .about-content {
            padding: 0 0.3rem !important;
            gap: 1.2rem !important;
          }
          .about-description h2 {
            font-size: 1.2rem !important;
          }
          .about-description p {
            font-size: 0.95rem !important;
          }
          .image-container {
            width: 140px !important;
            height: 140px !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About; 