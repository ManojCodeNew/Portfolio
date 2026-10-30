import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationSection from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import data from './data/portfolio';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#31AAA9] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero profile={data.profile} />
        <About profile={data.profile} />
        <Experience experiences={data.experiences} />
        <Projects projects={data.projects} />
        <Skills skillCategories={data.skillCategories} />
        <EducationSection
          education={data.education}
          certifications={data.certifications}
        />
        <Contact profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
    </div>
  );
}