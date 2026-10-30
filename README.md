# Jyothiradithya Lingam - Portfolio 

A plain, academic-style personal portfolio built with React and Vite. The design rules live in [design.md](design.md).

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Editing content

All text, links and dates live in one file: `src/data/content.js`. Pages only read from it, so updating the site is usually a one-file change.

| What | Where |
| --- | --- |
| Hero, stats, selected work | `hero`, `stats`, `selectedWork` in `content.js` |
| Bio, news, education, skills | `bio`, `news`, `education`, `skills` |
| Publications and research challenges | `publications`, `challenges` (filter uses `domain` / `researchDomains`) |
| Rankings and hackathons | `rankings`, `hackathons` |
| Page headers, footer call to action | `pages`, `contactCta` |
| Contact links and footer icons | `contacts`, `socials` |
| Photo / CV | replace `public/profile.jpg` / `public/cv.pdf` |

## Project structure

```
src/
  data/content.js        all site content
  styles/theme.css       colour tokens (light + dark) and shared component styles
  components/            header, footer, icons, shared UI pieces (sections, buttons, cards)
  pages/                 About (Home), Research, Achievements, CV, NotFound
public/                  profile photo, CV PDF, research thumbnails, favicon
```

## Deploying (GitHub Pages)

The build uses relative paths and hash routing, so it works from the project sub-path on GitHub Pages without extra configuration.

`.github/workflows/deploy.yml` builds the site on every push to `main` and publishes only the built `dist/` folder. The repository can stay private; the published site is public.

One-time setup: in the repository go to **Settings > Pages** and set **Source** to **GitHub Actions**. The site is then served at `https://<username>.github.io/proff_portfolio/`.

Note: GitHub Pages from a **private** repository requires a paid GitHub plan (Pro, Team or Enterprise). On the free plan, Pages only works for public repositories.
