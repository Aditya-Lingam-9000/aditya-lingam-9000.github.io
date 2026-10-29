import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icons';
import { ExtLink } from './ui';
import { contactCta, navLinks, profile, socials } from '../data/content';

// mailto: does nothing on devices without a configured mail app, so the main action opens Gmail's
// compose window instead, and "Copy email" works everywhere.
const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactCta.email)}`;

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    // Fallback for insecure contexts or blocked clipboard access.
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (err) {
      ok = false;
    }
    document.body.removeChild(field);
    return ok;
  }
}

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onCopy = async () => {
    if (await copyText(contactCta.email)) {
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <div>
            <p className="footer__cta-title">{contactCta.title}</p>
            <p className="footer__cta-text">{contactCta.text}</p>
            <p className="footer__cta-email">
              <a href={`mailto:${contactCta.email}`}>{contactCta.email}</a>
            </p>
          </div>
          <div className="btn-row">
            <a className="btn btn--primary" href={composeUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="email" size={16} />
              Get in touch
            </a>
            <button type="button" className="btn btn--ghost-ink" onClick={onCopy}>
              <Icon name={copied ? 'check' : 'copy'} size={16} />
              {copied ? 'Copied' : 'Copy email'}
            </button>
            <span className="visually-hidden" role="status">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </div>
        </div>

        <div className="footer__grid">
          <div>
            <span className="footer__head">Identity</span>
            <p className="footer__name">{profile.name}</p>
            <p className="footer__line">
              {profile.captionTitle}, {profile.captionSubtitle}
            </p>
          </div>

          <div>
            <span className="footer__head">Pages</span>
            <ul className="footer__list">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="footer__head">Elsewhere</span>
            <ul className="footer__list">
              {socials.map((s) => (
                <li key={s.label}>
                  <ExtLink href={s.href}>
                    <Icon name={s.icon} size={15} />
                    {s.label}
                  </ExtLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
          <button
            type="button"
            className="footer__top"
            onClick={() => {
              const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
              window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
            }}
          >
            Back to top
            <Icon name="arrowUp" size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
