import { useState, useEffect } from 'react';

const heroImages = [
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=2000&q=80'
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" aria-label="Hero section">
      {heroImages.map((img, index) => (
        <div 
          key={img}
          className={`hero-bg ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">Curated Coastal Retreat</p>
        <h1>Stay Where Luxury Feels Effortless</h1>
        <p className="hero-copy">
          Ocean-view suites, chef-led dining, and restorative wellness experiences in one dynamic
          destination.
        </p>
        <div className="hero-actions">
          <a href="#rooms" className="btn btn-primary">
            Explore Rooms
          </a>
          <a href="#contact" className="btn btn-secondary">
            Reserve Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
