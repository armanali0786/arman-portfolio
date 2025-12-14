import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white mb-1 text-4xl font-bold">Arman Ali</h1>
            <p className="text-sm text-slate-400">Software Developer | Full Stack Developer | Problem Solver</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-white transition-colors cursor-pointer">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-white transition-colors cursor-pointer">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-300 hover:text-white transition-colors cursor-pointer">
              Experience
            </button>
            <button onClick={() => scrollToSection('mentorship')} className="text-slate-300 hover:text-white transition-colors cursor-pointer">
              Mentorship
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-slate-300 hover:text-white transition-colors cursor-pointer">
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-full transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-slate-800 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left">
              Experience
            </button>
            <button onClick={() => scrollToSection('mentorship')} className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left">
              Mentorship
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left">
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-full transition-colors cursor-pointer text-left"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}