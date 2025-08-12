import { useEffect } from "react";
import { useLocation } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Contributions from "./Contributions";
import CurriculumVitae from "./CurriculumVitae";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contributions />
      <Contact />
      <Resume />
      <CurriculumVitae />
    </>
  );
};
