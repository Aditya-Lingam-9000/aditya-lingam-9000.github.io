import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Shared theme first so page stylesheets (imported by App's pages) can override it.
import './styles/theme.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
