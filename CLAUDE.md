# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional portfolio website for Roy Effendie - Senior Technical Program Manager. Built with React 18, Vite, and vanilla CSS. Single-page application showcasing 22+ years of technical program management experience.

## Common Commands

### Development
```bash
npm run dev          # Start dev server on http://localhost:3000 (auto-opens browser)
npm run build        # Create production build in dist/
npm run preview      # Preview production build locally
```

### Testing
```bash
npm test             # Run Playwright tests (starts dev server automatically)
npm run test:ui      # Run tests with Playwright UI
npm run test:headed  # Run tests in headed mode (visible browser)
```

Tests are located in `tests/` directory and use Playwright with Chromium. Test configuration in `playwright.config.js` automatically spins up dev server on port 3000.

## Architecture

### Application Structure
- **Entry Point**: `src/main.jsx` → `src/App.jsx` → `src/components/Portfolio.jsx`
- **Component Pattern**: Single-component architecture - the entire portfolio is rendered by `Portfolio.jsx`
- **Styling**: Component-specific CSS files co-located with JSX files (e.g., `Portfolio.jsx` + `Portfolio.css`)
- **Global Styles**: `src/styles/index.css` (CSS variables, resets) and `src/styles/App.css` (shared component styles)

### Key Files
- `vite.config.js`: Vite configuration with React plugin, dev server on port 3000
- `index.html`: Root HTML file with #root div mount point
- `src/components/Portfolio.jsx`: Main portfolio component containing all sections (header, summary, experience, skills, etc.)
- `playwright.config.js`: Test configuration targeting localhost:3000

### Styling Architecture
- CSS variables defined in `src/styles/index.css` for consistent theming
- Two-column responsive layout in Portfolio component
- No CSS framework - pure CSS with modern flexbox/grid

### Important Notes
- Git repository: https://github.com/reffendie/portfolio
- Live deployment: https://portfolio-iota-six-38.vercel.app
- No linting or type checking configured
- React 18 with StrictMode enabled
- Vite dev server configured to auto-open browser
- Single component design - all content lives in Portfolio.jsx rather than being split into multiple smaller components (Hero, Experience, etc. components appear to exist but Portfolio.jsx is the active implementation)

## Deployment

### Vercel (Current Deployment)

The project is deployed on Vercel with automatic deployments from GitHub.

**Live URLs:**
- Primary: https://portfolio-iota-six-38.vercel.app
- Production: https://portfolio-qaapvxejv-roys-projects-8fb264e3.vercel.app

**Deploy using Vercel CLI:**
```bash
# Login to Vercel (first time only)
npx vercel login

# Deploy to production
npx vercel --prod

# Deploy to preview
npx vercel
```

**Automatic deployments:**
- Every push to `main` branch automatically deploys to production
- Pull requests create preview deployments
- Vercel auto-detects Vite configuration

### Manual Deployment Steps

If deploying to a new Vercel account:

```bash
# 1. Ensure code is committed to GitHub
git add .
git commit -m "Your commit message"
git push

# 2. Login to Vercel
npx vercel login

# 3. Deploy (follow prompts or use --yes for defaults)
npx vercel --yes

# 4. Deploy to production
npx vercel --prod
```

Vercel will automatically:
- Detect Vite framework
- Set build command to `vite build`
- Set output directory to `dist`
- Enable HTTPS and global CDN
