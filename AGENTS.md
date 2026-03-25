# AGENTS.md - Development Guidelines

## Project Overview

Progressive Web App (PWA) for SABER 11 test simulator by Secretaría de Educación Departamental de Nariño. Built with vanilla HTML, CSS, and JavaScript - no build system, no dependencies.

## Project Structure

```
/Users/fjimenezg/Documents/geotest/
├── index.html                  # Main app (HTML + embedded CSS + embedded JS)
├── sw.js                       # Service worker for PWA caching
├── manifest.json               # PWA manifest
├── icon-192.png / icon-512.png # App icons
├── icon-escudo.svg             # Shield/logo SVG
├── assets/                     # Images and static assets
├── simulacro-1/               # Simulacro 1 (standalone PWA)
└── saber11-matematicas-2020/  # Math simulator (standalone PWA)
```

## Development Commands

**No build system** - Edit files directly. Test locally with any static server:

```bash
# Python 3
python -m http.server 8000

# PHP
php -S localhost:8000

# Node.js
npx serve

# Then open http://localhost:8000
```

**No linting configured** - No ESLint, Prettier, or other linters
**No tests configured** - No test framework present

---

## Code Style Guidelines

### General Principles

- Vanilla JavaScript project - no frameworks or build tools
- Mobile-first responsive design
- Keep code simple and readable
- All CSS/JS embedded in `index.html`
- Spanish language used throughout (variable names, content, comments)

### HTML Style

- Use HTML5 doctype: `<!DOCTYPE html>`
- Include `lang="es"` attribute
- Semantic tags: `<header>`, `<main>`, `<section>`, `<nav>`, `<button>`, etc.
- SVG icons embedded inline in HTML (inherited from design workflow)
- External fonts loaded from Google Fonts CDN

### CSS Style

**CSS Variables** (defined in `:root`):
```css
:root {
  --navy: #1a3a5c;        /* primary brand color */
  --navy2: #254f7a;       /* hover variant */
  --gold: #e8a020;        /* accent/highlight */
  --gold2: #f5c842;       /* accent hover */
  --green: #1e8a4a;       /* success states */
  --bg: #f6f8fa;          /* background color */
  --text: #111827;         /* primary text */
  --text-2: #4b5563;       /* secondary text */
  --text-3: #9ca3af;       /* muted/disabled text */
  --border: #e5e7eb;       /* borders and dividers */
  --r: 12px;              /* border-radius */
  --shadow: 0 4px 24px rgba(26, 58, 92, .12);
}
```

**Conventions**:
- Use `clamp()` for responsive font sizes
- Flexbox and CSS Grid for layouts
- Mobile-first breakpoints: `@media(max-width:...)`
- No unit for zero values: `0` not `0px`
- 2-space indentation for CSS

### JavaScript Style

- ES6+ features: `const`/`let`, arrow functions, template literals, destructuring
- Strict equality: `===` not `==`
- Variable names in Spanish (project is Colombian)
- Event handlers via `addEventListener`
- Semicolons not required (ASI - Automatic Semicolon Insertion used)

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| CSS Variables | kebab-case | `--primary-color` |
| CSS Classes | kebab-case | `.btn-primary`, `.nav-links` |
| JS Constants | PascalCase | `const QB = {...}` |
| JS Variables | camelCase | `let currentQuestion` |
| Subject keys | lowercase | `lc`, `mat`, `soc`, `cn` |
| CSS Sections | comment headers | `/* ── NAVBAR ── */` |

### Data Structures

**Question Bank** (`QB` object):
```javascript
const QB = {
  lc: {
    name: "Lectura Crítica",
    icon: "📖",
    questions: [...]
  },
  mat: {
    name: "Matemáticas",
    icon: "📐",
    questions: [...]
  },
};
```

**Question Object**:
```javascript
{
  id: 1,
  context: "<p>Texto de contexto...</p>",
  text: "¿Cuál es la respuesta?",
  opts: ["A) Opción", "B) Opción", "C) Opción", "D) Opción"],
  correct: 0,      // index 0-3
  hint: "Pista...",
  comp: "Competencia evaluada",
  nivel: 1-4,      // difficulty level
  explain: "Explicación..."
}
```

**Images**: Stored as Base64 in `IMGS` object to keep everything in single file.

### Error Handling

- No try/catch blocks in main code
- Service worker: silent cache failures (catch returns null)
- DOM queries assume elements exist (no null checks)
- Graceful degradation for missing features

---

## PWA / Service Worker

**Cache name**: `portal-sed-narino-v4` (increment on major changes)

**Caching strategy**: Cache-first with network fallback
```javascript
caches.match(request).then(r => r || fetch(request).catch(() => caches.match('./index.html')))
```

**Cached assets** (in `sw.js` ASSETS array):
- Root: `index.html`, `manifest.json`, icons
- `simulacro-1/` subdirectory
- `saber11-matematicas-2020/` subdirectory

**Activation**: Cleans old caches on activation

---

## Accessibility

- Semantic HTML elements (`<nav>`, `<main>`, `<button>`, etc.)
- `alt` attributes on all `<img>` elements
- `aria-label` on interactive elements lacking text
- Sufficient color contrast (verified)
- Keyboard navigation support
- Touch-friendly tap targets (min 44px)

---

## Adding New Subjects

1. Add subject to `QB` object in `index.html`:
```javascript
cn: {
  name: "Ciencias Naturales",
  icon: "🔬",
  questions: [...]
}
```

2. Add CSS classes if needed (`.s-cn`, `.tag-cn`)

3. Update `ASSETS` array in `sw.js` if adding new files

---

## Browser Support

- Modern browsers: Chrome, Firefox, Safari, Edge
- Service worker requires HTTPS or localhost
- PWA installable on mobile and desktop
