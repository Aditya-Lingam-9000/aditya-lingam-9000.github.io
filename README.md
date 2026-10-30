# Jyothiradithya Lingam - Portfolio 

A plain, academic-style personal portfolio built with React and Vite.

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
