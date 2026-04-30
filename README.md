# jsm-contracting

Static site for JSM General Contracting LLC. Built with Hugo Extended, hand-rolled custom layouts, deployed to GitHub Pages.

Source-of-truth design and content docs live in the Obsidian vault at `obsidian-notes/50 - projects/JSM website/`:

- `website plan.md` — strategy, structure, technical decisions
- `visual design decisions.md` — color, type, layout, motion
- `website content draft.md` — copy

## local development

```
hugo server --buildDrafts --disableFastRender
```

Site at <http://localhost:1313>.

## production build

```
hugo --minify
```

Output to `public/`. Deploy via GitHub Action on push to `main` (TBD).

## domain

Canonical: `jsmgeneralcontracting.com` (apex), with `www.` redirecting.
