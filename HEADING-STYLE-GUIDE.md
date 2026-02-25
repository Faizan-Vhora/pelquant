# Heading Style Guide - Pixel Terminal Font

## Font Configuration

**Font Family**: Pixelify Sans (Google Fonts)
**Import**: `@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&display=block');`

## Design System

### Colors
- Terminal Text: `#FFF0C3` (warm beige)
- Terminal Background: `#07090D` (deep near-black)

### Typography Settings
- Font Weight: `500` (medium)
- Line Height: `1.15` (tight)
- Letter Spacing: `0` (none)
- Font Smoothing: Disabled for crisp pixel rendering
- Image Rendering: `pixelated`
- Text Rendering: `geometricPrecision`

## Heading Sizes

### H1 (Hero Headlines)
- Mobile: `48px`
- Tablet (768px+): `68px`
- Desktop (1024px+): `88px`
- Max Width: 600px → 850px → 1100px (forces 2-line wrap)

### H2 (Section Titles)
- Mobile: `36px`
- Tablet (768px+): `56px`
- Desktop (1024px+): `72px`

## CSS Implementation

### Global Styles (index.css)
```css
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&display=block');

:root {
  --terminal-bg: #07090D;
  --terminal-text: #FFF0C3;
}

h1, h2 {
  font-family: 'Pixelify Sans', monospace;
  color: var(--terminal-text);
  line-height: 1;
  letter-spacing: 0;
  font-weight: 500;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
  image-rendering: pixelated;
  text-rendering: geometricPrecision;
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 36px;
}

@media (min-width: 768px) {
  h1 {
    font-size: 72px;
  }
  h2 {
    font-size: 56px;
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 96px;
  }
  h2 {
    font-size: 72px;
  }
}
```

### Hero Headline Override (Hero.css)
```css
.hero-content .hero-headline {
  font-family: 'Pixelify Sans', monospace !important;
  font-size: 48px !important;
  font-weight: 500 !important;
  line-height: 1.15 !important;
  color: #FFF0C3 !important;
  margin-bottom: 1.5rem;
  letter-spacing: 0 !important;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
  image-rendering: pixelated;
  text-rendering: geometricPrecision;
}

@media (min-width: 768px) {
  .hero-content .hero-headline {
    font-size: 68px !important;
    max-width: 850px;
  }
}

@media (min-width: 1024px) {
  .hero-content .hero-headline {
    font-size: 88px !important;
    max-width: 1100px;
  }
}
```

### Section Titles (Services.css)
```css
.section-title {
  font-family: 'Pixelify Sans', monospace !important;
  font-size: 36px;
  font-weight: 500;
  color: #FFF0C3 !important;
  letter-spacing: 0 !important;
  line-height: 1 !important;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
  image-rendering: pixelated;
  text-rendering: geometricPrecision;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 56px;
  }
}

@media (min-width: 1024px) {
  .section-title {
    font-size: 72px;
  }
}
```

## Key Features

1. **Pixel-Perfect Rendering**: Disabled font smoothing creates blocky, grid-aligned edges
2. **CLI Terminal Aesthetic**: Warm beige text on dark background mimics terminal output
3. **Responsive Scaling**: Sizes adjust across breakpoints while maintaining readability
4. **2-Line Hero Layout**: Max-width constraints force hero headlines to wrap into 2 lines
5. **Hierarchy**: H1 (hero) is larger than H2 (sections) for clear visual hierarchy

## Usage Notes

- Always use H1 for hero/page headlines
- Use H2 for section titles
- Don't override font-weight (keep at 500)
- Don't add letter-spacing (keep at 0)
- Maintain tight line-height for pixel aesthetic
- Use `!important` flags when overriding in component CSS

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (may need `-webkit-` prefixes)
- Mobile: Fully responsive across all devices
