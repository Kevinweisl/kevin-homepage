# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run lint` - Run ESLint checks
- `npm start` - Start production server

## Architecture Overview

This is Kevin Wei's personal academic homepage built with Next.js 15 and TypeScript, using the App Router pattern with server and client components.

### Data Management Pattern

Content is centrally managed in `/src/data/` with TypeScript interfaces:

- **Publications** (`publications.ts`): Academic papers with metadata including venue, authors, links, and `featured` flag for homepage display
- **Experience** (`experience.ts`): Categorized professional experience with computed exports `currentPhd` and `latestWork` for homepage highlights

Data is statically imported and type-safe throughout the application.

### Component Architecture

**Reusable Layout Components:**
- `Section.tsx` - Standardized section wrapper with consistent spacing and background colors
- `Hero.tsx` - Homepage profile section
- `Navbar.tsx` - Responsive navigation with mobile menu (client component)

**Content Display Components:**
- `PublicationItem.tsx` - Rich publication display with expandable abstract/bibtex
- `PublicationList.tsx` - Filterable publication list with search (client component)
- `ExperienceItem.tsx` - Timeline-style experience entries
- `ExperienceList.tsx` - Categorized experience display

### Page Structure

- **Homepage** (`/`) - Selected publications and experience highlights with links to full pages
- **Publications** (`/publications`) - Full searchable publication list
- **Experience** (`/experience`) - Complete professional timeline

Pages use Next.js Metadata API for SEO and follow server component pattern by default.

### Styling System

Uses Tailwind CSS v4 with utility-first approach:
- Color scheme: indigo/blue primary, gray neutrals
- Responsive design with mobile-first approach
- Interactive elements with hover states and transitions
- Card-based layouts for content display

### Import Pattern

Uses absolute imports with `@/` prefix (configured in `tsconfig.json`):
```typescript
import Hero from '@/components/Hero';
import { currentPhd } from '@/data/experience';
```

### Content Updates

To add new content:
1. **Publications**: Add entries to `publications.ts` array with proper typing
2. **Experience**: Add to appropriate category in `experience.ts`
3. Components automatically render new data due to map operations

### Development Notes

- Client components are marked with `'use client'` directive and used sparingly for interactivity
- Search functionality is implemented client-side with debouncing
- Homepage shows filtered content using `featured` flags and computed data exports