// Shared building blocks. Styles live in src/styles/theme.css.
import { Link } from 'react-router-dom';
import Icon from './Icons';

// Anchor that opens off-site links in a new tab and keeps local files (cv.pdf) relative.
export function ExtLink({ href, children, className, ...rest }) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

// Internal routes (starting with "/") use the router; everything else is a plain anchor.
export function SmartLink({ to, children, ...rest }) {
  if (to.startsWith('/')) {
    return (
      <Link to={to} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <ExtLink href={to} {...rest}>
      {children}
    </ExtLink>
  );
}

// Renders inline segments from content.js: 'text' | { b: 'bold' } | { text, href }.
export function RichText({ parts }) {
  return parts.map((part, i) => {
    if (typeof part === 'string') return <span key={i}>{part}</span>;
    if (part.b) return <strong key={i}>{part.b}</strong>;
    return (
      <ExtLink key={i} href={part.href}>
        {part.text}
      </ExtLink>
    );
  });
}

// Inner-page header: "02 / Research" crumb, title, optional intro.
export function PageHeader({ num, label, title, intro }) {
  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header__crumb">
          <span className="eyebrow eyebrow--accent">{num}</span>
          <span className="eyebrow">/ {label}</span>
        </div>
        <h1 className="page-header__title">{title}</h1>
        {intro && <p className="page-header__intro">{intro}</p>}
      </div>
    </header>
  );
}

// Section with a sticky label rail. `title` renders as the visible h2 in the body.
export function Section({ num, label, title, id, children, className = '' }) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section className={`section ${className}`.trim()} id={id} aria-labelledby={headingId}>
      <div className="section__rail" aria-hidden="true">
        <span className="eyebrow eyebrow--accent tabular">{num}</span>
        <span className="eyebrow">{label}</span>
      </div>
      <div className="section__body">
        {title && (
          <h2 className="section__title" id={headingId}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

export function Badge({ kind = 'vision', children }) {
  return <span className={`badge badge--${kind}`}>{children}</span>;
}

// variant: 'primary' | 'outline' | 'ghost-ink'; size: undefined | 'sm'.
export function Button({ to, variant = 'outline', size, icon, arrow, children, ...rest }) {
  const className = `btn btn--${variant}${size ? ` btn--${size}` : ''}`;
  return (
    <SmartLink to={to} className={className} {...rest}>
      {icon && <Icon name={icon} size={size === 'sm' ? 13 : 16} />}
      {children}
      {arrow && <Icon name="arrowRight" size={16} />}
    </SmartLink>
  );
}

// Row of small outline buttons from [{ label, href }].
export function LinkButtons({ links }) {
  if (!links?.length) return null;
  return (
    <div className="btn-row">
      {links.map((l) => (
        <Button key={l.label} to={l.href} size="sm">
          {l.label}
        </Button>
      ))}
    </div>
  );
}

export function ArrowLink({ to, children, ...rest }) {
  return (
    <SmartLink to={to} className="link-arrow" {...rest}>
      {children}
      <Icon name="arrowRight" size={16} className="link-arrow__icon" />
    </SmartLink>
  );
}

export function ChipList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="chip-list">
      {items.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>
  );
}

// Author list with the site owner's name in bold.
export function Authors({ names, highlight = [] }) {
  return names.map((name, i) => (
    <span key={name}>
      {highlight.includes(name) ? <strong>{name}</strong> : name}
      {i < names.length - 1 ? ', ' : ''}
    </span>
  ));
}
