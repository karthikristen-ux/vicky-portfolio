import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Certificates } from './pages/Certificates';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navItems = [
    { path: '/', label: 'Timeline' },
    { path: '/projects', label: 'Projects' },
    { path: '/certificates', label: 'Credentials' },
  ];

  return (
    <>
      <nav className={location.pathname !== '/' ? 'nav-collapsed' : ''} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, transition: 'all 0.3s ease', background: scrolled ? 'rgba(5,5,5,0.85)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent' }}>
        <Link to="/" className="logo" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', fontWeight: 700, fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '2.5rem' }}>
          V
        </Link>

        {/* Desktop nav links inside pill */}
        <div className="glass-pill-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Empty div for flex-between spacing symmetry */}
        <div style={{ width: '150px' }}></div>

        {/* Hamburger button (mobile only) */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile slide-out menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="mobile-menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
};

export default App;
