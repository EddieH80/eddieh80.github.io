# Personal Website
https://eddieh80.github.io/

Forked template from https://github.com/RyanFitzgerald/devportfolio

## Project Structure

```
eddieh80.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Builds and deploys to GitHub Pages on push to master
├── public/
│   ├── apple-touch-icon.png     # Home-screen icon for iOS
│   ├── favicon.svg              # Site favicon ("eh.")
│   ├── favicon-32.png           # PNG favicon fallback
│   └── resume.pdf               # Resume linked from the social icons
├── src/
│   ├── assets/                  # Profile photos, project images, and company/school logos
│   ├── components/              # Astro components
│   │   ├── About.astro          # About section
│   │   ├── Education.astro      # Education section
│   │   ├── Experience.astro     # Work experience section
│   │   ├── Footer.astro         # Site footer
│   │   ├── Header.astro         # Navigation header
│   │   ├── Hero.astro           # Hero/intro section with photo carousel
│   │   └── Projects.astro       # Projects showcase with tag filters
│   ├── pages/
│   │   └── index.astro          # Main page layout
│   ├── scripts/
│   │   └── expandable.ts        # "Read more" toggles on cards
│   ├── styles/
│   │   └── global.css           # Global styles (Tailwind import, font, text color)
│   └── config.ts                # Site configuration
├── astro.config.mjs             # Astro configuration (Tailwind via @tailwindcss/vite)
├── package.json                 # Project dependencies
└── tsconfig.json                # TypeScript configuration
```

## License

This project is fully and completely MIT. See LICENSE.md.
