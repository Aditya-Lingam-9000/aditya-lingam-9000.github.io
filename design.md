# Design Guidelines

Reference: https://nikhil-rao20.github.io/ (overall look, theme and component style only, not the exact layout).
Stack: React JS. This file covers design only, not content.
Method: values below were measured from the live site in a real browser (computed styles at 1440, 1280, 768 and 390px, light and dark), not guessed.

## 1. Overall Character

- A clean, academic, text-first multi-page portfolio. White page, near-black top bar, one blue for links, grey for everything secondary.
- It feels like a well-formatted CV: plain, dense, readable, with lots of white space and no decoration.
- No emojis, no gradients, no decorative illustrations, no glassmorphism, no glow, no loaders.
- No entrance, scroll-reveal, parallax or typing animations. The only motion is a short colour change on hover or focus (about 150-180ms).
- Hierarchy comes from font weight, colour (navy, slate, grey) and thin rules, not from boxes or effects.

## 2. Color

Light theme (default):

| Role | Value |
| --- | --- |
| Page background | `#ffffff` |
| Navbar background | `#222222`, with a 1px `#080808` border |
| Navbar active tab background | `#080808` |
| Navbar text | `#ffffff` |
| Navbar hover / focus | white background, navy text `#20364c` |
| Page title and strong text | `#20364c` (navy) |
| Section heading, sub-heading | `#708090` (slate grey) |
| Body text | `#333333` |
| Secondary text (summary, authors) | `#555555` and `#444444` |
| Meta text (venue, dates, institution) | `#666666` to `#808080`, often italic |
| Links and accent | `#1585cf` (the only accent colour) |
| Hairline dividers (list rows, table rows) | `#dddddd` and `#e0e0e0` |
| Entry card border | `#e0e6ef` |
| Info box background / border | `#f9f9f9` / `#e0e0e0` |
| Tag chip background / text | `#f0f0f0` / `#666666` |
| Section rule colour | `#708090` |

Dark theme (toggle, same components):

| Role | Value |
| --- | --- |
| Page background | `#0a0a0a` |
| Navbar | `#000000`, 1px bottom border `#1f2937`. Active tab is a dark navy (`#111c2b`) |
| Surfaces (cards, info box) | `#111827` |
| Borders | `#1f2937` (stronger: `#374151`), section rule `#334155` |
| Headings | `#f3f4f6` |
| Body text | `#d1d5db`, meta text `#9ca3af` |
| Links | near-white `#cbd5e1` with slightly heavier weight (they drop the blue). Hover is `#f8fafc` |
| Social icons | muted grey `#9ca3af` |
| Contact list dividers | light grey, clearly visible |

Colour rules:
- Define all colours as CSS variables so light and dark share the same components.
- One accent colour only. The single exception is the small venue or status badges (see Components), which may use a muted green, navy or purple fill with white text.
- Remember the user's theme choice and default to light.

## 3. Typography

- Font: **Montserrat** (weights 400, 500, 600, 700) for everything, including body text and nav. Fallback `Helvetica, Arial, sans-serif`.
- Base text is 15px with a 1.5 line height (about 14px in cards and 13.5px on tablet and mobile, 12.5px at 480px and below).
- Navbar brand is 18px and weight 500. Nav links are 15px and weight 400.
- Page title (h1): 36px, weight 500, navy, with a large bottom margin (about 40px). The home page has no big h1 at all.
- Section heading (h3): 24px, weight 500, slate grey.
- Sub-heading (h4): about 14px, weight 500, slate grey, **uppercase**. Used for roles and categories.
- Entry or project title: 14-16px, weight 600. Project titles are uppercase.
- Authors 13px, venue 12.5px italic, dates and small meta 13px, badges 10.5px bold.
- Links are blue (`#1585cf`) with weight 500, no underline at rest. On hover they get a 1px **dashed** blue underline (`border-bottom`, 2px padding-bottom). No colour change.
- Own name or key phrases are shown in bold. Italics are for institutions, venues and notes.
- Alignment is left. Only the profile block on mobile, logo grids and the footer on mobile are centred.

## 4. Layout and Spacing

- One centred container: max width **900px** (about 870px of content) with 15px side padding. 730px on small tablets.
- The home page uses a 1/3 and 2/3 split: a narrow profile column (about 270px) and a text column (about 570px). It stacks and centres below 768px.
- Other pages use a single full-width column.
- Vertical rhythm: about 65px between navbar and first content, 4rem between sections, 2rem between a heading and its content, 20-24px between list entries.
- Use a 4px / 8px spacing scale.
- The footer sits below a 1px light top border (`#eee`) with about 20px padding.

## 5. Navigation

- Full-width bar on a `#222` background, square corners. The brand is at the left in white, and the links are at the right, all inside the 900px container. Total height is about 80px with generous padding.
- Link padding is 15px. The **active** link has a darker block background (`#080808`).
- **Hover and focus**: the link becomes a white block with navy text, with a small white downward caret (triangle) beneath it.
- At the far right is a small round theme-toggle button (about 22-36px, light grey `#f3f4f6` fill, tiny navy icon).
- Below 768px the links collapse into a hamburger button (outlined, white bars). The brand truncates with an ellipsis. Opened links stack vertically.
- Routing is simple page-to-page (hash routes or React Router). No sticky shrink or fade effects.
- A small "back to top" tab (accent blue, white arrow, rounded on its left edge only) is fixed to the right edge, and is only visible after scrolling.

## 6. Section Headings

