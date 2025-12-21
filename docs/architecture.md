# Architecture & Design Decisions

## Overview

This document outlines the key architectural decisions made during development of the portfolio website.

---

## Design System Architecture

### Theme: Dark Glassmorphism

**Decision**: Use a dark glassmorphism aesthetic with soft white/silver glow accents and orange/amber accent colors.

**Rationale**:
- Creates a modern, premium feel suitable for a creative agency
- Glassmorphism provides depth without heavy visual weight
- Dark theme reduces eye strain and feels contemporary
- Orange accent (#FF6B00) provides high contrast for CTAs

**Implementation**:
- CSS custom properties in `src/index.css` for theming
- Tailwind config extended with design tokens
- All colors use HSL format for consistency
- Semantic token naming (primary, secondary, accent, etc.)

---

## Performance Optimizations

### CSS Animations over Framer Motion

**Decision**: Replace framer-motion animations with CSS-based animations for most use cases.

**Rationale**:
- Reduced JavaScript bundle size
- Better performance on mobile devices
- CSS animations are GPU-accelerated
- Framer Motion retained only where complex orchestration needed

**Implementation**:
- CSS keyframes in index.css
- Tailwind animation utilities
- Framer Motion for complex page transitions only

### Mobile-Specific Optimizations

**Decision**: Enable marquee/infinite scroll animations only on mobile devices.

**Rationale**:
- Desktop users don't need scrolling text to save space
- Reduces unnecessary animation overhead on larger screens
- Mobile users benefit from space-efficient scrolling content

---

## Component Architecture

### Structure

```
src/
├── components/
│   ├── ui/           # Shadcn/ui base components
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── WorksSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── ...
├── pages/
│   ├── Index.tsx     # Homepage composition
│   ├── Works.tsx     # Portfolio page
│   ├── Privacy.tsx   # Legal page
│   └── NotFound.tsx
├── hooks/
│   └── use-mobile.tsx
└── assets/
    └── [images]
```

### Component Guidelines

1. **Section Components**: Each major page section is a self-contained component
2. **UI Components**: Shadcn/ui provides base components, customized for theme
3. **Pages**: Compose section components, minimal logic
4. **Hooks**: Shared stateful logic (mobile detection, etc.)

---

## Routing Architecture

### React Router v6

**Routes**:
- `/` - Homepage
- `/works` - Portfolio/Projects page
- `/privacy` - Privacy policy
- `*` - 404 Not Found

**Navigation Behavior**:
- `ScrollToTop` component ensures pages load at top
- Manual scroll handling for internal navigation buttons
- Smooth scroll disabled for cross-page navigation

---

## Asset Management

### Images

**Decision**: Store images in `src/assets/` and import as ES6 modules.

**Rationale**:
- Vite optimizes imported assets
- Type safety for asset paths
- Better bundling and caching

**Implementation**:
```tsx
import behanceLogo from "@/assets/behance.png";
```

### Social Media Icons

**Decision**: Mix of Lucide icons and custom image assets.

**Rationale**:
- Lucide provides consistent icon set
- Custom images for brand-specific icons (Behance)
- Conditional rendering based on icon type

---

## State Management

### Current Approach

**Decision**: Use React's built-in state (useState, useContext) - no external state library.

**Rationale**:
- Application is primarily static/presentational
- No complex state synchronization needs
- Reduces bundle size and complexity

**Future Consideration**:
- If CMS/database integration added, evaluate React Query for server state
- Supabase client already installed for future use

---

## Responsive Design Strategy

### Breakpoints

Following Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile Navigation

**Decision**: Hamburger menu below `lg` breakpoint, sidebar slides from left.

**Rationale**:
- Provides full navigation on mobile without cluttering UI
- Slide animation feels native and smooth
- Consistent with modern mobile UX patterns

---

## Backend Readiness

### Supabase Integration

**Status**: Client configured, not actively used.

**Prepared For**:
- User authentication
- Project/portfolio data storage
- Contact form submissions
- File storage for project images

**Files**:
- `src/integrations/supabase/client.ts` - Supabase client
- `supabase/config.toml` - Supabase configuration
