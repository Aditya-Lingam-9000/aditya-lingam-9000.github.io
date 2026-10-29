# Design Guidelines (v2 - Editorial Minimal)

This file covers design only, not content. Stack: React + Vite.
v1 mirrored the reference site (https://nikhil-rao20.github.io/). v2 keeps its **palette, typeface and restraint** but uses an original, editorial layout system. Content lives in `src/data/content.js`.

## 1. Character

- Professional, minimal, confident. It should read like a well-typeset research monograph or a design-studio CV.
- The impact comes from **scale contrast** (an oversized name, large numerals), **strict grids**, **hairlines** and **generous white space**, never from effects.
- No emojis, gradients, glow, blur, glassmorphism, 3D, illustrations or parallax.
- Motion is smooth and quiet. It never changes layout, only how elements arrive and respond (see section 11).

## 2. Color (tokens in `src/styles/theme.css`)

Same palette as v1, plus one new near-black "ink" surface used for full-bleed bands.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--bg` | `#ffffff` | `#0a0a0a` | page |
| `--bg-alt` | `#f6f7f9` | `#0f1115` | alternate section band |
| `--ink` | `#161616` | `#111827` | hero band, footer band |
| `--ink-text` | `#ffffff` | `#f3f4f6` | text on ink |
| `--ink-muted` | `#a3a9b2` | `#9ca3af` | secondary text on ink |
| `--ink-line` | `#2e2e2e` | `#1f2937` | hairlines on ink |
| `--navy` | `#20364c` | `#f3f4f6` | headings, numerals |
| `--slate` | `#708090` | `#9ca3af` | labels, eyebrows |
| `--text` | `#333333` | `#d1d5db` | body |
| `--text-secondary` | `#555555` | `#c4c9d0` | summaries |
| `--text-muted` | `#808080` | `#9ca3af` | meta |
| `--accent` | `#1585cf` | `#3b9ee0` | links, active marks, primary button |
| `--line` | `#e4e7eb` | `#1f2937` | hairlines, card borders |
| `--line-strong` | `#cfd5dc` | `#374151` | emphasised rules |

Rules: one accent colour. Badges keep their muted solid fills (green, navy, wine, purple, ochre). Never hard-code colours in page CSS; use the tokens.

## 3. Typography

- **Montserrat** only (400, 500, 600, 700). Use `font-variant-numeric: tabular-nums` for dates and numerals.
- Scale:
  - Display (home name): about 46px on desktop (`clamp(30px, 4vw, 46px)`), weight 600, letter-spacing `-0.02em`, line-height 1.02.
  - Page title: `clamp(28px, 4vw, 36px)`, weight 600, letter-spacing `-0.015em`.
  - Section title: 22px, weight 600.
  - Card title: 18px, weight 600.
  - Body: 16px, line-height 1.7.
  - Small: 14px. Meta: 13px.
- **Eyebrow / label**: 12px, weight 600, uppercase, letter-spacing `0.14em`, slate. It is used for section numbers ("01"), category labels and figure captions.
- **Numerals** (stats, ranks): weight 600, navy, tight letter spacing. Large numerals are the main visual device.
- Line length: body text never wider than about 720px.

## 4. Layout system

- Container: max-width **1120px**, side padding 24px (16px under 480px).
- **Section rail grid**: on desktop each section is a 2-column grid, a 220px label rail and a content column, with a 48px gap. The rail holds the section number (eyebrow, accent) and the section name (eyebrow, slate) and is `position: sticky; top: 96px`. Under 900px the rail stacks above the content as one inline row: "01 - About".
- Vertical rhythm: sections 56px apart on desktop (40px under 900px, 32px under 600px). Sections are separated by a full-width `--line` hairline.
- Grids use `gap` and hairlines. Cards in grids share borders rather than floating with shadows.
- No horizontal scroll at any width. All images use `max-width: 100%`.

## 5. Header

- Sticky, 64px, page-background colour, 1px `--line` bottom border. Respect `env(safe-area-inset-top)`.
- Left: a **monogram** ("JL", 32px square, `--ink` fill, white 600 text, 4px radius) followed by the name (15px, 600, navy).
- Right: nav links (14px, 500, `--text`). The active link gets a 2px accent underline sitting on the header's bottom border. Hover changes the text to navy with no background block.
- Theme toggle: 34px circle, 1px `--line` border, monochrome sun/moon icon.
- Under 860px: links collapse behind a "Menu" button (text label and icon). It opens a full-width panel below the header, with links as 48px rows separated by hairlines.

## 6. Footer (ink band)

- A full-bleed `--ink` band with `--ink-text`.
- Top row: a large statement line (26-32px, weight 600) inviting contact, plus a solid accent "email" button.
- Middle grid, 3 columns: identity (name and one line), pages, elsewhere (social links with icons). Column heads are eyebrows in `--ink-muted`.
- Bottom row, after an `--ink-line` hairline: copyright on the left and "Back to top" on the right, both 13px muted.
- Columns stack under 700px.

## 7. Components (shared classes in theme.css)

- **Buttons**: `.btn` has a 44px min height, 0 20px padding, 4px radius, 14px 600 text and an optional trailing arrow. Variants:
  - `.btn--primary`: accent fill, white text. Hover darkens it.
  - `.btn--outline`: 1.5px `--line-strong` border, navy text. Hover makes the border navy.
  - `.btn--ghost-ink`: on ink, a 1.5px `--ink-line` border with white text. Hover makes the border white.
  - `.btn--sm`: 34px tall, 12px uppercase, letter-spacing 0.06em.
  - No pill shapes, no shadows.
- **Text link with arrow**: accent, 600. The arrow shifts 2px right on hover. This is the only movement allowed.
- **Card**: `--bg` fill, 1px `--line` border, 6px radius, 28px padding. On hover the border becomes `--line-strong`. No shadow and no lift. A card can carry a 3px accent top or left rule to mark a featured item.
- **Badge**: muted solid fill, white 11px 700 text, 3px 10px padding, 3px radius.
- **Chip**: 1px `--line` border, transparent fill, 12px `--text-secondary` text, 4px radius, 3px 10px padding. Square-ish, not pills.
- **Stat**: a large numeral (40-56px, 600, navy) over an eyebrow caption. Stats sit in a row divided by vertical hairlines.
- **Timeline**: a 1px `--line-strong` vertical line. Each item has an 9px square node (accent for the latest, `--line-strong` for the rest), a date column in tabular eyebrow style, then content. Under 600px the date moves above the content.
- **Figure frame** (photos, thumbnails): 1px `--line` border, with a solid offset block behind it (`--bg-alt` or `--ink-line` on ink, offset 14px down and right). No gradients and no shadows.

## 8. Page patterns

- **Home**:
  1. Top area on a light background, two columns: the main column (eyebrow, name as h1, statement, the labelled "About" text, buttons) and a 336px profile card (framed portrait with caption, all contact and profile rows with icons, research-interest chips). About and the profile details must both be visible on first load without scrolling (1440 x 900 and 390 x 844).
  2. A stats panel directly below.
  3. Rail sections: Latest (timeline), Selected Work (3-up card grid), Education (timeline), Skills (4-column grid of chip groups).
  4. On phones: photo with name, then contacts as compact rows plus icon buttons, then the rest.
- **Inner pages**: a compact page header with a breadcrumb eyebrow ("02 / Research"), the page title and a one-line intro, followed by rail sections.
- **Research**: the featured publication card carries the paper's architecture figure (visible, with an "Open full size" link). Challenges follow on a compact timeline with filter chips by domain. Everything is dense: 14-18px card padding, small type, tight gaps.
- **Achievements**: a compact hairline list of rankings (28px ordinals, challenge name, event badge, note, metric on the right), then two small hackathon cards.
- **CV**: a sticky "at a glance" panel on the left and the PDF on the right. Phones get the panel and buttons only.
- **Footer contact**: "Get in touch" opens a Gmail compose window in a new tab (a plain `mailto:` fails on devices without a mail app), and "Copy email" copies the address and confirms with "Copied". The address is also shown as text.
- **Density rule**: pages should feel minimal. Section padding is 56px (32px on phones), section titles 22px, page titles 36px at most, and nothing should be set in oversized type.

## 9. Responsive breakpoints

- 1120px: container max. 900px: rails stack. 860px: nav collapses. 700px: footer stacks. 600px: grids go to 1 column and the timeline date moves above. 480px: tighter padding.
- Touch targets at least 44px. Test widths: 1440, 1280, 768, 390.

## 10. Accessibility

- Visible `:focus-visible` outline: 2px accent, 2px offset.
- AA contrast in both themes, including text on the ink band.
- Semantic landmarks, one h1 per page, and logical heading order. Alt text on every image.

## 11. Motion

All motion lives in `src/styles/motion.css`, the reveal hook `src/components/useReveal.js` and `src/components/CountUp.jsx`. Header motion lives in `Layout.css` and the hero entrance in `Home.css`.

- **Easing**: `--ease-out` `cubic-bezier(0.22, 1, 0.36, 1)` for arrivals, and `--ease-in-out` for the theme crossfade and the timeline spine. Hover is 200ms, arrivals are 400-900ms.
- **Route change**: the page fades in and rises 10px over 520ms.
- **Scroll reveal**: elements fade in and rise 22px over 800ms as they enter view. Groups (timelines, card grids, stats, rank tiles, footer columns) stagger by 90ms, capped at 540ms. Section rails slide in from the left. The timeline spine draws downward, and its nodes scale in with their item.
- **Hero**: the eyebrow, name, statement, buttons and socials rise in sequence. The portrait wipes upward into its frame, and the offset block slides in behind it.
- **Numbers**: stat values and rank ordinals count up from zero (1.1-1.4s, ease-out cubic) when they are first seen. Screen readers get the final value.
- **Hover**:
  - Buttons rise 1px, and their arrow nudges.
  - Cards rise 3px, with the border strengthening.
  - The nav underline grows from the centre.
  - Footer and social icons nudge.
  - Buttons and chips compress slightly when pressed.
- **Theme switch**: all colours crossfade over 450ms. The toggle icon spins in.
- **Mobile menu**: the panel slides open (grid-row 0fr to 1fr) and the links cascade in.
- **Rules**:
  - Never animate layout properties of content (width, height, margins).
  - Hidden reveal states apply only under `html.motion`, so content shows if JavaScript fails.
  - `prefers-reduced-motion` disables all of it.
