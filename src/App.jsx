import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import Achievements from './pages/Achievements';
import CV from './pages/CV';
import NotFound from './pages/NotFound';

// HashRouter keeps deep links working on static hosts such as GitHub Pages.
export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="cv" element={<CV />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
