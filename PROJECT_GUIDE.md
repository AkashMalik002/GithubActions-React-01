# Project Guide

## What this app does

Actions Lab is a small React learning page about Git, GitHub, and GitHub Actions. Its CI workflows install dependencies, run the UI tests, build the app, and save the `dist/` output as an artifact.

## Main files

| File | Purpose |
| --- | --- |
| `index.html` | Browser page entry point. Loads `src/main.jsx`. |
| `src/main.jsx` | Starts React and loads the global stylesheet. |
| `src/App.jsx` | Page shell: header, hero, navigation, and footer. |
| `src/MainContent.jsx` | Guides show/hide state and the pipeline overview. |
| `src/HelpArea.jsx` | Renders the interactive Git, GitHub, and Actions cards. |
| `src/data.js` | Text and display data used by cards and pipeline steps. |
| `src/styles.css` | Layout, colors, typography, and responsive styles. |
| `src/App.test.jsx` | Tests the learning cards and guide visibility. |
| `vite.config.js` | Vite + React setup and Vitest browser-like test environment. |
| `package.json` | Dependencies and npm scripts. `package-lock.json` pins exact dependency versions. |
| `.github/workflows/main.yml` | Single Ubuntu CI workflow. |
| `.github/workflows/Matrix.yml` | Ubuntu and Windows matrix CI workflow. |

## How the React modules connect

`index.html` → `src/main.jsx` → `App.jsx` → `MainContent.jsx` → `HelpArea.jsx`.

`MainContent` owns the interactive state. `HelpArea` uses the card content from `data.js`; the pipeline section also reads its step labels from that file.

## Run it locally

```sh
npm ci              # Install exactly what package-lock.json specifies
npm run dev         # Start the local development server
npm test            # Run the Vitest tests
npm run build       # Create the production bundle in dist/
npm run preview     # Serve the built bundle locally
```

## CI flow

Both workflows target pushes and pull requests to `master`, and can also be started manually. Each runs `npm ci` → `npm test` → `npm run build` → artifact upload. The matrix workflow creates separate Ubuntu and Windows artifacts.
