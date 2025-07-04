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
      <AnimatedSection type="fadeUp"><Hero /></AnimatedSection>
      <AnimatedSection type="fadeLeft"><About /></AnimatedSection>
      <AnimatedSection type="zoomIn"><Experience /></AnimatedSection>
    <ProjectsBento />
      <AnimatedSection type="fadeUp"><Skills /></AnimatedSection>
      <AnimatedSection type="rotate"><Education /></AnimatedSection>
      <AnimatedSection type="fadeLeft"><Languages /></AnimatedSection>
      <AnimatedSection type="zoomIn"><SoftSkills /></AnimatedSection>
      <AnimatedSection type="fadeRight"><Extracurricular /></AnimatedSection>
      <AnimatedSection type="fadeUp"><Contact /></AnimatedSection>
    </div>
  );
}

export default App;
