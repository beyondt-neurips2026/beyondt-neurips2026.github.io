# Beyond Transformers — NeurIPS 2026 Workshop Website

Official website for **Beyond Transformers: Towards Future Emerging Sub-Quadratic Models**, a NeurIPS 2026 workshop on state-space, linear-attention, recurrent, and hybrid architectures that break the quadratic barrier of attention — across language, vision, video, and world models.

This is a fully static site (no build step, no dependencies) designed to be hosted on **GitHub Pages**.

## Structure

```
website/
├── index.html              # single-page site (all sections)
├── assets/
│   ├── css/style.css       # editorial light theme + responsive layout
│   ├── js/main.js          # data (speakers, panel, organizers, committee),
│   │                       # animated O(n²) vs sub-quadratic hero curves,
│   │                       # nav, scroll reveal, count-up, PC live filter
│   └── img/
│       ├── favicon.svg
│       └── people/         # drop headshots here (see its README.md)
├── .nojekyll               # serve assets verbatim (skip Jekyll processing)
└── README.md
```

## Editing content

Most content is data-driven and lives at the top of `assets/js/main.js`:

- `speakers` — invited speakers
- `panelists` — panel members
- `organizers` — organizing committee (with bios)
- `committee` — full program / technical committee (powers the searchable grid)

Section copy (premise, topics, timeline, schedule, submission) is plain HTML in `index.html`.

### People photos

Drop square headshots into `assets/img/people/` named after each person
(e.g. `albert-gu.jpg`). Missing photos fall back to a gradient monogram automatically.
See `assets/img/people/README.md` for the exact naming rule.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
# Python
python -m http.server 8000
# then visit http://localhost:8000

# or Node
npx serve .
```

## Deploy to GitHub Pages

1. The site lives in the repo `beyond-transformers.github.io` under the `beyondt-neurips2026`
   account, with the files at the **repository root** on the `main` branch.
2. In **Settings → Pages**, set the source to the `main` branch, `/ (root)` folder.
3. The site goes live at `https://beyondt-neurips2026.github.io/beyond-transformers.github.io/`.

## Design notes

The visual language is intentionally distinct from typical dark/gradient workshop sites: a
light "paper" editorial theme, Space Grotesk display type, an indigo→teal accent system, and a
signature animated hero contrasting quadratic attention scaling against a sub-quadratic curve.
Respects `prefers-reduced-motion` and is responsive down to mobile.
