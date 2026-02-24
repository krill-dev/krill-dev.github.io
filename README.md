# krill-dev.github.io

Minimal blog starter built with **Astro + TypeScript + React**.

Current scope:
- About me page only (`/`)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This repo is configured with GitHub Actions workflow:
- `.github/workflows/deploy.yml`

On push to `main`, it will build and deploy `dist/` to GitHub Pages.

> For user pages (`krill-dev.github.io`), `site` is set to `https://krill-dev.github.io` in `astro.config.mjs`.
