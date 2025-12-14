import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm flex items-center gap-2">
            © 2025 Jonathan Doe. Made with <Heart size={16} className="text-red-500 fill-red-500" /> and code
          </p>
          <div className="flex gap-6">
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-slate-400 hover:text-red-500 transition-colors text-sm"
            >
              About
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-slate-400 hover:text-red-500 transition-colors text-sm"
            >
              Projects
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('gallery');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-slate-400 hover:text-red-500 transition-colors text-sm"
            >
              Gallery
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('mentorship');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-slate-400 hover:text-red-500 transition-colors text-sm"
            >
              Mentorship
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-slate-400 hover:text-red-500 transition-colors text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}