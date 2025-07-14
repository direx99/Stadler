import React, { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0.5rem 1rem',
      }}>
        <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: 1 }}>Stadler</div>
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(m => !m)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: 28,
            cursor: 'pointer',
          }}
          className="header-hamburger"
        >
          ☰
        </button>
        <ul className="header-nav" style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}>
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} style={{ color: 'white', textDecoration: 'none', fontWeight: 500, fontSize: '1rem' }}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile menu */}
      <style>{`
        @media (max-width: 768px) {
          .header-nav {
            display: ${menuOpen ? 'flex' : 'none'};
            flex-direction: column;
            gap: 1.5rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            position: absolute;
            top: 60px;
            left: 0;
            width: 100vw;
            padding: 1.5rem 0;
            z-index: 999;
            align-items: center;
          }
          .header-hamburger {
            display: block !important;
          }
        }
        @media (max-width: 400px) {
          nav {
            padding: 0.5rem 0.3rem !important;
          }
          .header-nav {
            gap: 1rem;
            padding: 1rem 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header; 