Two variants, both quiet:
1. **Rule heading** (most pages): slate-grey h3, with a 2px slate rule running from the end of the text to the right edge, as if the text sits on the line. The text sits on a page-coloured span.
2. **Underlined heading** (grouped content such as experience): navy `#2c3e50` h2, 24px, weight 600, with a full-width 2px accent-blue bottom border and 15px padding below.

Pick one variant per page and use it consistently.

## 7. Components

**Profile block**
- A square photo (about 270px) with a 4px padding, 1px `#ddd` border and 4px radius.
- Below it, a centred caption: first line in navy bold (14px, 600), second line in slate grey.
- Below that, a contact list: each row has a monochrome icon on the left and a label on the right (blue if a link), separated by 1px `#ddd` rules, 8px padding. Rows stay as hairline-separated lines and not cards.

**Info box (news, updates)**
- 1px `#e0e0e0` border, 5px radius, 10px padding, `#f9f9f9` background, max height about 200px (160px on mobile) with a thin 8px custom scrollbar (thumb `#c1c1c1`, radius 4px).
- Content is a plain bulleted list with the date in bold square brackets at the start of each item.

**Entry card (publications and similar)**
- White background, 1px `#e0e6ef` border, **8px radius**, 16px padding, **no shadow**, 24px gap between cards.
- A row layout: a thumbnail on the left (about 160 x 150px, contained, not cropped, with a light border) and text on the right with a 20px gap.
- Text order: a small coloured badge, then a 14px bold title (blue link), then 13px authors with the owner's name in bold, then a 12.5px italic grey venue line, then the action buttons.
- Below 600px the card stacks, and the image is full width and about 150px tall.
- Cards never lift, scale or tilt on hover.

**Venue / status badge**
- Inline block, 4px radius, padding about 3px 11px, 10.5px bold white text, slight letter spacing. Fill is a muted solid colour that depends on the category (for example green for journal, navy for conference, purple for preprint). No gradients.

**Buttons (small outlined link buttons)**
- 1.5px navy `#20364c` border, 4px radius, white background, navy text, padding about 3px 13px, 11px, weight 600, **uppercase**, letter spacing about `.04em`.
- Hover: fills navy with white text, with a 180ms transition. In dark mode they use `#1f2937` fill with a `#374151` border.
- No pill shapes and no shadows.

**Project rows (list style, not a card grid)**
- Each project is a horizontal row: image on the left (about 250 x 150px, contained, 8px radius, light shadow `0 2px 8px rgba(0,0,0,.1)`), text on the right.
- The title is uppercase, 16px, weight 600, as a blue link. Below it is a 15px summary in `#555` with 24px line height, then tag chips, then a blue text link ending in an arrow ("→").
- Rows are separated by a 1px `#e0e0e0` bottom border with 20px vertical padding. Category headings above groups use the rule heading.
- Below 600px, the image goes on top (full width, max about 300px) and the text follows.
- No hover lift. The only hover effect is the dashed underline on links (images may stay static).

**Tag chips**
- `#f0f0f0` background, `#666` text, 12px, fully rounded (15px), padding about 2px 8px, 5px gaps.

**Logo / organisation grid (experience, affiliations)**
- Centred columns: 4 per row on desktop, 2 on tablet, 1-2 on mobile, with equal gutters.
- Each item: a logo (about 110px wide, contained, no border), then the organisation name in 16px bold navy with a short 2px slate rule beneath it (about 130px wide, centred), then the role as an uppercase 14px slate line, then people in blue links, then a small grey date line.
- Group the grid under underlined headings (variant 2).

**Plain lists (education, competitions)**
- Unstyled or simple bullet lists. A title line in normal weight, followed by an italic grey line for the institution and details. About 1rem between items.

**Footer**
- Copyright in muted grey on the left, social icons on the right (blue, large, about 2x, spaced about 2rem). Icons dim to 80% opacity on hover with no underline. On mobile both centre and stack.

**Theme toggle**
- A small round icon-only button in the navbar, and no animated switch.

## 8. Responsive Behavior

- Mobile-first, with breakpoints at 480px, 600px, 768px and 900px.
- At 768px and below: collapse the nav, centre the profile block (the photo then the caption then the contact list, then the text), reduce body text to about 13.5px, reduce h1 to about 20px and h3 to about 17px, and set container padding to 15px.
- At 600px and below: stack entry thumbnails above text, make grids 1-2 columns, wrap buttons and chips.
- At 480px and below: body text about 12.5px, h1 about 18px, h3 about 15.5px.
- Images always use `max-width: 100%; height: auto`. No horizontal scroll at any width.
- Touch targets are at least 40px tall.

## 9. Accessibility and Polish

- Visible keyboard focus only on `:focus-visible`: `outline: 2px solid #1585cf; outline-offset: 2px`.
- Text contrast of at least WCAG AA in both themes.
- Semantic HTML: `nav`, `main`, `section`, `footer`, with proper heading levels. Alt text on every image.
- Respect `prefers-reduced-motion` by removing the small hover transitions.
- Icons are monochrome (Font Awesome style or inline SVG) in the accent or text colour. No emojis anywhere.

## 10. Do Not

- No gradients, glow, blur, neon, 3D or animated backgrounds.
- No emojis, mascots or stock decorative graphics.
- No additional accent colours (only the muted badge fills are allowed).
- No spinning or animated loaders, and no scroll-triggered animation.
- No heavy shadows, large radii (more than 8px), pill buttons, or hover lift and scale effects.
- No card grids with big rounded cards for projects. Use clean rows.
