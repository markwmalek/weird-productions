import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Floating pill nav */}
      <header className="site-header">
        <nav className="pill-nav">

          {/* Logo */}
          <Link to="/" className="header-logo" onClick={() => setMenuOpen(false)}>
            Weird
          </Link>

          {/* Divider */}
          <span className="pill-divider" aria-hidden="true" />

          {/* Desktop links */}
          <div className="pill-links">
            <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              Portfolio
            </NavLink>
            <NavLink to="/work-with-weird" className="nav-link" onClick={() => setMenuOpen(false)}>
              Work With Us
            </NavLink>
            <a
              href="https://instagram.com/weirdproductions.art"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              DM us
            </a>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="top-bun" />
            <span className="patty" />
            <span className="bottom-bun" />
          </button>

        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="mobile-overlay">
          <NavLink to="/about" className="mobile-link" onClick={() => setMenuOpen(false)}>
            Portfolio
          </NavLink>
          <NavLink to="/work-with-weird" className="mobile-link" onClick={() => setMenuOpen(false)}>
            Work With Us
          </NavLink>
          <a
            href="https://instagram.com/weirdproductions.art"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            DM us
          </a>
        </div>
      )}
    </>
  );
}
