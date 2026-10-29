import { useEffect, useRef, useState } from 'react';
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

  // Crossfade every colour for a moment while the theme flips (see motion.css).
  const timer = useRef(0);
  const toggle = () => {
    const html = document.documentElement;
    html.classList.add('theme-transition');
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => html.classList.remove('theme-transition'), 500);
    setDark((d) => !d);
  };

  return [dark, toggle];
}

function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      type="button"
      className="header__theme"
      onClick={onToggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {/* Keyed so the icon re-mounts and plays its spin-in on every switch. */}
      <Icon key={dark ? 'sun' : 'moon'} name={dark ? 'sun' : 'moon'} size={16} />
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, toggleTheme] = useTheme();
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__brand" aria-label={`${profile.name}, home`}>
          <span className="header__name">{profile.name}</span>
        </Link>

        <nav className="header__nav" aria-label="Main">
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className="header__link">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <ThemeToggle dark={dark} onToggle={toggleTheme} />
          <button
            type="button"
            className="header__menu-btn"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
            <Icon key={open ? 'close' : 'menu'} name={open ? 'close' : 'menu'} size={18} />
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className={`header__panel${open ? ' is-open' : ''}`} aria-label="Mobile">
        <div className="header__panel-inner">
          <ul className="container">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className="header__panel-link">
                  <span className="eyebrow eyebrow--accent tabular">{link.num}</span>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
