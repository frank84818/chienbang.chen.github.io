# System Architecture: chienbang.chen.github.io

This document outlines the architectural design and technology choices for the personal static website hosted on GitHub Pages.

## 1. Objective
Build a high-performance, SEO-friendly, and maintainable personal website capable of hosting diverse content types (e.g., CV, Wedding details) while remaining extensible for future backend features (e.g., Firebase).

## 2. Technology Stack
*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
    *   *Reason*: Industry standard for React-based static site generation (SSG) with excellent routing and optimization features.
*   **Language**: TypeScript
    *   *Reason*: Provides type safety and better developer experience for long-term maintenance.
*   **Styling**: Tailwind CSS
    *   *Reason*: Utility-first CSS for rapid UI development and small bundle sizes.
*   **Deployment**: GitHub Pages (Static Export)
    *   *Reason*: Cost-free hosting for static assets with direct integration with the repository.

## 3. Core Architectural Patterns

### Routing (Multi-page Support)
Utilizes the Next.js **App Router** to achieve clean separation between different site sections:
- `/cv`: Professional resume and projects.
- `/wedding`: Information regarding wedding events, RSVP (future), and galleries.
- `/`: Landing page or navigation hub.

### Static Export Strategy
The project is configured for **Static Site Generation (SSG)** using `output: 'export'` in `next.config.js`. This generates raw HTML/CSS/JS files that can be hosted on GitHub Pages without a Node.js server.

### Future Extensibility (Firebase)
While the initial launch is purely static, the architecture is "Firebase-ready":
- **Authentication**: Easy integration for protected wedding information or private CV sections.
- **Firestore/Realtime Database**: Planned for dynamic features like an RSVP system or a simple guestbook.
- **Hosting**: Seamless migration from GitHub Pages to Firebase Hosting if complex backend logic (Cloud Functions) is required.

## 4. Directory Structure
```text
/
├── public/              # Static assets (images, icons, resumes)
├── src/
│   ├── app/             # Routing and Page components (App Router)
│   │   ├── cv/          # CV route
│   │   ├── wedding/     # Wedding route
│   │   └── layout.tsx   # Root layout (Navigation, Footer)
│   ├── components/      # Reusable UI components
│   ├── lib/             # Utility functions and shared logic
│   └── styles/          # Global CSS and Tailwind config
├── ARCHITECTURE.md      # System design documentation
└── README.md            # Project overview and setup
```

## 5. Deployment Workflow
1.  **Develop**: Local development using `npm run dev`.
2.  **Build**: Run `npm run build` to generate the `out/` directory (static files).
3.  **Deploy**: Push to the `main` branch or use GitHub Actions to deploy the `out/` directory to the `gh-pages` branch.
