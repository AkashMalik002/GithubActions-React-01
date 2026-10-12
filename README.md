# GitHub Actions CI/CD — React App with Matrix Build Strategy

An educational React 18 + Vite app paired with two GitHub Actions workflows. The app introduces Git, GitHub, and Actions; the workflows test and build it on every push or pull request targeting `master`.

## Workflows

| Workflow | Runner | Artifact |
| --- | --- | --- |
| `.github/workflows/main.yml` | `ubuntu-latest` | `nodejs-artifact` |
| `.github/workflows/Matrix.yml` | Ubuntu and Windows | `artifact-node-ubuntu`, `artifact-node-windows` |

Both workflows install from `package-lock.json` with `npm ci`, run Vitest before building, then upload the `dist/` bundle. The matrix workflow excludes invalid OS/artifact combinations and lets the second OS finish if one job fails.

## Run locally

```sh
npm ci
npm test
npm run dev
```

Create a production bundle with `npm run build`; Vite writes it to `dist/`.

## Matrix combinations

| Runner | Artifact | Result |
| --- | --- | --- |
| `ubuntu-latest` | `artifact-node-ubuntu` | Included |
| `ubuntu-latest` | `artifact-node-windows` | Excluded |
| `windows-latest` | `artifact-node-ubuntu` | Excluded |
| `windows-latest` | `artifact-node-windows` | Included |

## Project structure

```text
src/
  App.jsx             Header, hero, page shell
  MainContent.jsx     Help visibility and pipeline overview
  HelpArea.jsx        Interactive Git/GitHub/Actions cards
  data.js             Card content and pipeline steps
  App.test.jsx        UI behavior tests
  styles.css          Responsive visual system
.github/workflows/
  main.yml            Single-runner CI
  Matrix.yml          Cross-platform matrix CI
```
