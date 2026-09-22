# Helen & Ed's Tree Farm — Marketing Site

Info-only Astro + Tailwind site for Helen & Ed's Tree Farm (Wapwallopen, PA). No cart, payments, or online ordering.

## Quick start (free local preview)

From this directory:

1. Install dependencies with the Node package manager (`i` / install).
2. Start the Astro local server with the `dev` script.
3. Open the URL printed in the terminal (usually http://localhost:4321).

Production: use the `build` script (output in `dist/`), then `preview` to check locally.

### Season QA override

Append `?season=christmas`, `?season=landscape`, or `?season=offpeak` to any URL.

## Edit content

- `src/data/site.ts` — NAP, phones, email, nav, hours, services
- `src/data/seasons.ts` — season heuristic + homepage copy
- `src/data/inventory.json` — Spring B&B price list (display-only)
- `src/data/directions.ts` — I-81 N/S directions
- `src/data/content.ts` — page copy (Christmas, landscape, wholesale, history, FAQ)
- `src/styles/global.css` — design tokens
- `vercel.json` — legacy PHP 301 redirects

## Design

- Fonts: Fraunces + Source Sans 3 (Fontsource)
- Tagline: Family-grown since 1957
- `data-season` on body; CTA berry only for christmas, else maple
- v2 visual system: sage field, paper panels, bark nav, needle footer (see `src/styles/global.css`)

## Deploy later (Vercel)

1. Push `site/` (or set Root Directory to `site`).
2. Import on Vercel Hobby.
3. Build script → `dist`; `vercel.json` redirects included.
4. Confirm 2026 Christmas hours before treating scaffold as final.

## Constraints

- CTAs: tel:+15708686252 (office), tel:+15704986209 (Ed), directions/hours
- Contact form uses mailto (no paid form product for preview)
- Inventory is static JSON display only

## Exact commands

```
cd /workspace/helen-eds-treefarm/site
npm i
npm run dev
npm run build
```


## Photos (v2 redesign)

Farm photography should live under `public/photos/` (no production hotlinks to helenandedstreefarm.com).

**Current status (2026-09-07):** Old-site image CDN is captcha-blocked (`sgcaptcha`). Until Jeremy confirms reuse of helenandedstreefarm.com assets, the site uses **TEMP Unsplash** evergreen/farm photos marked with HTML comments `<!-- TEMP placeholder -->`:

| File | Slot | Source |
|------|------|--------|
| `photos/hero-needles.jpg` | Home hero | Unsplash (evergreen needles) |
| `photos/intro-rows.jpg` | Home intro polaroid | Unsplash (forest rows) |
| `photos/christmas-path.jpg` | PathCard + Christmas page | Unsplash |
| `photos/landscape-path.jpg` | PathCard + Landscape page | Unsplash |
| `photos/barn-visit.jpg` | Visit / home visit teaser | Unsplash (barn/farm) |
| `photos/about-field.jpg` | About | Unsplash |
| `brand/logo.svg` | Circular pine mark | Local SVG recreation |

Replace TEMP files with real farm photos when available; keep filenames or update references in `index.astro`, PathCards, and page snapshots.

## Design (v2)

- Page canvas: sage `#C5D1B7`; content panels: paper; chrome: bark; footer/proof: needle; text on dark: snow
- Nav active = paper bg + needle text; mobile active = needle bg + snow text
- Snapshot mats (`.snapshot`); tilt only `md+`
- Buttons: `rounded-lg` (not full pill); primary CTA still `--color-cta`
