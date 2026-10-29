import Icon from './Icons';
import { ExtLink } from './ui';
import { profile, socials } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <ul className="footer__social">
            {socials.map((s) => (
              <li key={s.label}>
                <ExtLink href={s.href} aria-label={s.label} title={s.label}>
                  <Icon name={s.icon} size={28} />
                </ExtLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
