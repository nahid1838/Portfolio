import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

/**
 * Home — a single scrolling page:
 * Navbar → Hero → About Me → Skills → Projects → Contact → Footer
 * (Navbar and Footer are rendered in the root layout.)
 */
export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
