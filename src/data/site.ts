/**
 * SITE DATA
 * --------------------------------------------------
 * All personal information lives here.
 * Edit this file to change your name, tagline, contact
 * details and social links — no JSX changes needed.
 * Source of truth: info.txt
 */

export const site = {
  name: "Nadiul Islam Nahid",
  displayName: "Nahid",
  designation: "Full Stack Developer",
  tagline: "I build fast, responsive and user-friendly web applications.",
  location: "Dhaka, Bangladesh",
  /** Placeholder path — replace with your real PDF at public/resume/Nahid-Resume.pdf */
  resumeUrl: "/resume/Nahid-Resume.pdf",
  photo: "/images/profile.png",
  email: "md.nahid186502@gmail.com",
  phones: ["01690197119", "01804828440"],
  whatsapp: "01690197119",
  /** [PLACEHOLDER] Add your WhatsApp number in international format, e.g. "8801690197119" */
  whatsappLink: "https://wa.me/8801690197119",
} as const;

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/nahid1838",
    handle: "github.com/nahid1838",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nadiul-islam-nahid/",
    handle: "in/nadiul-islam-nahid",
  },
] as const;

/** Navbar + section anchors (single scrolling page) */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

/** "About Me" content — straight from info.txt */
export const about = {
  title: "About Me",
  subtitle: "Full Stack Developer from Dhaka, Bangladesh",
  blocks: [
    {
      heading: "Who I Am",
      text: "Hi, I'm Nadiul Islam Nahid, a web developer based in Dhaka, Bangladesh. I'm training to become a Full Stack Developer through Programming Hero's Complete Web Development course (Batch 14), building complete web applications from interface to database.",
    },
    {
      heading: "My Journey",
      text: "I started with HTML, CSS and JavaScript, then moved to Tailwind CSS, TypeScript and Next.js. I'm now growing on the backend with Node.js, Express.js, MongoDB and secure authentication using Better Auth. I learn by building, so every new concept becomes a real project deployed live on Vercel.",
    },
    {
      heading: "What I Enjoy",
      text: "I enjoy crafting clean, responsive interfaces and connecting them to reliable backends. I care about details like readable code, smooth interactions and a clear structure, and I like solving problems one step at a time.",
    },
    {
      heading: "Beyond Code",
      text: "Outside programming, I'm interested in web design and visual aesthetics, and I enjoy making cartoon-style video content. Both keep me creative and help me think more visually when I design websites.",
    },
    {
      heading: "My Goal",
      text: "I'm aiming to grow into a professional full stack developer and contribute to real-world products. I'm open to internships, junior developer roles and freelance projects.",
    },
  ],
  personality: ["Curious", "Consistent", "Creative", "Detail-oriented", "Fast learner"],
  quickFacts: [
    { label: "Location", value: "Dhaka, Bangladesh" },
    { label: "Learning", value: "Programming Hero" },
    { label: "Focus", value: "Next.js, TypeScript, MongoDB" },
    { label: "Interests", value: "Web Design, Video Content" },
  ],
} as const;
