import { FaBed, FaSpa, FaUtensils, FaWater, FaShuttleVan, FaWifi } from 'react-icons/fa';

const services = [
  { icon: FaBed, title: 'Signature Suites', detail: 'Private terraces, smart controls, premium linen.' },
  { icon: FaUtensils, title: 'Fine Dining', detail: 'Seasonal tasting menus and oceanfront breakfast.' },
  { icon: FaSpa, title: 'Wellness Lounge', detail: 'Spa rituals, thermal circuits, recovery sessions.' },
  { icon: FaWater, title: 'Infinity Pool', detail: 'Sunset deck, cocktails, and adults-only zone.' },
  { icon: FaShuttleVan, title: 'Airport Transfer', detail: 'On-time pickups with tracked chauffeur fleet.' },
  { icon: FaWifi, title: 'Fast Wi-Fi', detail: 'Low-latency internet in every room and public zone.' },
];

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Services</p>
          <h2>Everything You Need. Nothing You Don’t.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="glass panel service-card" key={service.title}>
                <Icon className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
