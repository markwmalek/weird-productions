import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-inner">

        {/* Logo — "Weird" in WaffleCone */}
        <Link to="/" className="header-logo" onClick={() => setMenuOpen(false)}>
          Weird
        </Link>

        {/* Desktop nav */}
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
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
        </nav>

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

      </div>
    </header>
  );
}
