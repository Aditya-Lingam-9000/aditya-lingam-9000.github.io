import { useId, useState } from 'react';
import { challenges, pages, profile, publications, researchDomains } from '../data/content';
import { Authors, Badge, ChipList, ExtLink, LinkButtons, PageHeader, Section } from '../components/ui';
import './Research.css';

// Real figures taken from each repo's README (see public/images/research/).
// Items without an entry render text only.
const FIGURES = {
  'deep-breath-2026': {
    src: `${import.meta.env.BASE_URL}images/research/deep-breath-2026.png`,
    alt: 'Architecture pipeline of the multi-branch ultrasound analysis framework',
    caption: 'Architecture',
    width: 800,
    height: 510,
  },
};

// Paper figure shown inside the publication card (Figure 1 of arXiv 2606.15937), keyed by publication id.
const PUB_FIGURES = {
  'goose-m2f': {
    src: `${import.meta.env.BASE_URL}images/research/goose-m2f-architecture.jpg`,
    alt: 'GOOSE-M2F pipeline: Swin-Large backbone, pixel decoder, Feature Refinement Module, transformer decoder with 200 object queries, and an auxiliary per-pixel head',
    caption: 'Architecture',
    width: 1700,
    height: 755,
  },
};

const ALL = 'All';

// "September 2026 – October 2026" -> ["Sep – Oct", "2026"].
// Returns two display lines; the first is the month span, the second the year (or the end of a cross-year span).
function compactPeriod(period) {
  const [start, end] = period.split(/\s*[–-]\s*/);
  const parse = (s) => {
    const m = s?.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
    return m ? { month: m[1].slice(0, 3), year: m[2] } : null;
  };
  const a = parse(start);
  const b = parse(end);
  if (!a) return [period];
  if (!end) return [a.month, a.year];
  if (!b) return [`${a.month} ${a.year} –`, end.trim()];
  if (a.year !== b.year) return [`${a.month} ${a.year} –`, `${b.month} ${b.year}`];
  if (a.month === b.month) return [a.month, a.year];
  return [`${a.month} – ${b.month}`, a.year];
}

// Figure on a light plate (it keeps its own white ground in dark mode), with a link to the full-size file.
function Figure({ figure, className = '' }) {
  return (
    <figure className={`research-figure ${className}`.trim()}>
      <div className="research-figure__plate">
        <img src={figure.src} alt={figure.alt} width={figure.width} height={figure.height} loading="lazy" />
      </div>
      <figcaption className="research-figure__caption">
        <span className="eyebrow">{figure.caption}</span>
        <a href={figure.src} target="_blank" rel="noopener noreferrer" className="research-figure__open">
          Open full size
        </a>
      </figcaption>
    </figure>
  );
}

function PublicationCard({ pub }) {
  const figure = PUB_FIGURES[pub.id];
  return (
    <article className="card card--rule-left research-pub">
      <div className="research-pub__head">
        <div className="research-pub__kicker">
          <Badge kind={pub.badgeKind}>{pub.badge}</Badge>
          {pub.result && <span className="research-pub__result tabular">{pub.result}</span>}
        </div>
        <LinkButtons links={pub.links} />
      </div>
      <h3 className="research-pub__title">
        <ExtLink href={pub.url}>{pub.title}</ExtLink>
      </h3>
      <p className="research-pub__authors">
        <Authors names={pub.authors} highlight={profile.authorAliases} />
      </p>
      <p className="meta research-pub__venue">{pub.venue}</p>
      {figure && <Figure figure={figure} className="research-figure--pub" />}
    </article>
  );
}

function ChallengeItem({ item, current }) {
  const [when, year] = compactPeriod(item.period);
  const figure = FIGURES[item.id];
  return (
    <li className={`timeline__item${current ? ' timeline__item--current' : ''}`}>
      <div className="timeline__date research-date">
        <span className="research-date__span">{when}</span>
        {year && <span className="research-date__year">{year}</span>}
      </div>
      <article className="timeline__body card research-entry">
        <div className={`research-entry__inner${figure ? ' research-entry__inner--fig' : ''}`}>
          <div className="research-entry__head">
            <Badge kind={item.badgeKind}>{item.badge}</Badge>
            <span className="eyebrow">{item.domain}</span>
            {item.result && <span className="research-entry__result tabular">{item.result}</span>}
          </div>
          <h3 className="research-entry__title">{item.title}</h3>
          <p className="research-entry__challenge">{item.challenge}</p>
          <p className="research-entry__summary">{item.summary}</p>
          {figure && <Figure figure={figure} className="research-figure--side" />}
          <div className="research-entry__foot">
            <ChipList items={item.tags} />
            <LinkButtons links={item.links} />
          </div>
        </div>
      </article>
    </li>
  );
}

function ChallengeFilter({ active, onChange, count, labelId }) {
  const tally = (domain) =>
    domain === ALL ? challenges.length : challenges.filter((c) => c.domain === domain).length;
  return (
    <div className="research-toolbar">
      <span className="eyebrow research-toolbar__label" id={labelId}>
        Domain
      </span>
      <div className="research-toolbar__chips" role="group" aria-labelledby={labelId}>
        {[ALL, ...researchDomains].map((domain) => (
          <button
            key={domain}
            type="button"
            className="chip research-filter"
            aria-pressed={active === domain}
            onClick={() => onChange(domain)}
          >
            {domain}
            <span className="research-filter__count tabular" aria-hidden="true">
              {tally(domain)}
            </span>
          </button>
        ))}
      </div>
      <p className="meta tabular research-toolbar__count" role="status" aria-live="polite">
        {count} {count === 1 ? 'entry' : 'entries'}
        {active !== ALL && <span className="visually-hidden"> in {active}</span>}
      </p>
    </div>
  );
}

export default function Research() {
  const [domain, setDomain] = useState(ALL);
  const labelId = useId();
  const visible = domain === ALL ? challenges : challenges.filter((c) => c.domain === domain);

  return (
    <>
      <PageHeader {...pages.research} />
      <div className="container">
        <Section num="01" label="Publications" title="Publications" id="publications" className="research-section">
          <div className="research-pubs">
            {publications.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
        </Section>

        <Section num="02" label="Challenges" title="Research challenges" id="challenges" className="research-section">
          <ChallengeFilter active={domain} onChange={setDomain} count={visible.length} labelId={labelId} />
          {visible.length > 0 ? (
            <ol className="timeline research-timeline" aria-labelledby="challenges-title">
              {visible.map((item, i) => (
                <ChallengeItem key={item.id} item={item} current={i === 0} />
              ))}
            </ol>
          ) : (
            <p className="meta">No entries in this domain yet.</p>
          )}
        </Section>
      </div>
    </>
  );
}
