import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container page">
      <h1 className="page-title">Page not found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <p>
        <Link to="/">Back to the About page</Link>
      </p>
    </div>
  );
}
