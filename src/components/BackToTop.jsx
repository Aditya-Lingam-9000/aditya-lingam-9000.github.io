import { useEffect, useState } from 'react';
import Icon from './Icons';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button type="button" className="back-to-top" onClick={() => window.scrollTo(0, 0)} aria-label="Back to top">
      <Icon name="arrowUp" size={18} />
    </button>
  );
}
