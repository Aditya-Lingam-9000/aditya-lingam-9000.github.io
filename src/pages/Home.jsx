import Icon from '../components/Icons';
import { ExtLink, RichText, SectionHeading } from '../components/ui';
import {
  profile,
  contacts,
  bio,
  researchInterests,
  news,
  education,
  skills,
  languages,
} from '../data/content';
import './Home.css';

function ProfileColumn() {
  return (
    <aside className="home-profile" aria-label="Profile and contact">
      <img
        className="home-photo"
        src={profile.photo}
        alt={profile.photoAlt}
        width="270"
        height="270"
      />
      <p className="home-caption">
        <span className="home-caption-title">{profile.captionTitle}</span>
        <span className="home-caption-subtitle">{profile.captionSubtitle}</span>
      </p>
      <ul className="home-contacts">
        {contacts.map((c) => (
          <li key={c.icon} className="home-contact">
            <span className="home-contact-icon">
              <Icon name={c.icon} size={15} />
            </span>
            <span className="home-contact-label">
              {c.href ? <ExtLink href={c.href}>{c.label}</ExtLink> : c.label}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default function Home() {
  return (
    <div className="container page">
      <h1 className="visually-hidden">{profile.name}</h1>
      <div className="home-grid">
        <ProfileColumn />

        <div className="home-main">
          <section className="home-bio" aria-label="About">
            {bio.map((parts, i) => (
              <p key={i}>
                <RichText parts={parts} />
              </p>
            ))}
          </section>

          <section aria-labelledby="home-interests">
            <SectionHeading id="home-interests">Research Interests</SectionHeading>
            <ul className="home-inline-list">
              {researchInterests.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="home-news">
            <SectionHeading id="home-news">News</SectionHeading>
            <div className="info-box home-news" tabIndex={0} aria-label="News items">
              <ul>
                {news.map((item, i) => (
                  <li key={i}>
                    <strong>[{item.date}]</strong> <RichText parts={item.parts} />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="home-education">
            <SectionHeading id="home-education">Education</SectionHeading>
            <ul className="plain-list home-education">
              {education.map((e) => (
                <li key={e.title}>
                  <div className="home-edu-head">
                    <span className="home-edu-title">{e.title}</span>
                    <span className="home-edu-period">{e.period}</span>
                  </div>
                  <div className="meta">{e.institution}</div>
                  {e.details && <div className="meta">{e.details}</div>}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="home-skills">
            <SectionHeading id="home-skills">Technical Skills</SectionHeading>
            <ul className="home-skills">
              {skills.map((s) => (
                <li key={s.group}>
                  <strong>{s.group}:</strong> {s.items.join(', ')}
                </li>
              ))}
              <li>
                <strong>Languages:</strong> {languages.join(', ')}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
