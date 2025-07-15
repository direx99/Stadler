import React from 'react';

const backgroundImage = 'https://github-production-user-asset-6210df.s3.amazonaws.com/101465561/466545851-f2287fea-8d4e-41ec-ab69-fe0062eebf79.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250715%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250715T151143Z&X-Amz-Expires=300&X-Amz-Signature=3477c84550f2d492301f124a4a9c2c9e89dc3a223eee80042b657fed0802a014&X-Amz-SignedHeaders=host'; // Replace with your preferred image

const Hero = () => {
  return (
    <section className="hero-section" style={{
      minHeight: '75vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: `url(${backgroundImage}) center/cover no-repeat`,
      color: 'white',
      textAlign: 'center',
      padding: '4rem 1rem 3rem 1rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.45)',
        zIndex: 1,
        backdropFilter: 'none',
      }} className="hero-overlay"/>
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <h1 style={{
          fontSize: '3.2rem',
          fontWeight: 800,
          marginBottom: '1.2rem',
          letterSpacing: '-1px',
          lineHeight: 1.1,
          textShadow: '0 2px 16px rgba(0,0,0,0.18)',
          wordBreak: 'break-word',
        }}>
          Travel Brings Power & Love<br />back to your Life
        </h1>
        <p style={{
          fontSize: '1.3rem',
          maxWidth: 600,
          margin: '0 auto 2.2rem auto',
          opacity: 0.95,
          fontWeight: 400,
          wordBreak: 'break-word',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Nunc sagittis, urna nec semper pharetra.
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#about" className="hero-btn hero-btn-primary">ABOUT US</a>
          <a href="#contact" className="hero-btn hero-btn-secondary">CONTACT US</a>
        </div>
      </div>
      <style>{`
        .hero-section {
          position: relative;
        }
        @media (max-width: 600px) {
          .hero-section {
            min-height: 60vh !important;
          }
          .hero-overlay {
            backdrop-filter: blur(2.5px);
          }
        }
        .hero-btn {
          display: inline-block;
          padding: 1rem 2.2rem;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          margin-top: 0.5rem;
          min-width: 140px;
        }
        .hero-btn-primary {
          background: #a3e635;
          color: #222;
          border: none;
          box-shadow: 0 4px 16px rgba(102,126,234,0.10);
        }
        .hero-btn-primary:hover {
          background: #bef264;
        }
        .hero-btn-secondary {
          background: transparent;
          color: #a3e635;
          border: 2px solid #a3e635;
        }
        .hero-btn-secondary:hover {
          background: rgba(163,230,53,0.08);
        }
        @media (max-width: 900px) {
          .hero-section h1 {
            font-size: 2.2rem !important;
          }
          .hero-section p {
            font-size: 1rem !important;
          }
        }
        @media (max-width: 600px) {
          .hero-section {
            padding: 2.5rem 0.5rem 2rem 0.5rem !important;
          }
          .hero-section h1 {
            font-size: 1.1rem !important;
            margin-bottom: 0.7rem !important;
          }
          .hero-section p {
            font-size: 0.85rem !important;
            margin-bottom: 1.2rem !important;
          }
          .hero-btn {
            padding: 0.7rem 0.7rem;
            font-size: 0.95rem;
            min-width: 110px;
            margin-top: 0.3rem;
          }
        }
        @media (max-width: 400px) {
          .hero-section h1 {
            font-size: 0.9rem !important;
          }
          .hero-btn {
            font-size: 0.85rem;
            padding: 0.6rem 0.5rem;
            min-width: 90px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 