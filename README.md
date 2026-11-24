## Greetings Nerds ⌑

It is I, Chuks of the house of Festus, best SEO of his name, the unlearnt, King of React/React-native, Khal of SVG, Lord of CSS and animations, protector of the serverless, Eze gburugburu of the seven kingDOMs, Breaker of firebase and Father of Bash

## Stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- [StyleX](https://stylexjs.com) for styles
- [Motion](https://motion.dev) for micro-interactions
- [GSAP](https://gsap.com) + [SplitType](https://github.com/lukePeavey/SplitType) for scroll animations
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) + [Oxfmt](https://oxc.rs/docs/guide/usage/formatter)
- Vite, React 19, TypeScript

The site is prerendered to static HTML at build time.

## Scripts

```sh
bun install
bun run dev             # local dev server on http://localhost:3000
bun run build           # static output in dist/client
bun run preview         # preview the production build
bun run lint            # oxlint
bun run format          # oxfmt
bun run typecheck       # tsc --noEmit
bun run optimize:images # regenerate public/img from assets/source
bun run optimize:fonts  # regenerate public/fonts from assets/fonts-source
```

Source images live in `assets/source/` and source fonts in `assets/fonts-source/`; only the generated WebP/WOFF2 files are served. The font script requires `fonttools` plus `brotli` (`pip install fonttools brotli`).

Deploy the contents of `dist/client` to any static host.
