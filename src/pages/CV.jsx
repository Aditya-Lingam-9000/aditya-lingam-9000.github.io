import { useEffect, useState } from 'react';
import Icon from '../components/Icons';
import { ChipList, PageHeader } from '../components/ui';
import { contacts, education, pages, profile, researchInterests } from '../data/content';
import './CV.css';

const email = contacts.find((c) => c.icon === 'email');

// The inline viewer is desktop-only. Phones render embedded PDFs poorly (some even
// start a download), so the iframe is not mounted at all below this width.
const WIDE = '(min-width: 901px)';

function useWide() {
  const [wide, setWide] = useState(() => window.matchMedia(WIDE).matches);
  useEffect(() => {
    const mq = window.matchMedia(WIDE);
    const onChange = () => setWide(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return wide;
}

export default function CV() {
  const wide = useWide();
  return (
    <>
      <PageHeader {...pages.cv} />
      <div className="container">
        <div className="cv-layout">
          <aside className="card cv-panel" aria-labelledby="cv-panel-title">
            <div className="cv-panel__group cv-panel__id">
              <span className="eyebrow eyebrow--accent">At a glance</span>
              <h2 className="cv-panel__name" id="cv-panel-title">
                {profile.name}
              </h2>
              <p className="cv-panel__caption">
                {profile.captionTitle}
                <span>{profile.captionSubtitle}</span>
              </p>
            </div>

            <div className="cv-panel__group cv-panel__edu">
              <h3 className="eyebrow cv-panel__label">Education</h3>
              <ol className="cv-edu">
                {education.map((e) => (
                  <li key={e.title} className="cv-edu__item">
                    <span className="cv-edu__period tabular">{e.period}</span>
                    <span className="cv-edu__title">{e.title}</span>
                    <span className="cv-edu__details tabular">{e.details}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="cv-panel__group cv-panel__focus">
              <h3 className="eyebrow cv-panel__label">Focus</h3>
              <ChipList items={researchInterests} />
            </div>

            {email && (
              <div className="cv-panel__group cv-panel__contact">
                <h3 className="eyebrow cv-panel__label">Contact</h3>
                <a className="cv-panel__email" href={email.href}>
                  <Icon name="email" size={16} />
                  <span>{email.label}</span>
                </a>
              </div>
            )}

            <div className="cv-panel__group cv-panel__actions">
              <p className="cv-panel__note">Use the buttons below to view or download the PDF.</p>
              <a className="btn btn--primary" href={profile.cv} download>
                <Icon name="download" size={16} />
                Download PDF
              </a>
              <a className="btn btn--outline" href={profile.cv} target="_blank" rel="noopener noreferrer">
                <Icon name="external" size={16} />
                Open in new tab
              </a>
            </div>
          </aside>

          {wide && (
            <div className="cv-doc">
              <div className="frame cv-frame">
                <iframe src={profile.cv} title={`${pages.cv.title} of ${profile.name} (PDF)`} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
