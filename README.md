# Astro + Tailwind CSS + Cloudflare Workers Template

A production-ready template for building fast, modern websites with Astro's island architecture.

## Tech Stack

- **Astro 5** - Island architecture for optimal performance
- **React 19** - For interactive components
- **Tailwind CSS v4** - Utility-first CSS framework
- **Cloudflare Workers** - Edge deployment

## Features

- ✅ Island architecture (minimal JavaScript)
- ✅ Tailwind CSS v4 with custom theme
- ✅ React components with `client:visible` directive
- ✅ TypeScript support
- ✅ Cloudflare Workers deployment ready
- ✅ SEO optimized (sitemap, robots.txt, structured data)
- ✅ Responsive design
- ✅ Accessibility focused

## Quick Start

```bash
# Clone this template
npx degit yahsan2/astro-tailwind-workers-template my-project
cd my-project

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Workers
npm run deploy
```

## Project Structure

```
/
├── public/
│   ├── robots.txt
│   └── images/
├── src/
│   ├── components/
│   │   ├── BaseHead.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── react/
│   │       └── ContactForm.tsx
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── wrangler.toml
```

## Customization

### 1. Update project-code placeholders

Replace `__PROJECT_CODE__` in these files:
- `package.json` - name field
- `wrangler.toml` - name field
- `astro.config.mjs` - site field
- `public/robots.txt` - sitemap URL

### 2. Customize theme

Edit `src/styles/global.css` to change theme colors:

```css
@theme {
  --color-primary: #7C9A82;    /* Your brand color */
  --color-secondary: #D4A574;
  --color-accent: #A8D8B9;
}
```

### 3. Configure deployment

Update `wrangler.toml` with your Cloudflare account details.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to Cloudflare Workers

## License

MIT
