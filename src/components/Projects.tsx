import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NTU1MjI4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features. Developed using React Native and Firebase.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NjE0MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
      github: '#',
      live: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization, reporting, and insights. Features interactive charts and customizable widgets.',
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1NjUxNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'D3.js', 'PostgreSQL', 'Express'],
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio Builder',
      description: 'A drag-and-drop portfolio builder that helps developers and designers create stunning portfolio websites without coding.',
      image: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NTY0Njk2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Tailwind CSS', 'Next.js', 'Supabase'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-500 mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work and projects I'm proud of
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-red-500 transition-all"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-slate-300 hover:text-red-500 transition-colors text-sm"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 text-slate-300 hover:text-red-500 transition-colors text-sm"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
