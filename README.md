# Vansh Singh — Personal Portfolio

A modern, responsive, production-ready personal portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- 🌙 **Dark / Light mode** toggle
- 🎬 **Framer Motion** animations with scroll-reveal
- ⌨️ **Typing animation** in hero section (`react-type-animation`)
- 📊 **Animated counters** (`react-countup`)
- 🔍 **Project filtering** by category
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🎨 **Glassmorphism** cards and gradient accents
- 📜 **Scroll progress bar** + **Back-to-top** button
- 💫 **Loading screen** animation
- 🔎 **SEO optimised** with Next.js metadata API
- 🚀 **Vercel-ready** deployment

---

## 🏗️ Project Structure

```
vansh-portfolio/
├── public/
│   ├── favicon.svg              # Custom VS favicon
│   └── resume-vansh-singh.pdf   # ← Add your resume here
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout + fonts + metadata
│   │   ├── page.tsx             # Main page (assembles sections)
│   │   └── globals.css          # Global styles + CSS variables
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky nav with theme toggle
│   │   │   └── Footer.tsx       # Footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Hero with typing + stats
│   │   │   ├── About.tsx        # About + avatar
│   │   │   ├── Education.tsx    # Timeline layout
│   │   │   ├── Skills.tsx       # Categorised skill cards
│   │   │   ├── Experience.tsx   # Internship card
│   │   │   ├── Projects.tsx     # Filterable project cards
│   │   │   ├── Certifications.tsx
│   │   │   ├── Achievements.tsx # Animated counters
│   │   │   └── Contact.tsx      # Form + contact links
│   │   └── ui/
│   │       ├── Loader.tsx       # Loading screen
│   │       ├── ScrollProgress.tsx
│   │       └── BackToTop.tsx
│   ├── hooks/
│   │   └── useScrollProgress.ts
│   └── lib/
│       ├── data.ts              # ← ALL content lives here
│       └── utils.ts
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── vercel.json
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Add your resume
Replace `/public/resume-vansh-singh.pdf` with your actual resume PDF.

### 3. Update personal info
Edit `src/lib/data.ts` — update `PERSONAL` with your real links:
```ts
export const PERSONAL = {
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume-vansh-singh.pdf",
  ...
};
```

### 4. Run locally
```bash
npm run dev
# Open http://localhost:3000
```

### 5. Build for production
```bash
npm run build
npm run start
```

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — GitHub + Vercel (recommended)
1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

---

## 🎨 Customisation

| File | What to change |
|---|---|
| `src/lib/data.ts` | All content: projects, skills, certs, education |
| `src/app/globals.css` | CSS variables / colour palette |
| `tailwind.config.ts` | Extend theme / add colours |
| `public/favicon.svg` | Favicon |
| `src/app/layout.tsx` | SEO metadata, Open Graph |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| react-type-animation | Hero typing effect |
| react-countup | Animated achievement counters |
| react-intersection-observer | Scroll-triggered animations |
| lucide-react | Icons |
| Vercel | Deployment |

---

## 📄 License

MIT — feel free to use this as a template for your own portfolio.

---

*Designed and Developed by Vansh Singh © 2026*
