import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import Strengths from "@/components/Strengths";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import CaseStudies from "@/components/CaseStudies";
import AIProjects from "@/components/AIProjects";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Reveal>
          <Strengths />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <CaseStudies />
        </Reveal>
        <Reveal>
          <AIProjects />
        </Reveal>
        <Reveal>
          <Writing />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
    </>
  );
}
