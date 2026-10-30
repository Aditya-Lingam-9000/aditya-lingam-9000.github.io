import { Fragment } from 'react';
import Icon from '../components/Icons';
import CountUp from '../components/CountUp';
import { ArrowLink, Badge, Button, ChipList, ExtLink, RichText, Section } from '../components/ui';
import {
  bio,
  contacts,
  education,
  hero,
  languages,
  news,
  profile,
  researchInterests,
  selectedWork,
  skills,
  stats,
} from '../data/content';
import './Home.css';

// First name and surname are separate spans so they can stack on narrow screens.
const [firstName, ...restName] = profile.name.split(' ');
const surname = restName.join(' ');

// Contact rows in the profile card: plain text (location, university), the email address, and profile links.
function contactKind(c) {
  if (!c.href) return 'text';
  return c.icon === 'email' ? 'mail' : 'link';
}

function Intro() {
  return (
    <section className="home-top" aria-labelledby="home-name">
      <div className="container home-top__grid">
        {/* On narrow screens main and aside dissolve into the grid so the order can change. */}
        <div className="home-top__main">
          <p className="eyebrow home-top__eyebrow">
            {hero.eyebrow.map((item) => (
              <span key={item} className="home-top__eyebrow-item">
                {item}
              </span>
            ))}
          </p>

          <h1 className="home-top__name" id="home-name">
            <span>{firstName}</span>{' '}
            {surname && <span>{surname}</span>}
          </h1>

          <p className="home-top__statement">{hero.statement}</p>

          <section className="home-top__about" id="about" aria-labelledby="about-title">
            <div className="home-top__about-head">
              <span className="eyebrow eyebrow--accent tabular" aria-hidden="true">
                01
              </span>
              <h2 className="home-top__about-title" id="about-title">
                About
              </h2>
            </div>
            <div className="prose home-about">
              {bio.map((parts, i) => (
                <p key={i} className={i === 0 ? 'home-about__lead' : undefined}>
                  <RichText parts={parts} />
                </p>
              ))}
            </div>
          </section>

          <div className="btn-row home-top__actions">
            <Button to={hero.primary.to} variant="primary" arrow>
              {hero.primary.label}
            </Button>
            <Button to={hero.secondary.to} variant="outline" icon="download">
              {hero.secondary.label}
            </Button>
          </div>
        </div>

        <aside className="home-profile" aria-label="Profile">
          <div className="home-profile__head">
            <div className="frame home-profile__frame">
              <img
                className="home-profile__photo"
                src={profile.photo}
                alt={profile.photoAlt}
                width="380"
                height="475"
              />
            </div>
            <p className="home-profile__caption">
              <span className="home-profile__role">{profile.captionTitle}</span>
              <span className="home-profile__field">{profile.captionSubtitle}</span>
            </p>
          </div>

          <ul className="home-contacts">
            {contacts.map((c) => {
              const kind = contactKind(c);
              const inner = (
                <>
                  <Icon name={c.icon} size={16} className="home-contact__icon" />
                  <span className="home-contact__label">{c.label}</span>
                </>
              );
              return (
                <li key={c.icon} className={`home-contact home-contact--${kind}`}>
                  {c.href ? (
                    <ExtLink href={c.href} className="home-contact__row">
                      {inner}
                    </ExtLink>
                  ) : (
                    <span className="home-contact__row">{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="home-facts">
            <span className="eyebrow home-facts__head">Research interests</span>
            <ChipList items={researchInterests} />
          </div>
        </aside>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <div className="container home-stats-wrap">
      <div className="home-stats">
        <ul className="stat-row home-stats__row">
          {stats.map((s) => (
            <li key={s.label} className="stat home-stat">
              <span className="stat__value">
                <CountUp value={s.value} />
              </span>
              <span className="home-stat__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Latest() {
  return (
    <Section num="02" label="Latest" title="Latest" id="latest" className="home-section--first">
      <ol className="timeline home-news">
        {news.map((item, i) => (
          <li key={i} className={`timeline__item${i === 0 ? ' timeline__item--current' : ''}`}>
            <span className="timeline__date">{item.date}</span>
            <p className="timeline__body prose home-news__text">
              <RichText parts={item.parts} />
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function SelectedWork() {
  return (
    <Section num="03" label="Selected work" title="Selected work" id="work">
      <ul className="home-work">
        {selectedWork.map((w) => (
          <li key={w.title} className="card home-work__card">
            <div className="home-work__meta">
              <span className="eyebrow">{w.kind}</span>
              <Badge kind={w.badgeKind}>{w.badge}</Badge>
            </div>
            <h3 className="home-work__title">{w.title}</h3>
            <p className="home-work__summary">{w.summary}</p>
            <div className="home-work__link">
              <ArrowLink to={w.to} aria-label={`View details: ${w.title}`}>
                View details
              </ArrowLink>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Education() {
  return (
    <Section num="04" label="Education" title="Education" id="education">
      <ol className="timeline home-edu">
        {education.map((e, i) => (
          <li key={e.title} className={`timeline__item${i === 0 ? ' timeline__item--current' : ''}`}>
            <span className="timeline__date">{e.period}</span>
            <div className="timeline__body">
              <h3 className="home-edu__title">{e.title}</h3>
              <p className="home-edu__line">{e.institution}</p>
              <p className="home-edu__line home-edu__line--meta tabular">{e.details}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Skills() {
  return (
    <Section num="05" label="Skills" title="Skills" id="skills">
      <div className="home-skills">
        {skills.map((g) => (
          <div key={g.group} className="home-skills__group">
            <h3 className="eyebrow home-skills__head">{g.group}</h3>
            <ChipList items={g.items} />
          </div>
        ))}
      </div>
      {languages.length > 0 && (
        <p className="home-langs">
          <span className="eyebrow home-langs__head">Languages</span>
          <span className="home-langs__list">
            {languages.map((l, i) => (
              <Fragment key={l}>
                {i > 0 && (
                  <span className="home-langs__sep" aria-hidden="true">
                    ·
                  </span>
                )}
                <span>{l}</span>
              </Fragment>
            ))}
          </span>
        </p>
      )}
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Intro />
      <Stats />
      <div className="container">
        <Latest />
        <SelectedWork />
        <Education />
        <Skills />
      </div>
    </>
  );
}
