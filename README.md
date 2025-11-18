# BioVida - Next.js Landing Page

A modern landing page for BioVida, built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `app/` - Next.js app directory
  - `layout.tsx` - Root layout with metadata
  - `page.tsx` - Main landing page component
  - `globals.css` - Global styles and Tailwind imports
- `public/` - Static assets (images, etc.)
  - `biovida-logo.png` - BioVida logo
- `tailwind.config.ts` - Tailwind CSS configuration with custom colors
- `package.json` - Dependencies and scripts

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS with custom theme
- ✅ React Feather Icons
- ✅ Parallax scrolling effect
- ✅ Responsive design
- ✅ Custom animations

## Customization

The Tailwind config includes custom colors:
- `solar` - Solar energy theme colors (light, DEFAULT, dark)
- `biovida` - BioVida brand colors (DEFAULT, soft, dark)

Custom animations are defined in `app/globals.css`:
- `fadeInUp` - Fade in with upward motion
- `softFloat` - Gentle floating animation

