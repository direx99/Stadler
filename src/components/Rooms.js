import React from 'react';
import './Rooms.css';

const roomImages = [
  'https://github.com/user-attachments/assets/726ca359-ed7d-4544-be35-01e9ed2d21af',
  'https://github.com/user-attachments/assets/c27712a8-82f3-44f9-b7c1-4660b8d48be9',
  'https://github.com/user-attachments/assets/6d615fa1-8b9c-4a5d-b0ef-aa661218d2a1',
  'https://github.com/user-attachments/assets/4bef483f-4517-4147-932e-b198380a9327',
  'https://github.com/user-attachments/assets/0cb075c7-8e4b-414c-9f43-7bbd9f7a834c',
  'https://github.com/user-attachments/assets/a9e9eae0-6189-41d9-8a53-6122ffdb4d02',
];

const Rooms = () => {
  return (
    <section className="rooms" id="rooms" style={{ padding: '4rem 0', background: '#f8fafc' }}>
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>Our Featured Room</h2>
        <div className="room-card" style={{ maxWidth: 800, margin: '0 auto', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <div className="room-gallery" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            padding: '2rem',
            background: '#fff',
          }}>
            {roomImages.map((img, idx) => (
              <div key={idx} style={{
                background: idx === 0 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#e2e8f0',
                borderRadius: 12,
                minHeight: 140,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: idx === 0 ? '0 2px 8px rgba(102,126,234,0.10)' : 'none',
                overflow: 'hidden',
                padding: 0,
              }}>
                <img src={img} alt={`Room Photo ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12, display: 'block' }} />
              </div>
            ))}
          </div>
          <div className="room-content" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2d3748', marginBottom: 10 }}>Deluxe King Room</h3>
            <p style={{ color: '#718096', marginBottom: 20 }}>
              Spacious room with king-size bed, sea view balcony, modern bathroom, and all amenities for a luxurious stay.
            </p>
            <div className="room-features" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
              <span className="feature-tag">Sea View</span>
              <span className="feature-tag">Balcony</span>
              <span className="feature-tag">WiFi</span>
              <span className="feature-tag">Breakfast Included</span>
              <span className="feature-tag">Air Conditioning</span>
            </div>
            <div className="room-price" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="price" style={{ fontSize: '1.8rem', fontWeight: 700, color: '#667eea' }}>$195</span>
              <span style={{ color: '#718096', fontSize: '1rem' }}>/ night</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .room-gallery {
            grid-template-columns: 1fr 1fr 1fr !important;
            gap: 0.4rem !important;
            padding: 0.7rem !important;
          }
          .room-content {
            padding: 1rem !important;
          }
        }
        @media (max-width: 600px) {
          .room-gallery {
            grid-template-columns: 1fr 1fr 1fr !important;
            gap: 0.4rem !important;
            padding: 0.7rem !important;
          }
          .room-content {
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Rooms; 