# AGENTS.md

Static single-page portfolio (React 19 + Vite + TypeScript, Tailwind v4) deployed to
GitHub Pages at `https://ccrc-98.github.io/Portafolio/`. UI copy is in Spanish.

## Commands

- `pnpm dev` — Vite dev server.
- `pnpm build` — `tsc -b` (typecheck) then `vite build`, then copies `dist/index.html` →
  `dist/404.html` for the GitHub Pages SPA fallback. This is the **only** typecheck step;
  there is no separate `typecheck` or `test` script.
- `pnpm lint` — `eslint .` (flat config, ignores `dist`).
- `pnpm preview` — serve the built `dist/`.
- `pnpm deploy` — `predeploy` runs `pnpm build`, then `gh-pages -d dist` publishes to the
  `gh-pages` branch.

Use **pnpm** (lockfile is `pnpm-lock.yaml`). `pnpm-workspace.yaml` only holds dependency
`overrides`; this is not a monorepo.

## SVG icon imports

`*.svg?react` imports are typed via `src/vite-env.d.ts`, which references `vite/client`
and `vite-plugin-svgr/client`. If that reference is removed, `tsc -b` (and therefore
`pnpm build`) fails with `TS2307` even though `pnpm dev` still works. Put new icons in
`src/assets/icons/` and re-export them from `src/assets/icons/iconIndex.ts`.

## Gotchas

- GitHub Pages subpath: `base: "/Portafolio/"` in `vite.config.ts`, `homepage` in
  `package.json`, and `basename: "/Portafolio"` in `src/router.tsx` must stay in sync —
  change all three together.
- Import routing from `react-router` (v8), **not** `react-router-dom`.
- SVG icons are imported as React components via the `?react` suffix (vite-plugin-svgr)
  and re-exported from `src/assets/icons/iconIndex.ts`. Import icons from there, not
  directly.
- Page sections are transparent; `Layout` supplies the page background (`bg-gray-50
  dark:bg-gray-950`) and a `Footer`. Cards use white + `ring-1 ring-black/5` +
  `dark:bg-gray-900` for contrast. Keep new UI consistent with that pattern.
- Tailwind v4 is wired through `@tailwindcss/vite`; there is **no** `tailwind.config.js`.
  Global CSS is just `@import "tailwindcss";` in `src/index.css`. Dark mode uses `dark:`
  variants only (no theme toggle component).
- React Compiler is enabled in `vite.config.ts` via `@rolldown/plugin-babel` +
  `reactCompilerPreset()`. Do not hand-add `useMemo`/`useCallback` as a substitute.
- No test framework and no CI workflows exist. Do not invent test commands.

## Layout

- `src/main.tsx` mounts `RouterProvider`.
- `src/router.tsx` defines routes under `components/Layout` (renders `Navbar`, `<Outlet />`
  and `Footer`): `/aboutme` (default; `/` redirects here), `/competencies`, `/contact`.
- `src/pages/*` are route components; `src/components/*` is shared UI. Components are
  exported as named functions.
- The prefilled `wa.me`/`mailto:` message and the contact URLs live in
  `src/data/contact.ts` (shared by `AboutMe` and `Contact`). Keep the
  `encodeURIComponent` encoding when editing.
