import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Achievements from "./components/Achievements/Achievements";
import WhyHireMe from "./components/WhyHireMe/whyHireMe";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <WhyHireMe />
      <Contact />
    </div>
  );
}
