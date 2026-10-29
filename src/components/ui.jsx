// Small shared building blocks. Styles live in src/styles/theme.css.

export function isExternal(href) {
  return /^(https?:|mailto:)/.test(href);
}

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

// variant: 'rule' (slate heading on a line) | 'underline' (navy heading, accent bottom border).
export function SectionHeading({ children, variant = 'rule', as: Tag = 'h2', id }) {
  return (
    <Tag id={id} className={variant === 'underline' ? 'underline-heading' : 'rule-heading'}>
      {children}
    </Tag>
  );
}

export function Badge({ kind = 'vision', children }) {
  return <span className={`badge badge--${kind}`}>{children}</span>;
}

export function LinkButton({ href, children }) {
  return (
    <ExtLink href={href} className="btn-outline">
      {children}
    </ExtLink>
  );
}

export function ButtonRow({ links }) {
  if (!links?.length) return null;
  return (
    <div className="btn-row">
      {links.map((l) => (
        <LinkButton key={l.label} href={l.href}>
          {l.label}
        </LinkButton>
      ))}
    </div>
  );
}

export function TagList({ tags }) {
  if (!tags?.length) return null;
  return (
    <ul className="tag-list">
      {tags.map((t) => (
        <li key={t} className="tag">
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
