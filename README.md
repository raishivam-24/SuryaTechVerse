# SuryaTechVerse

A full consulting/services company website built with React, Vite, and
Tailwind CSS.

## Structure

```
suryatechverse/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx              # Assembles all sections
│   ├── index.css            # Tailwind directives + global styles
│   ├── data/
│   │   └── content.js       # All copy/content in one place — edit here first
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── TrustedBy.jsx
│       ├── About.jsx
│       ├── Approach.jsx
│       ├── Services.jsx
│       ├── Industries.jsx
│       ├── Work.jsx         # auto-scrolling case studies
│       ├── Team.jsx         # auto-scrolling team row
│       ├── Reviews.jsx
│       ├── FAQ.jsx          # accordion, local state
│       ├── Careers.jsx
│       ├── CTA.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── ui/              # shared small components
│           ├── Eyebrow.jsx
│           ├── Rule.jsx
│           ├── NavLink.jsx
│           ├── Field.jsx
│           ├── ContactRow.jsx
│           └── FooterCol.jsx
```

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to /dist
npm run preview    # preview the production build locally
```

## Editing content

Nearly all site copy (services, team, reviews, FAQs, nav links, contact
details, etc.) lives in `src/data/content.js`. Update that file rather than
hunting through components for text changes.

## Palette — "Ledger"

| Token       | Hex       | Use                                  |
|-------------|-----------|---------------------------------------|
| ink         | `#10243E` | primary text, dark surfaces, header  |
| ink-deep    | `#0B1A2E` | darkest surfaces (footer, banners)   |
| slate       | `#5B6B7C` | secondary text                        |
| bronze      | `#B8935B` | accent — CTAs, numerals, underlines  |
| bronze-deep | `#96723F` | bronze hover state                    |
| cream       | `#F8F6F1` | page background                       |
| paper       | `#FFFFFF` | card surfaces                         |
| line        | `#E4E0D8` | hairlines / borders                   |

Fonts: **Fraunces** (headlines), **IBM Plex Sans** (body), **IBM Plex Mono**
(labels/numerals) — loaded via Google Fonts in `index.html`.

## Notes

- The contact form and newsletter signup are UI-only; wire the `onSubmit`
  handlers in `Contact.jsx` and `Footer.jsx` to your backend or a form
  service (Formspree, Resend, etc.) to make them functional.
- The "Trusted by" client names and the case-study details are placeholder
  content — swap in real logos/clients before shipping.
