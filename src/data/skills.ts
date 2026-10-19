import type { TechIconName } from "@/components/TechIcons";

/**
 * SKILLS DATA
 * --------------------------------------------------
 * Categories and skills with a proficiency level (0-100).
 * The level drives the animated progress bar.
 * Also holds the technology logo list used by the tech grid.
 * Adjust any level to taste — content from info.txt.
 */

export type Skill = {
  name: string;
  /** Proficiency 0-100, controls the progress bar fill */
  level: number;
};

export type SkillCategory = {
  title: string;
  /** Short note shown under the category title */
  note: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    note: "Interfaces people actually enjoy using",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "DaisyUI / Component libraries", level: 82 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "TypeScript", level: 80 },
      { name: "React.js", level: 85 },
      { name: "Next.js (App Router)", level: 82 },
      { name: "Responsive Web Design", level: 93 },
    ],
  },
  {
    title: "Backend",
    note: "Reliable APIs and secure auth",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "REST API Development", level: 76 },
      { name: "Authentication (Better Auth, JWT)", level: 72 },
    ],
  },
  {
    title: "Database",
    note: "Storing and modelling data",
    skills: [
      { name: "MongoDB / MongoDB Atlas", level: 78 },
      { name: "Mongoose", level: 74 },
    ],
  },
  {
    title: "Tools & Platforms",
    note: "The daily workflow",
    skills: [
      { name: "Git and GitHub", level: 85 },
      { name: "VS Code", level: 92 },
      { name: "DaisyUI", level: 82 },
      { name: "HeroUI", level: 70 },
      { name: "Shadcn", level: 70 },
      { name: "Vercel (Deployment)", level: 84 },
      { name: "Postman", level: 78 },
      { name: "Firebase", level: 65 },
      { name: "AI-assisted development", level: 88 },
    ],
  },
];

export type Technology = {
  /** Display name on the tech card */
  name: string;
  /** Key into the `techIcons` map (see src/components/TechIcons.tsx) */
  icon: TechIconName;
};

/**
 * TECHNOLOGIES
 * --------------------------------------------------
 * Compact logo grid shown in the right column of the Skills
 * section. Every entry is a real technology from info.txt and
 * `icon` must be a valid key exported by TechIcons.tsx.
 */
export const technologies: Technology[] = [
  // Frontend
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "DaisyUI", icon: "daisyui" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React.js", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  // Backend
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Express.js", icon: "express" },
  { name: "REST API", icon: "restapi" },
  { name: "Better Auth", icon: "betterauth" },
  { name: "JWT", icon: "jwt" },
  // Database
  { name: "MongoDB", icon: "mongodb" },
  { name: "Mongoose", icon: "mongoose" },
  // Tools & platforms
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "VS Code", icon: "vscode" },
  { name: "HeroUI", icon: "heroui" },
  { name: "Shadcn", icon: "shadcn" },
  { name: "Vercel", icon: "vercel" },
  { name: "Postman", icon: "postman" },
  { name: "Firebase", icon: "firebase" },
  { name: "AI-assisted dev", icon: "ai" },
];
