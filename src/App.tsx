import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Mentorship } from './components/Mentorship';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Mentorship />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}