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
| Bio, news, education, skills | `bio`, `news`, `education`, `skills` in `content.js` |
| Publications and research challenges | `publications`, `challenges` |
| Rankings and hackathons | `rankings`, `hackathons` |
| Contact links and footer icons | `contacts`, `socials` |
| Photo / CV | replace `public/profile.jpg` / `public/cv.pdf` |

## Project structure

```
src/
  data/content.js        all site content
  styles/theme.css       colour tokens (light + dark) and shared component styles
  components/            navbar, footer, back-to-top, icons, shared UI pieces
  pages/                 About (Home), Research, Achievements, CV, NotFound
public/                  profile photo, CV PDF, research thumbnails, favicon
```

## Deploying

The build uses relative paths and hash routing, so `dist/` works on any static host, including GitHub Pages (including project sub-paths), Netlify and Vercel, with no server configuration.

For GitHub Pages: run `npm run build` and publish the `dist/` folder (for example with the `gh-pages` branch or a Pages workflow).
