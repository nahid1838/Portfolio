/**
 * ============================================================
 *  PROJECTS DATA  —  THE ONLY FILE YOU EDIT FOR PROJECTS
 * ============================================================
 * Add, remove or edit projects here. Each project's `id`
 * becomes the URL:  /projects/<id>
 *
 * To use your own screenshot, drop it into  public/images/
 * and change the  image  field below (e.g. "/images/my-app.png").
 *
 * NOTE: The 3 projects below are PLACEHOLDERS written to match
 * the site's design. Replace the titles, links, images and text
 * with your real projects.
 */

export type Project = {
  /** URL slug — appears as /projects/<id> */
  id: string;
  title: string;
  /** One short line shown on the project card */
  tagline: string;
  /** Full paragraph shown on the detail page */
  description: string;
  /** Tech chips, e.g. ["Next.js", "MongoDB"] */
  techStack: string[];
  /** Image path in /public — placeholder gradient images included */
  image: string;
  /** [PLACEHOLDER] Replace with your real live demo URL */
  liveUrl: string;
  /** [PLACEHOLDER] Replace with your real repo URL */
  githubUrl: string;
  /** Bullet list of problems you solved */
  challenges: string[];
  /** Bullet list of what you plan to add next */
  futurePlans: string[];
};

export const projects: Project[] = [
  {
    id: "nexcart",
    title: "NexCart",
    tagline: "Full-stack e-commerce store with cart, checkout and admin dashboard.",
    description:
      "NexCart is a complete e-commerce web application built with the MERN stack. It features product browsing with search and category filters, a persistent shopping cart, a mock checkout flow, JWT authentication and a protected admin dashboard for managing products and orders. The UI is fully responsive and styled with Tailwind CSS, and the whole app is deployed on Vercel with the API hosted separately.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
    ],
    image: "/images/project-1.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/nahid1838",
    challenges: [
      "Keeping the cart state consistent across pages and after a reload.",
      "Designing a product schema flexible enough for variants and stock counts.",
      "Protecting admin routes on both the API and the client side.",
    ],
    futurePlans: [
      "Integrate a real payment gateway such as Stripe or bKash.",
      "Add product reviews and ratings.",
      "Improve search with debounced queries and filters stored in the URL.",
    ],
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    tagline: "Task manager with secure authentication and drag-and-drop boards.",
    description:
      "TaskFlow is a productivity app that lets a user sign up, log in securely and organise work on a drag-and-drop Kanban board. Authentication is handled with Better Auth, data is stored in MongoDB through Mongoose, and the frontend is built with Next.js App Router and TypeScript. Boards, columns and cards all update optimistically so the interface feels instant even before the server confirms the change.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
    ],
    image: "/images/project-2.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/nahid1838",
    challenges: [
      "Implementing smooth drag-and-drop that also works on touch devices.",
      "Setting up secure session-based authentication with Better Auth.",
      "Keeping board state in sync without excessive re-renders.",
    ],
    futurePlans: [
      "Add due dates, labels and task priorities.",
      "Support real-time collaboration between team members.",
      "Build a lightweight activity log for each board.",
    ],
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    tagline: "This site — a dark, animated portfolio built with Next.js and Tailwind.",
    description:
      "This portfolio is the site you are looking at. It is a single-page, dark-themed personal site built with Next.js 16, the App Router, TypeScript and Tailwind CSS v4. Content is kept in typed data files so it can be updated without touching markup, project detail pages are statically generated at build time, and every animation is hand-written with IntersectionObserver and CSS keyframes to keep the bundle small. It is fully responsive from 360px phones up to large desktops.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React 19",
      "IntersectionObserver",
    ],
    image: "/images/project-3.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/nahid1838",
    challenges: [
      "Matching the accent gradient across text, rings, bars and glows.",
      "Writing scroll-reveal animations that respect prefers-reduced-motion.",
      "Structuring content so every string lives in a single data file.",
    ],
    futurePlans: [
      "Add a blog section powered by MDX.",
      "Generate an OpenGraph image for social sharing.",
      "Add dark/light theme switching once a light palette is designed.",
    ],
  },
];

/** Look up a single project by its id, or undefined if it does not exist. */
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
