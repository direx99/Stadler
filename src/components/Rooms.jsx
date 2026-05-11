import { useState } from 'react';
import BookingModal from './BookingModal';

const rooms = [
  { name: 'Deluxe King Suite', priceLKR: 'Rs 58,500 / night', priceUSD: '$195 / night', perks: 'Sea-view balcony, king bed, lounge zone' },
  { name: 'Panorama Family Loft', priceLKR: 'Rs 78,000 / night', priceUSD: '$260 / night', perks: 'Two rooms, dining nook, city panorama' },
  { name: 'Executive Escape', priceLKR: 'Rs 96,000 / night', priceUSD: '$320 / night', perks: 'Private deck, soaking tub, premium minibar' },
];

function Rooms() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');

  const openModal = (message) => {
    setSelectedMessage(message);
    setModalOpen(true);
  };

  return (
    <section id="rooms" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Rooms</p>
          <h2>Handpicked Spaces For Every Kind Of Stay</h2>
        </div>
        <div className="room-grid">
          {rooms.map((room, index) => {
            const message = encodeURIComponent(`Hello Stadler Resort! I am interested in booking the "${room.name}" (${room.priceLKR}). Please let me know the availability.`);
            return (
              <article className="glass panel room-card" key={room.name}>
                <div className="shimmer-wrapper">
                  <div className={`room-visual v${index + 1}`} />
                </div>
                <div className="room-body">
                  <h3>{room.name}</h3>
                  <p>{room.perks}</p>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <strong style={{ display: 'block', fontSize: '1.4rem', color: 'var(--accent)', fontFamily: 'Playfair Display, serif' }}>
                      {room.priceLKR}
                    </strong>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.2rem' }}>
                      ({room.priceUSD})
                    </span>
                  </div>

                  <div className="booking-actions">
                    <button onClick={() => openModal(message)} className="btn btn-primary" style={{ width: '100%' }}>Book Now</button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} message={selectedMessage} />
    </section>
  );
}

export default Rooms;
