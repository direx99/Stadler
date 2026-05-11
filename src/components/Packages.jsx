import { useState } from 'react';
import BookingModal from './BookingModal';

const packages = [
  { title: 'Romantic Coastal Escape', priceLKR: 'From Rs 255,000', priceUSD: 'From $850', detail: 'Includes 2 nights in a sea-view suite, couples massage, and a private dinner.' },
  { title: 'Family Fun Retreat', priceLKR: 'From Rs 360,000', priceUSD: 'From $1,200', detail: '3 nights in our Family Loft, kids club access, and a guided local tour.' },
  { title: 'Wellness Rejuvenation', priceLKR: 'From Rs 285,000', priceUSD: 'From $950', detail: '2 nights stay, daily thermal circuits, 2 spa treatments, and healthy dining.' },
];

function Packages() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');

  const openModal = (message) => {
    setSelectedMessage(message);
    setModalOpen(true);
  };

  return (
    <section id="packages" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Curated Stays</p>
          <h2>Signature Packages</h2>
        </div>
        <div className="package-grid">
          {packages.map((pkg) => {
            const message = encodeURIComponent(`Hello Stadler Resort! I would like to book the "${pkg.title}" package (${pkg.priceLKR}). Please let me know the availability.`);
            return (
              <article className="glass panel package-card" key={pkg.title}>
                <h3>{pkg.title}</h3>
                
                <div style={{ margin: '1rem 0' }}>
                  <p className="package-price" style={{ margin: '0' }}>{pkg.priceLKR}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginTop: '0.3rem' }}>({pkg.priceUSD})</p>
                </div>

                <p className="package-detail">{pkg.detail}</p>
                <div className="booking-actions">
                  <button onClick={() => openModal(message)} className="btn btn-primary" style={{ width: '100%' }}>Book Now</button>
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

export default Packages;
