import { useEffect } from 'react';

// Elements that fade up individually as they scroll into view.
const SINGLES = [
  '.page-header__crumb',
  '.page-header__title',
  '.page-header__intro',
  '.section__rail',
  '.section__title',
  '.home-about > *',
  '.home-facts',
  '.home-langs',
  '.research-pub',
  '.research-toolbar',
  '.cv-panel',
  '.cv-frame',
  '.nf__inner > *',
  '.footer__cta',
  '.footer__bottom',
];

// Containers whose direct children fade up one after another. `base` delays the whole group.
const GROUPS = [
  { selector: '.home-stats__row', base: 450 },
  { selector: '.timeline' },
  { selector: '.home-work' },
  { selector: '.home-skills' },
  { selector: '.ach-ranks' },
  { selector: '.ach-hacks' },
  { selector: '.footer__grid' },
];

const STEP = 90;
const MAX_STAGGER = 540;
const DURATION = 800;

function mark(el, delay, observer) {
  if (el.dataset.revealDone !== undefined) return;
  if (el.dataset.reveal === undefined) {
    el.dataset.reveal = '';
    el.style.setProperty('--reveal-delay', `${delay}ms`);
  }
  // Re-observing is a no-op for the same observer, and rescues elements left pending by a previous route.
  observer.observe(el);
}

function scan(root, observer) {
  SINGLES.forEach((selector) => {
    root.querySelectorAll(selector).forEach((el) => mark(el, 0, observer));
  });

  GROUPS.forEach(({ selector, base = 0 }) => {
    root.querySelectorAll(selector).forEach((group) => {
      if (group.matches('.timeline')) group.classList.add('timeline--draw');
      Array.from(group.children).forEach((child, i) => {
        mark(child, base + Math.min(i * STEP, MAX_STAGGER), observer);
      });
    });
  });

  root.querySelectorAll('.timeline--draw').forEach((line) => observer.observe(line));
}

// Scroll-reveal for the whole app. Hidden states only apply under html.motion,
// so content stays visible if JS fails or the user prefers reduced motion.
export default function useReveal(routeKey) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!('IntersectionObserver' in window)) return undefined;

    const html = document.documentElement;
    html.classList.add('motion');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          observer.unobserve(el);

          if (el.classList.contains('timeline--draw')) {
            el.classList.add('is-drawn');
            return;
          }

          el.classList.add('is-revealed');
          // Hand the element back to its own CSS (hover transitions etc.) once the reveal has played.
          const delay = parseFloat(el.style.getPropertyValue('--reveal-delay')) || 0;
          window.setTimeout(() => {
            el.classList.remove('is-revealed');
            delete el.dataset.reveal;
            el.dataset.revealDone = '';
            el.style.removeProperty('--reveal-delay');
          }, delay + DURATION + 50);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    const roots = [document.getElementById('main'), document.querySelector('.footer')].filter(Boolean);
    roots.forEach((root) => scan(root, observer));

    // Content that mounts later (route changes, research filter) gets picked up too.
    let pending = 0;
    const mutations = new MutationObserver(() => {
      cancelAnimationFrame(pending);
      pending = requestAnimationFrame(() => roots.forEach((root) => scan(root, observer)));
    });
    roots.forEach((root) => mutations.observe(root, { childList: true, subtree: true }));

    return () => {
      observer.disconnect();
      mutations.disconnect();
      cancelAnimationFrame(pending);
    };
  }, [routeKey]);
}
