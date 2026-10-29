import { rankings, hackathons } from '../data/content';
import { Badge, ExtLink, SectionHeading, TagList } from '../components/ui';
import './Achievements.css';

export default function Achievements() {
  return (
    <div className="container page">
      <h1 className="page-title">Achievements</h1>

      <section aria-labelledby="ach-rankings">
        <SectionHeading id="ach-rankings">Challenge Rankings</SectionHeading>
        <ul className="ach-rank-list">
          {rankings.map((r) => (
            <li key={r.href} className="ach-rank">
              <strong className="ach-rank-title">
                {r.place} – {r.event}
              </strong>
              <span className="ach-rank-detail">
                <em>
                  <ExtLink href={r.href}>{r.name}</ExtLink>
                </em>
                , {r.note}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="ach-hackathons">
        <SectionHeading id="ach-hackathons">Hackathons</SectionHeading>
        <div className="ach-rows">
          {hackathons.map((h) => (
            <article key={h.id} className="ach-row">
              <div className="ach-row-meta">
                <Badge kind="award">{h.award}</Badge>
                <span className="ach-row-event">
                  {h.event} · {h.date}
                </span>
              </div>
              <h3 className="ach-row-title">{h.title}</h3>
              <p className="ach-row-summary">{h.summary}</p>
              <TagList tags={h.tags} />
              {h.link && (
                <ExtLink href={h.link.href} className="ach-row-link">
                  {h.link.label} →
                </ExtLink>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
