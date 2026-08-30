# Groth

A React + Vite + TypeScript project styled with Tailwind CSS.

## Stack

| Tool        | Version         |
| ----------- | --------------- |
| React       | 19               |
| Vite        | 8                |
| TypeScript  | 5.9              |
| Tailwind CSS| 4 (via `@tailwindcss/vite`) |
| ESLint      | 10 (flat config) |

## Commands

```bash
npm install        # install dependencies
npm run dev        # start the dev server (default http://localhost:5173)
npm run build      # type-check (tsc -b) + production build to dist/
npm run preview    # preview the production build
npm run lint       # lint all .ts/.tsx files
```

## Project layout

```
├── index.html          # HTML entry point
├── src/
│   ├── main.tsx        # React bootstrap
│   ├── App.tsx         # root component
│   └── index.css       # Tailwind entry (@import "tailwindcss")
├── public/             # static assets (served at /)
├── vite.config.ts      # Vite + React + Tailwind plugins
├── eslint.config.js    # ESLint flat config
├── tsconfig.json       # TS project references
├── tsconfig.app.json   # TS config for src/
└── tsconfig.node.json  # TS config for vite.config.ts
```

### Tailwind CSS v4 notes

- Tailwind v4 needs **no** `tailwind.config.js` / `postcss.config.js`.
  It is wired through the `@tailwindcss/vite` plugin in `vite.config.ts`.
- Global styles are imported in `src/index.css` with `@import "tailwindcss";`.
- Extend the default theme with the `@theme { ... }` block in `src/index.css`
  (e.g. custom colors, spacing, fonts) — see the commented example there.