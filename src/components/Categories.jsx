const categories = [
  { name: 'Rooms & Suites', img: 'c1' },
  { name: 'Dining & Bars', img: 'c2' },
  { name: 'Spa & Wellness', img: 'c3' },
  { name: 'Local Experiences', img: 'c4' },
];

function Categories() {
  return (
    <section id="categories" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Explore</p>
          <h2>Discover Our Categories</h2>
        </div>
        <div className="category-grid">
          {categories.map((cat) => (
            <a href={`#${cat.name.toLowerCase().split(' ')[0]}`} key={cat.name} className="category-card">
              <div className={`category-visual ${cat.img}`} />
              <div className="category-overlay">
                <h3>{cat.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
