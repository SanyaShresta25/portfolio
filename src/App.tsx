import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ProjectsBento from './components/ProjectsBento';
import Skills from './components/Skills';
import Education from './components/Education';
import Languages from './components/Languages';
import SoftSkills from './components/SoftSkills';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 overflow-x-hidden">
      <Header />

      <AnimatedSection type="fadeUp">
        <div id="hero">
          <Hero />
        </div>
      </AnimatedSection>

      <AnimatedSection type="fadeLeft">
        <div id="about">
          <About />
        </div>
      </AnimatedSection>

      <AnimatedSection type="zoomIn">
        <div id="experience">
          <Experience />
        </div>
      </AnimatedSection>

      <div id="projects">
        <ProjectsBento />
      </div>

      <AnimatedSection type="fadeUp">
        <div id="skills">
          <Skills />
        </div>
      </AnimatedSection>

      <AnimatedSection type="rotate">
        <div id="education">
          <Education />
        </div>
      </AnimatedSection>

      <AnimatedSection type="fadeLeft">
        <div id="languages">
          <Languages />
        </div>
      </AnimatedSection>

      <AnimatedSection type="zoomIn">
        <div id="softskills">
          <SoftSkills />
        </div>
      </AnimatedSection>

      <AnimatedSection type="fadeRight">
        <div id="extracurricular">
          <Extracurricular />
        </div>
      </AnimatedSection>

      <AnimatedSection type="fadeUp">
        <div id="contact">
          <Contact />
        </div>
      </AnimatedSection>
    </div>
  );
}

export default App;
