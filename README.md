# What actually moves a house price?

A single long-form blog post about a BCA Data Mining minor project: a housing
dataset from New Taipei City, the features that line up with price, and a
Linear Regression model trained on it in Python.

## Run it

```sh
bun install
bun run dev        # http://localhost:5173
bun run build      # dist/client (assets) + dist/portfolio/index.js (Worker)
bun run typecheck
```

## Where things live

- `src/app/content.ts` is the post: title, deck, the six correlation values, the
  four test scores, the menu, the install commands and the sources. Edit the
  numbers here and the figures redraw themselves.
- `src/app/components/Post.tsx` holds the sections and the figures (menu panel,
  80/20 split, correlation chart, score readout, command blocks).
- `src/app/components/CorrelationChart.tsx` draws the signed bars. Negative
  values run left of the zero line, positive values run right; the scale is
  ±0.75.
- `src/styles.css` is the whole design system: an off-white paper canvas, ink
text, oxide red and pine green for the two directions of the data, and
  Fraunces, Source Serif 4 and JetBrains Mono for type.
- `src/worker/index.ts` serves `/api/health` and falls back to the built assets.

Motion (reveals, the chart draw-in, the masthead lines) is CSS and one
IntersectionObserver hook in `src/app/hooks.ts`, and it all stops under
`prefers-reduced-motion`.

## Deploy with Freebuff Sites

`deploy.json` points at the build output. After `bun run build`, deploy with the
`sites_deploy` tool from this directory.
