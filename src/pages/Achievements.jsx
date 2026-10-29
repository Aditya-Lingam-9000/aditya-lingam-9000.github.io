import CountUp from '../components/CountUp';
import { ArrowLink, Badge, ChipList, ExtLink, PageHeader, Section } from '../components/ui';
import { hackathons, pages, rankings } from '../data/content';
import './Achievements.css';

function RankTile({ item, lead }) {
  const sub = item.context || item.metric;
  return (
    <li className={`ach-rank${lead ? ' ach-rank--lead' : ''}`}>
      <p className="ach-rank__ordinal tabular">
        <CountUp value={item.rank} duration={1100} />
        <span className="ach-rank__suffix">{item.suffix}</span>
      </p>
      <div className="ach-rank__body">
        <div className="ach-rank__head">
          <h3 className="ach-rank__name">
            <ExtLink href={item.href}>{item.name}</ExtLink>
          </h3>
          <Badge kind={item.badgeKind}>{item.event}</Badge>
        </div>
        <p className="ach-rank__note">{item.note}</p>
      </div>
      {sub && <p className="ach-rank__context tabular">{sub}</p>}
    </li>
  );
}

function HackathonPanel({ item }) {
  return (
    <article className="card ach-hack">
      <div className="ach-hack__top">
        <Badge kind="award">{item.award}</Badge>
        <span className="eyebrow tabular">{item.date}</span>
      </div>
      <p className="eyebrow ach-hack__meta">{item.event}</p>
      <h3 className="ach-hack__title">{item.title}</h3>
      <p className="ach-hack__summary">{item.summary}</p>
      <ChipList items={item.tags} />
      <div className="ach-hack__link">
        <ArrowLink to={item.link.href}>{item.link.label}</ArrowLink>
      </div>
    </article>
  );
}

export default function Achievements() {
  return (
    <>
      <PageHeader {...pages.achievements} />
      <div className="container">
        <Section num="01" label="Rankings" title="Challenge rankings" id="rankings">
          <ol className="ach-ranks">
            {rankings.map((r, i) => (
              <RankTile key={r.href} item={r} lead={i === 0} />
            ))}
          </ol>
        </Section>

        <Section num="02" label="Hackathons" title="Hackathons" id="hackathons">
          <div className="ach-hacks">
            {hackathons.map((h) => (
              <HackathonPanel key={h.id} item={h} />
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
