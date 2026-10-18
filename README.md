# Nadiul Islam Nahid — Portfolio

Personal portfolio website of **Nadiul Islam Nahid (Nahid)**, a Full Stack Developer based in Dhaka, Bangladesh.

> "I build fast, responsive and user-friendly web applications."

A single-page, dark-themed portfolio with project detail pages — built to feel premium, modern and minimal.

---

## Tech Stack

| Layer      | Choice                                   |
| ---------- | ---------------------------------------- |
| Framework  | **Next.js 16** (App Router)              |
| Language   | TypeScript                               |
| UI         | React 19                                 |
| Styling    | **Tailwind CSS v4** (CSS-first `@theme`) |
| Icons      | lucide-react                             |
| Compiler   | React Compiler (enabled)                 |
| Deploy     | Vercel                                   |

---

## Features

- **Dark theme only** — near-black background, dark card surfaces with faint borders, and a signature cyan → violet → pink accent gradient.
- **Single scrolling home page** — Navbar, Hero, About Me, Skills, Projects, Contact, Footer (no Education/Experience sections).
- **Sticky navbar** with smooth scrolling, blur backdrop, active scroll state and a mobile hamburger menu.
- **Hero** with designation, short intro, Download Resume button, social icon buttons, and a profile photo shown as a perfect circle with an animated gradient ring.
- **About Me** with five content blocks, personality keyword chips and a Quick Facts card.
- **Skills** shown as categorized cards with animated progress bars that fill on scroll.
- **Projects** — 3 cards linking to detail pages at `/projects/[id]`, each showing tech stack, description, live link, GitHub link, challenges faced and future plans.
- **Contact** — clickable email / phone / WhatsApp cards. No form, no backend.
- **Scroll-reveal animations**, hover lift effects and soft glows — all custom (no animation library).
- **Fully responsive** from 360px phones to large desktops, and respects `prefers-reduced-motion`.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              Root layout: fonts, metadata, Navbar + Footer
│   ├── page.tsx                Home — composes all sections
│   ├── globals.css             Tailwind v4 design tokens + keyframes
│   └── projects/[id]/
│       ├── page.tsx            Project detail page (statically generated)
│       └── not-found.tsx       Friendly 404 for unknown project ids
├── components/
│   ├── Navbar.tsx              Sticky nav, smooth scroll, hamburger menu
│   ├── Hero.tsx                Intro, buttons, photo with gradient ring
│   ├── AboutMe.tsx             Bio blocks + quick facts
│   ├── Skills.tsx              Categorized skill cards
│   ├── SkillBar.tsx            Animated progress bar
│   ├── Projects.tsx            Project grid
│   ├── ProjectCard.tsx         One project card
│   ├── Contact.tsx             Clickable contact cards
│   ├── Footer.tsx              Footer with socials
│   ├── SectionHeading.tsx      Reusable section header
│   └── Reveal.tsx              Scroll-reveal wrapper
└── data/
    ├── site.ts                 Name, tagline, contact, socials, about content
    ├── skills.ts               Skill categories + levels
    └── projects.ts             ← The only file you edit for projects
public/
└── images/                     profile.png + project placeholder images
```

---

## Editing Your Content

All content lives in typed data files — **no JSX changes needed**.

### Projects — `src/data/projects.ts`

This is the **only file you edit** to change projects. Each project's `id` becomes its URL (`/projects/<id>`).

```ts
export type Project = {
  id: string;           // URL slug → /projects/<id>
  title: string;
  tagline: string;      // one line on the card
  description: string;  // full paragraph on the detail page
  techStack: string[];  // tech chips
  image: string;        // "/images/your-screenshot.png"
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  futurePlans: string[];
};
```

To use a real screenshot: drop it into `public/images/` and change the `image` field.

### Skills — `src/data/skills.ts`

Categories with `{ name, level }` (level is 0–100 and drives the progress bar).

### Everything else — `src/data/site.ts`

Name, tagline, contact details, social links, About Me content and nav links.

---

## Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

Open [http://localhost:3000](http://localhost:3000).

---

## ⚠️ Placeholders Still To Replace

The following are clearly marked placeholders — search the codebase for `[PLACEHOLDER]` or review the list below.

| Item | Where to change it | Current placeholder value |
| ---- | ------------------ | ------------------------- |
| **Resume PDF** | Drop file at `public/resume/Nahid-Resume.pdf` | Button points to `/resume/Nahid-Resume.pdf` (no file yet) |
| **3 project titles & text** | `src/data/projects.ts` | "NexCart", "TaskFlow", "Developer Portfolio" (invented placeholders) |
| **Project images** | `public/images/` + `image` field in `projects.ts` | `project-1.svg`, `project-2.svg`, `project-3.svg` gradient placeholders |
| **Live demo URLs** | `liveUrl` in `src/data/projects.ts` | `https://example.com` |
| **GitHub repo URLs** | `githubUrl` in `src/data/projects.ts` | `https://github.com/nahid1838` (profile, not per-repo) |
| **WhatsApp link** | `whatsappLink` in `src/data/site.ts` | `https://wa.me/8801690197119` (verify international format) |
| **Skill levels** | `level` in `src/data/skills.ts` | Estimated values — adjust to your honest level |
| **Profile photo** | `public/images/profile.png` | Your real photo (already in place) |

> **Note:** The `skills`, `about`, `contact` and `socials` content is taken directly from `info.txt`. Only the **projects** and **skill proficiency levels** are placeholders, since real project details weren't provided.

---

## Personal Details

| Field | Value |
| ----- | ----- |
| Full Name | Nadiul Islam Nahid |
| Display Name | Nahid |
| Designation | Full Stack Developer |
| Location | Dhaka, Bangladesh |
| Email | md.nahid186502@gmail.com |
| Phone | 01690197119 / 01804828440 |
| WhatsApp | 01690197119 |
| GitHub | [github.com/nahid1838](https://github.com/nahid1838) |
| LinkedIn | [in/nadiul-islam-nahid](https://www.linkedin.com/in/nadiul-islam-nahid/) |

---

## Deployment

Deployed on **[Vercel](https://vercel.com)**. Push to your repository and import it in Vercel, or run:

```bash
npm i -g vercel
vercel
```
