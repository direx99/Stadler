import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  const phoneNumber = '94771234567';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const mapUrl = "https://maps.google.com/?q=Stadler+Resort+Colombo";
  const facebookUrl = "https://facebook.com";
  const instagramUrl = "https://instagram.com";
  const tiktokUrl = "https://tiktok.com";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h2 className="footer-brand">Stadler Resort</h2>
            <p className="footer-desc">A curated coastal retreat offering ocean-view suites, chef-led dining, and restorative wellness experiences for the modern traveler.</p>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <div className="footer-links-vertical">
              <a href="#about">Our Story</a>
              <a href="#rooms">Accommodations</a>
              <a href="#packages">Signature Packages</a>
              <a href="#contact">Get in Touch</a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Connect With Us</h3>
            <div className="social-links" style={{ display: 'flex', gap: '1rem', fontSize: '1.2rem' }}>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-icon">
                <FaWhatsapp />
              </a>
              <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon">
                <FaFacebookF />
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon">
                <FaInstagram />
              </a>
              <a href={tiktokUrl} target="_blank" rel="noreferrer" aria-label="TikTok" className="social-icon">
                <FaTiktok />
              </a>
              <a href={mapUrl} target="_blank" rel="noreferrer" aria-label="Google Maps" className="social-icon">
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Stadler Family Resort. All rights reserved.</p>
          <p className="agency-credit">
            Digital Experience by <a href="https://route94.tech" target="_blank" rel="noreferrer">Route94.tech</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
