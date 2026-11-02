# Harender Singh, CV site

React + Vite source lives in `site/`. The build writes straight into the repo root
(`index.html`, `static/`, `img/`, `HarenderSingh_cv.pdf`), which GitHub Pages serves from `main`.

```bash
cd site
npm install
npm run dev     # local preview with hot reload
npm run build   # rebuild the published files in the repo root, then commit them
```

- Copy and facts: `site/src/data.js`
- Layout and components: `site/src/App.jsx`
- Theme tokens and styles: `site/src/styles.css` (`:root` block at the top)
- Images and the CV PDF: `site/public/`

## CV PDF

`site/resume/resume.html` is the source of the downloadable CV. To regenerate the PDF, print it to A4 PDF
(Chrome: Print, Save as PDF, margins Default) as `site/public/HarenderSingh_cv.pdf`, then run `npm run build`.
