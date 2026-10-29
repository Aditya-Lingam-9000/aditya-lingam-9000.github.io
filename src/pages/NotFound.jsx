import { Button } from '../components/ui';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="nf" aria-labelledby="nf-title">
      <div className="container">
        <div className="nf__inner">
          <div className="nf__crumb">
            <span className="eyebrow eyebrow--accent tabular">404</span>
            <span className="eyebrow">/ Not found</span>
          </div>
          <h1 className="nf__title" id="nf-title">
            Page not found
          </h1>
          <p className="nf__text">The page you are looking for does not exist or may have moved.</p>
          <div className="btn-row">
            <Button to="/" variant="primary" arrow>
              Back to home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
