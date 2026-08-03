import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import TechStack from "@/components/sections/TechStack";
import ScrollToTop from "@/components/layout/ScrollToTop";
import GitHub from "@/components/sections/GitHub";
export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHub />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <TechStack />
      <ScrollToTop />
      
    </>
  );
}