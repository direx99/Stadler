import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '4rem 1rem 3rem 1rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <h1 style={{
        fontSize: '2.8rem',
        fontWeight: 800,
        marginBottom: '1.2rem',
        letterSpacing: '-1px',
        lineHeight: 1.1,
        textShadow: '0 2px 16px rgba(0,0,0,0.08)'
      }}>
        Welcome to Stadler Hotel
      </h1>
      <p style={{
        fontSize: '1.3rem',
        maxWidth: 600,
        margin: '0 auto 2.2rem auto',
        opacity: 0.95,
        fontWeight: 400
      }}>
        Experience luxury and comfort in the heart of the city.
      </p>
      <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#about" className="hero-btn hero-btn-primary">About Us</a>
        <a href="#contact" className="hero-btn hero-btn-secondary">Contact Us</a>
      </div>
      <style>{`
        .hero-btn {
          display: inline-block;
          padding: 1rem 2.2rem;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          margin-top: 0.5rem;
        }
        .hero-btn-primary {
          background: white;
          color: #667eea;
          box-shadow: 0 4px 16px rgba(102,126,234,0.10);
        }
        .hero-btn-primary:hover {
          background: #f8fafc;
        }
        .hero-btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.08);
        }
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2rem !important;
          }
          .hero-section p {
            font-size: 1rem !important;
          }
          .hero-btn {
            padding: 0.8rem 1.2rem;
            font-size: 1rem;
          }
        }
        @media (max-width: 480px) {
          .hero-section {
            padding: 2.5rem 0.5rem 2rem 0.5rem !important;
          }
          .hero-section h1 {
            font-size: 1.3rem !important;
          }
          .hero-section p {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 