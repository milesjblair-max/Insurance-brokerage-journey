# Howden Agentic AI Storyboard

A premium, responsive, data-driven storyboard website for Howden Broking Group, showcasing the end-to-end journey of Agentic AI in insurance broking.

## Features
- **Client-Agnostic**: All content is driven by `/data/storyboard.json`.
- **Responsive Design**: Optimized for phone, tablet, laptop, and large desktop screens.
- **Premium Aesthetic**: Dark theme with purple accents, subtle gradients, and glassmorphism.
- **Interactive Storyboard**: 12-step flow with filters for Human-in-the-loop and Systems visibility.
- **Architecture & Governance**: Visual representation of the agentic stack and safety guardrails.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Static Export (GitHub Pages compatible)

## Getting Started

### 1. Installation
```bash
npm install
```

### 2. Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build & Static Export
To generate the static files in the `out/` directory:
```bash
npm run build
```

## GitHub Pages Deployment

### Prerequisites
- Ensure `next.config.ts` has the correct `basePath` if you are hosting under a subfolder (e.g., `https://username.github.io/repo-name/`).
- Set the environment variable `NEXT_PUBLIC_BASE_PATH` during the build process if needed.

### Steps
1. Push your code to a GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Use the standard "Next.js" starter workflow provided by GitHub.

Alternatively, to build manually and push the `out` folder:
```bash
# Example for manual push to gh-pages branch
npx touch out/.nojekyll
npx gh-pages -d out
```

## Configuration
Edit `/data/storyboard.json` to update:
- Brand names and taglines.
- KPI values and labels.
- Personas and their roles.
- Storyboard phases, steps, and artifacts.
- Capabilities, Architecture layers, and Governance points.

## Project Structure
```text
├── data/
│   └── storyboard.json      # Single source of truth for content
├── src/
│   ├── app/                 # Next.js App Router (Layouts & Pages)
│   ├── components/          # Reusable UI components
│   └── lib/                 # Types and data loaders
├── public/                  # Static assets (avatars, icons)
└── next.config.ts           # Static export configuration
```
