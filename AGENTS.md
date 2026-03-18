# AGENTS.md - Development Guidelines

## Project Overview

This is a simple Progressive Web App (PWA) for a SABER 11 test simulator. It uses vanilla HTML, CSS, and JavaScript with no build system or dependencies.

## Project Structure

```
/Users/fjimenezg/Documents/geotest/
├── index.html      # Main app (HTML + embedded CSS + embedded JS)
├── sw.js           # Service worker for PWA caching
├── manifest.json   # PWA manifest
├── icon-192.png   # App icon (192x192)
└── icon-512.png   # App icon (512x512)
```

## Build / Development Commands

Since this is a vanilla HTML/CSS/JS project with no build system:

- **No build commands required** - Edit files directly
- **No linting configured** - No ESLint, Prettier, or other linters
- **No tests configured** - No test framework present

To test the app, serve the files with any static server:

```bash
# Python 3
python -m http.server 8000

# PHP
php -S localhost:8000

# Node.js (if installed)
npx serve
```

Then open `http://localhost:8000` in browser.

## Running a Single Test

No tests exist in this project.

---

# Code Style Guidelines

## General Principles

- This is a vanilla JavaScript project - no frameworks
- Keep code simple and readable
- Use semantic HTML5 elements
- Mobile-first responsive design (the app targets mobile devices)

## HTML Style

- Use HTML5 doctype: `<!DOCTYPE html>`
- Include `lang` attribute: `<html lang="es">`
- Use meaningful, semantic tags (`<header>`, `<main>`, `<section>`, `<button>`, etc.)
- All inline styles and scripts are in `index.html`
- External resources (fonts) loaded from Google Fonts CDN
- SVG icons embedded inline in HTML

## CSS Style

- Use CSS custom properties (variables) in `:root` for theming
- Follow the existing pattern for colors:
  - `--primary`, `--primary-lt` (primary blue)
  - `--accent`, `--accent-lt` (accent gold/yellow)
  - `--green`, `--green-lt` (success)
  - `--red`, `--red-lt` (error/wrong)
  - `--purple`, `--purple-lt` (language/lectura crítica)
  - `--text`, `--text-2`, `--text-3` (text hierarchy)
  - `--surface`, `--bg` (backgrounds)
  - `--border`, `--shadow-*` (borders and shadows)
- Use `clamp()` for responsive font sizes
- Use flexbox and grid for layouts
- Mobile-first approach with `@media(max-width:...)` for breakpoints

### CSS Variable Naming

```css
:root {
  --bg: #f6f8fa;           /* background */
  --surface: #ffffff;       /* card/surface background */
  --primary: #1a3a5c;       /* main brand color */
  --primary-lt: #e8eef5;    /* light variant */
  --accent: #e8a020;        /* accent/highlight */
  --accent-lt: #fef3d7;    /* light variant */
  --text: #111827;         /* main text */
  --text-2: #4b5563;       /* secondary text */
  --text-3: #9ca3af;       /* muted text */
  --border: #e5e7eb;       /* borders */
  --shadow-sm: 0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);
  --shadow-md: 0 4px 12px rgba(0,0,0,.08),0 2px 4px rgba(0,0,0,.05);
  --r: 12px;               /* border-radius */
  --r-sm: 8px;
  --r-lg: 16px;
}
```

## JavaScript Style

- Use ES6+ features (const/let, arrow functions, template literals)
- Use strict equality (`===` instead of `==`)
- Use meaningful variable names in Spanish (project is in Spanish)
- Data structures: objects for configuration, arrays for collections
- Event handlers attached via `addEventListener`

### Data Structures

Questions are stored in the `QB` (Questions Bank) object:

```javascript
const QB = {
  lc: { /* Lectura Crítica */ },
  mat: { /* Matemáticas */ },
  // ... other subjects
};
```

Each subject has:
- `name`: Display name
- `icon`: Emoji icon
- `tag`: CSS class for styling
- `color`: Brand color
- `desc`: Description
- `competencies`: Array of competencies assessed
- `questions`: Array of question objects

Each question has:
- `id`: Unique identifier
- `context`: Question context/setup (HTML allowed)
- `text`: The question text
- `opts`: Array of 4 options (A, B, C, D)
- `correct`: Index of correct answer (0-3)
- `hint`: Hint text
- `comp`: Competency being assessed
- `nivel`: Difficulty level (1-4)
- `explain`: Explanation for the answer

### Images

Images are stored as Base64 in the `IMGS` object to keep everything in a single file:

```javascript
const IMGS = {
  "mat_fig1": "data:image/png;base64,...",
  // ...
};
```

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| CSS Variables | kebab-case | `--primary-color` |
| CSS Classes | kebab-case | `.btn-primary` |
| JavaScript Const | PascalCase | `const QB = {...}` |
| JavaScript Let | camelCase | `let currentQuestion` |
| Subject keys | lowercase | `lc`, `mat`, `soc` |

## Error Handling

- No try/catch blocks in this simple app
- Service worker has minimal error handling (silent cache failures)
- DOM queries assume elements exist (no null checks)

## PWA / Service Worker

The service worker (`sw.js`) handles caching:
- Cache name: `saber11-narino-v1`
- Caches: `index.html`, `manifest.json`, icons
- Uses cache-first strategy
- Cleans old caches on activation

## Accessibility

- Use semantic HTML
- Include `alt` attributes on images (if any)
- Use `aria-label` where appropriate
- Ensure sufficient color contrast
- Test with keyboard navigation

## Adding New Subjects

To add a new subject (e.g., Science - Ciencias Naturales):

1. Add subject data to `QB` object in `index.html`:
```javascript
cn: {
  name: "Ciencias Naturales",
  icon: "🔬",
  tag: "tag-cn",
  color: "#1e8a4a",
  desc: "Evalúa competencias científicas...",
  competencias: ["UsoComprension...", ...],
  questions: [
    {id: 1, context: "...", text: "...", opts: [...], correct: 0, ...},
    // more questions
  ]
}
```

2. Add corresponding CSS classes if needed:
   - `.s-cn` for subject card styling
   - `.tag-cn` for question tag styling

3. Add icons to `IMGS` if the subject has images

4. Update `ASSETS` array in `sw.js` if adding new assets

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first design
- Service worker requires HTTPS or localhost
