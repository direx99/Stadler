import { FaPhoneAlt, FaWhatsapp, FaTimes } from 'react-icons/fa';

function BookingModal({ isOpen, onClose, message }) {
  if (!isOpen) return null;

  const phoneNumber = '94771234567';

  return (
    <div className="modal-backdrop glass" onClick={onClose}>
      <div className="modal-content panel glass" onClick={(e) => e.stopPropagation()}>
        <button className="offer-close" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', fontFamily: 'Playfair Display, serif' }}>Complete Your Booking</h3>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>Choose your preferred method to contact us. We usually reply within minutes.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a 
            href={`https://wa.me/${phoneNumber}?text=${message}`} 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-primary" 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#25D366', borderColor: '#25D366', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)' }}
          >
            <FaWhatsapp style={{ fontSize: '1.2rem' }} /> WhatsApp
          </a>
          <a 
            href={`tel:+${phoneNumber}`} 
            className="btn btn-secondary" 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', borderColor: 'var(--accent)', color: 'var(--accent)' }}
          >
            <FaPhoneAlt style={{ fontSize: '1rem' }} /> Call Hotline
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
