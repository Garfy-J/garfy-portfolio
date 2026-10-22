import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Strengths from "@/components/Strengths";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import CaseStudies from "@/components/CaseStudies";
import AIProjects from "@/components/AIProjects";
import MusicProduction from "@/components/MusicProduction";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Strengths />
        <Experience />
        <Skills />
        <Education />
        <CaseStudies />
        <AIProjects />
        <MusicProduction />
        <Writing />
        <Contact />
      </main>
    </>
  );
}
