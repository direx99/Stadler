const feedbacks = [
  { name: 'Sarah Jenkins', role: 'Verified Guest', text: 'Absolutely breathtaking. The attention to detail and level of service made our anniversary unforgettable.' },
  { name: 'Michael Chen', role: 'Verified Guest', text: 'The dining experiences were spectacular. We loved every moment by the infinity pool. Highly recommended.' },
  { name: 'Emma & David', role: 'Verified Guests', text: 'A perfect sanctuary. The spa treatments were world-class and our suite had the most stunning sunset views.' },
];

function Testimonials() {
  return (
    <section id="feedbacks" className="section bg-light">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Guest Voices</p>
          <h2>Recent Feedbacks</h2>
        </div>
        <div className="feedback-grid">
          {feedbacks.map((fb, idx) => (
            <article className="glass panel feedback-card" key={idx}>
              <div className="stars">★★★★★</div>
              <p className="feedback-text">"{fb.text}"</p>
              <div className="feedback-author">
                <strong>{fb.name}</strong>
                <span>{fb.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
