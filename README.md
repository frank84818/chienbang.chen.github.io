# chienbang.chen.github.io

My personal static website hosted on GitHub Pages, built with **Next.js** and **Tailwind CSS**. This repository serves as a hub for my professional profile (CV), personal milestones (Wedding), and other public information.

## 🚀 Features

- **Multi-page Architecture**: Separate sections for CV, Wedding, and more.
- **Fast & SEO Optimized**: Static Site Generation (SSG) for instant loading and search visibility.
- **Responsive Design**: Mobile-first UI using Tailwind CSS.
- **Future Ready**: Built with a modular structure to support Firebase integration (Auth/Database) in the future.

## 🛠️ Technology Stack

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Hosting**: [GitHub Pages](https://pages.github.com/)

## 🏁 Getting Started

### Prerequisites
- Node.js 18.17 or later.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/chienbang/chienbang.chen.github.io.git
   cd chienbang.chen.github.io
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Local Development
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Deployment

This project is configured for **Static Export**.

1. **Build the project**:
   ```bash
   npm run build
   ```
   This will generate an `out/` folder containing the static HTML/CSS/JS files.

2. **GitHub Pages Configuration**:
   The site is automatically deployed via GitHub Actions whenever changes are pushed to the `main` branch. Ensure the GitHub Repository settings are set to deploy from the `gh-pages` branch or the designated Action.

## 📐 Architecture
For details on the project structure and design decisions, please refer to [ARCHITECTURE.md](./ARCHITECTURE.md).

## 📄 License
This project is licensed under the [LICENSE](./LICENSE) file.
