## Project Overview

<!-- EDIT: one or two sentences about what this app does -->
A single-page web app built with **Vite + React**, using **React Router DOM** for routing, **Redux Toolkit** for state management, and **Sass** for styling.

## Tech Stack

- **Build tool:** Vite
- **UI:** React (function components + hooks only, no class components)
- **Language:** JavaScript
- **Routing:** react-router-dom
- **State:** Redux Toolkit
- **Styling:** Sass (SCSS syntax)
- **Package manager:** npm

## Commands

```bash
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Type-check and production build to dist/
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
npm run test       # Run tests <!-- EDIT: remove if no tests -->
```

Before finishing any task, run `npm run lint` and `npm run build` and fix any errors.

## Project Structure

```
src/
├── app/
│   ├── store.ts            # configureStore, RootState, AppDispatch
│   ├── hooks.ts            # typed useAppDispatch / useAppSelector
│   └── router.tsx          # route definitions
├── features/               # feature-based modules (slice + components + api)
│   └── todos/
│       ├── todosSlice.ts
│       ├── todosApi.ts     # RTK Query endpoints (if any)
│       ├── TodoList.tsx
│       └── TodoList.module.scss
├── pages/                  # route-level components (one per route)
├── components/             # shared, reusable UI components
├── hooks/                  # shared custom hooks
├── utils/                  # pure helper functions
├── styles/
│   ├── _variables.scss     # colors, spacing, breakpoints
│   ├── _mixins.scss
│   └── global.scss         # resets and global styles (imported once in main.tsx)
├── types/                  # shared TypeScript types
├── main.tsx                # entry point
└── App.tsx
```

- Organize by **feature**, not by file type. Keep a feature's slice, API, components, and styles together.
- Put shared code in `components/`, `hooks/`, or `utils/` only when used by 2+ features.
- Use the `@/` alias for imports from `src/` (e.g. `import { store } from '@/app/store'`). Avoid long relative paths like `../../../`.

## Code Style

- Function components with hooks; named exports for components (default exports only for pages if lazy-loaded).
- One component per file. File name matches component name (`UserCard.tsx`).
- Components: `PascalCase`. Hooks: `useCamelCase`. Utilities and variables: `camelCase`. Constants: `UPPER_SNAKE_CASE`.
- Prefer small components. Extract logic into custom hooks when a component grows past ~150 lines.
- Destructure props in the function signature and type them with an `interface` or `type`.
- Avoid `any`. Use `unknown` and narrow, or define proper types.
- Don't leave `console.log` in committed code.
- Keep the existing formatting (Prettier/ESLint config). Do not reformat unrelated code.

## React Router

- Routes are defined centrally in `src/app/router.tsx` using `createBrowserRouter`. Do not scatter `<Routes>` throughout the app.
- Use nested routes with a layout route rendering `<Outlet />` for shared UI (header, sidebar).
- Lazy-load route-level pages with the route `lazy` property or `React.lazy` + `Suspense`.
- Use `<Link>` / `<NavLink>` for internal navigation, never `<a href>`. Use `useNavigate` only for programmatic navigation (e.g. after form submit).
- Read URL state with `useParams` / `useSearchParams` instead of duplicating it in Redux.
- Provide an `errorElement` for route errors and a catch-all `*` route for 404.
- Protected routes: wrap in a guard/layout route that redirects unauthenticated users; don't sprinkle auth checks into individual pages.

## Redux Toolkit

- Create the store with `configureStore` in `src/app/store.ts`. Export `RootState` and `AppDispatch` types from it.
- **Always use the typed hooks** from `src/app/hooks.ts` (`useAppDispatch`, `useAppSelector`). Never use plain `useDispatch` / `useSelector`.
- Define state with `createSlice`. Mutating syntax inside reducers is fine (Immer) — do not also return a new value from the same reducer.
- Keep Redux state **serializable**: no functions, class instances, `Date` objects, `Promise`s, or `Map`/`Set`. Store dates as ISO strings.
- Keep state minimal and normalized. Derive values with selectors (use `createSelector` for expensive/derived data). Export selectors from the slice file.
- Server data: use **RTK Query** (`createApi`) rather than hand-written `createAsyncThunk` + loading flags, unless the logic isn't a plain request.
- Local UI state (open/closed modal, input value) belongs in `useState`, not Redux.
- Name actions by what happened (`todoAdded`, `userLoggedOut`), not setters (`setTodo`).

## Styling (Sass)

- Use **SCSS syntax** (`.scss`). Component styles live next to the component as `Component.module.scss` (CSS Modules).
- Import styles as `import styles from './Component.module.scss'` and use `className={styles.card}`.
- Use `@use` and `@forward`, **never `@import`** (deprecated). Example: `@use '@/styles/variables' as v;`
- Put colors, spacing, font sizes, and breakpoints in `styles/_variables.scss` — no hard-coded magic values in components.
- Reusable patterns (breakpoints, truncation, flex helpers) go in `styles/_mixins.scss`.
- Class names in modules: `camelCase` (`.cardHeader`) for clean `styles.cardHeader` access.
- Limit nesting to 3 levels. Avoid `!important` and avoid global selectors except in `global.scss`.
- Mobile-first: write base styles for small screens and use `min-width` breakpoint mixins for larger ones.
- Prefer CSS custom properties for anything that changes at runtime (e.g. theming).

## Vite Specifics

- Environment variables must be prefixed with `VITE_` and read via `import.meta.env.VITE_*`. Never use `process.env`.
- Never commit `.env` files with secrets. Keep `.env.example` up to date when adding a new variable.
- Static assets that need no processing go in `public/`; assets imported in code go in `src/assets/`.
- Path alias `@` → `src` is configured in `vite.config.ts` (and `tsconfig.json` `paths`). Keep both in sync.

## Data Fetching & Side Effects

- Use RTK Query hooks (`useGetXQuery`) in components; handle `isLoading`, `isError`, and empty states explicitly.
- Don't fetch in `useEffect` if RTK Query or a router loader can do it.
- Always clean up subscriptions, timers, and listeners in effect cleanup functions.

## Accessibility & UX

- Use semantic HTML (`button`, `nav`, `main`, `label`) before reaching for `div` + `onClick`.
- Every interactive element must be keyboard-accessible; every image needs an `alt`; every input needs a label.
- Show loading and error states for all async UI.

## Do / Don't

**Do**
- Match patterns already used in the codebase before introducing new ones.
- Make the smallest change that solves the problem.
- Ask before adding a new dependency; prefer what's already installed.
- Add or update tests when changing logic in slices, selectors, or utils.

**Don't**
- Don't use `@import` in Sass, or inline styles for anything but truly dynamic values.
- Don't put non-serializable values in the Redux store.
- Don't use untyped `useSelector` / `useDispatch`.
- Don't edit generated files, `dist/`, or lockfiles by hand.
- Don't disable ESLint or TypeScript rules (`eslint-disable`, `@ts-ignore`) without a comment explaining why.

## Git Workflow

<!-- EDIT to match your team -->
- Branch naming: `feature/short-description`, `fix/short-description`.
- Commit messages: imperative, present tense (e.g. "Add cart slice"). Conventional Commits optional.
- Keep PRs focused; don't mix refactors with feature work.