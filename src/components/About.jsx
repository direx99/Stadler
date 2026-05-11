const stats = [
  { value: '4.9/5', label: 'Guest Rating' },
  { value: '24/7', label: 'Concierge' },
  { value: '12+', label: 'Premium Experiences' },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container split-grid">
        <article className="glass panel about-copy">
          <p className="eyebrow">About Stadler</p>
          <h2>Designed For Rest. Built For Moments.</h2>
          <p>
            Stadler Family Resort blends modern hospitality with nature-driven calm. Every stay is
            crafted around comfort, precision service, and personalized guest journeys.
          </p>
          <div className="stat-row">
            {stats.map((item) => (
              <div key={item.label} className="stat-block">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </article>

        <div className="about-grid">
          <div className="glass panel visual-card tall" />
          <div className="glass panel visual-card" />
          <div className="glass panel visual-card" />
        </div>
      </div>
    </section>
  );
}

export default About;
