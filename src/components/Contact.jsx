function Contact() {
  const phoneNumber = '94771234567';
  const generalMessage = encodeURIComponent("Hello Stadler Resort! I would like to inquire about a stay.");

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Location & Contact</p>
          <h2>Find Us & Get In Touch</h2>
        </div>

        <div className="contact-grid">
          <article className="glass panel contact-meta">
            <h3>Plan Your Next Stay</h3>
            <p>Our concierge team is available 24/7. Choose your preferred way to book or inquire.</p>
            <ul>
              <li>+94 77 123 4567</li>
              <li>hello@stadlerresort.com</li>
              <li>123 Coastal Drive, Colombo</li>
            </ul>

            <div className="booking-actions" style={{ marginTop: '2rem' }}>
              <a href={`https://wa.me/${phoneNumber}?text=${generalMessage}`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                Contact Us
              </a>
              <a href={`tel:+${phoneNumber}`} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                Call Us
              </a>
            </div>
          </article>

          <div className="glass panel map-container" style={{ padding: '0', overflow: 'hidden' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585973956!2d79.773803!3d6.9218386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
