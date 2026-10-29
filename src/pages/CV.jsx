import { profile } from '../data/content';
import { ExtLink } from '../components/ui';
import Icon from '../components/Icons';
import './CV.css';

export default function CV() {
  return (
    <div className="container page">
      <h1 className="page-title">Curriculum Vitae</h1>
      <p className="page-intro">The full CV is shown below and can also be downloaded as a PDF.</p>

      <div className="btn-row cv-actions">
        <a href={profile.cv} download className="btn-outline cv-btn">
          <Icon name="download" size={12} />
          Download PDF
        </a>
        <ExtLink href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-outline cv-btn">
          <Icon name="file" size={12} />
          Open in new tab
        </ExtLink>
      </div>

      <div className="cv-embed">
        <iframe src={profile.cv} title={`Curriculum Vitae of ${profile.name} (PDF)`} className="cv-frame" />
      </div>

      <p className="cv-mobile-note">
        The PDF preview is not shown on small screens. Use the buttons above to open or download the CV.
      </p>
    </div>
  );
}
