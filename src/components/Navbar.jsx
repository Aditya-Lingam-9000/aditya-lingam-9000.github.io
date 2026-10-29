import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icons';
import { navLinks, profile } from '../data/content';

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }, [dark]);

  return [dark, setDark];
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useTheme();
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <nav className="navbar" aria-label="Main">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" title={profile.name}>
          {profile.name}
        </Link>

        <div className="navbar__controls">
          <button
            type="button"
            className="theme-toggle theme-toggle--mobile"
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Icon name={dark ? 'sun' : 'moon'} size={14} />
          </button>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen(!open)}
          >
            <span className="visually-hidden">Toggle navigation</span>
            <Icon name="menu" size={20} />
          </button>
        </div>

        <div id="primary-nav" className={`navbar__menu${open ? ' is-open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className="navbar__link">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="theme-toggle theme-toggle--desktop"
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Icon name={dark ? 'sun' : 'moon'} size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}
