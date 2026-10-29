import { publications, challenges, profile, researchInterests } from '../data/content';
import { Authors, Badge, ButtonRow, ExtLink, SectionHeading, TagList } from '../components/ui';
import './Research.css';

// Real figures taken from each repo's README (see public/images/research/).
// Items without an entry get a quiet typographic placeholder instead.
const THUMBNAILS = {
  'deep-breath-2026': {
    src: 'images/research/deep-breath-2026.png',
    alt: 'Architecture pipeline of the multi-branch ultrasound analysis framework',
  },
};

function joinNaturally(items) {
  const lower = items.map((s) => s.toLowerCase());
  if (lower.length <= 1) return lower.join('');
  return `${lower.slice(0, -1).join(', ')} and ${lower[lower.length - 1]}`;
}

function Thumb({ id, label, className }) {
  const thumb = THUMBNAILS[id];
  if (thumb) {
    return (
      <div className={className}>
        <img src={thumb.src} alt={thumb.alt} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={`${className} research-placeholder`} aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}

function PublicationCard({ pub }) {
  return (
    <article className="entry-card research-pub">
      <Thumb id={pub.id} label={pub.badge} className="research-pub-thumb" />
      <div className="research-pub-body">
        <Badge kind={pub.badgeKind}>{pub.badge}</Badge>
        <h3 className="research-pub-title">
          <ExtLink href={pub.url}>{pub.title}</ExtLink>
        </h3>
        <p className="research-pub-authors">
          <Authors names={pub.authors} highlight={profile.authorAliases} />
        </p>
        <p className="research-pub-venue">{pub.venue}</p>
        {pub.result && <p className="research-result">{pub.result}</p>}
        <ButtonRow links={pub.links} />
      </div>
    </article>
  );
}

function ChallengeRow({ item }) {
  const code = item.links?.find((l) => l.label === 'Code');
  return (
    <li className="research-row">
      <Thumb id={item.id} label={item.badge} className="research-row-media" />
      <div className="research-row-body">
        <div className="research-row-meta">
          <Badge kind={item.badgeKind}>{item.badge}</Badge>
          <span className="research-row-period">{item.period}</span>
        </div>
        <h3 className="research-row-title">
          {code ? <ExtLink href={code.href}>{item.title}</ExtLink> : item.title}
        </h3>
        <p className="research-row-challenge">{item.challenge}</p>
        {item.result && <p className="research-result">{item.result}</p>}
        <p className="research-row-summary">{item.summary}</p>
        <TagList tags={item.tags} />
        <ButtonRow links={item.links} />
      </div>
    </li>
  );
}

export default function Research() {
  return (
    <div className="container page">
      <h1 className="page-title">Research</h1>
      <p className="page-intro">My research focuses on {joinNaturally(researchInterests)}.</p>

      <section aria-labelledby="research-publications">
        <SectionHeading id="research-publications">Publications</SectionHeading>
        {publications.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}
      </section>

      <section aria-labelledby="research-challenges">
        <SectionHeading id="research-challenges">Research Challenges</SectionHeading>
        <ul className="research-rows">
          {challenges.map((item) => (
            <ChallengeRow key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </div>
  );
}
