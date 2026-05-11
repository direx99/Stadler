import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

function Offers() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup after a brief delay
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="offer-popup">
      <button className="offer-close" onClick={() => setIsVisible(false)} aria-label="Close offer">
        <FaTimes />
      </button>
      <div className="offer-popup-content">
        <span className="eyebrow" style={{ marginBottom: '0.5rem', display: 'block' }}>Exclusive Deal</span>
        <h4 style={{ margin: 0, fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: 'var(--text)' }}>Stay 3, Pay 2</h4>
        <p style={{ fontSize: '0.95rem', color: 'var(--muted)', margin: '0.5rem 0 1.2rem', lineHeight: 1.5 }}>
          Extend your coastal retreat. Book a 3-night stay and the final night is on us.
        </p>
        <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', width: '100%', display: 'block', textAlign: 'center' }} onClick={() => setIsVisible(false)}>
          Claim Offer
        </a>
      </div>
    </div>
  );
}

export default Offers;
