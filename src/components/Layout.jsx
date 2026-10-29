import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { navLinks, profile } from '../data/content';
import './Layout.css';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const page = navLinks.find((l) => l.to === pathname);
    document.title = page && page.to !== '/' ? `${page.label} | ${profile.name}` : profile.name;
  }, [pathname]);

  return (
    <>
      {/* A plain #main href would be read as a route by HashRouter, so focus main directly. */}
      <button type="button" className="skip-link" onClick={() => document.getElementById('main')?.focus()}>
        Skip to content
      </button>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
