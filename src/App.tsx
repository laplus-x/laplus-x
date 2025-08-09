import About from "./components/About";
import Contact from "./components/Contact";
import Contributions from "./components/Contributions";
import Copyright from "./components/Copyright";
import CurriculumVitae from "./components/CurriculumVitae";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[#050b1e] min-h-screen text-gray-100">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contributions />
        <Contact />
        <Resume />
        <CurriculumVitae />
      </main>
      <Copyright />
    </div>
  );
}

export default App;
