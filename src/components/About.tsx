import MyImage from '../styles/images/my-image.jpeg'
import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-red-500 mb-4">About Me</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Hi, I'm Arman Ali, a passionate Spftware developer with a focus on clean, user-friendly designs and effective problem-solving. I specialize in React.js, JavaScript, TypeScript, Node.js, and modern web technologies.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I believe in building websites that are not only visually appealing but also highly functional and easy to navigate. My goal is to create digital experiences that solve real problems and delight users.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-red-500 mb-2">3+</div>
                <p className="text-slate-400 text-sm">Years Experience</p>
              </div>
              <div>
                <div className="text-red-500 mb-2">10+</div>
                <p className="text-slate-400 text-sm">Projects Completed</p>
              </div>
              <div>
                <div className="text-red-500 mb-2">2+</div>
                <p className="text-slate-400 text-sm">Happy Clients</p>
              </div>
              <div>
                <div className="text-red-500 mb-2">15+</div>
                <p className="text-slate-400 text-sm">Student Guided</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square bg-slate-800 rounded-2xl overflow-hidden">
              <img
                src={MyImage}
                alt="Arman Ali"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <a
            href="https://www.linkedin.com/in/arman-ali-8383081ab/"
            target='_blank'
            className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-red-500 hover:bg-red-600/10 transition-colors"
          >
            <Linkedin size={20} className="text-slate-300" />
          </a>
          <a
            href="https://github.com/armanali0786/"
            target='_blank'
            className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-red-500 hover:bg-red-600/10 transition-colors"
          >
            <Github size={20} className="text-slate-300" />
          </a>
          <a href="https://drive.google.com/file/d/14wELUJubutsX3IZ6ctDiQa7x6wJNqUWB/view?usp=sharing" className="inline-block" target='_blank'>
            <button
              className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-full transition-colors cursor-pointer"
            >
              Download CV
            </button>
          </a>

        </div>
      </div>
    </section>
  );
}
