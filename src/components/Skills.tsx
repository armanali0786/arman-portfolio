import { Code2, Database, Layout, Palette, Server, Smartphone } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      icon: Server,
      title: 'Backend Development',
      items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Python', 'Java']
    },
    {
      icon: Database,
      title: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase']
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      items: ['Figma', 'Adobe XD', 'Responsive Design', 'User Research', 'Prototyping', 'Wireframing']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      items: ['React Native', 'Progressive Web Apps', 'Mobile-First Design', 'Cross-Platform']
    },
    {
      icon: Palette,
      title: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile', 'Testing']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-500 mb-4">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index} 
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-red-500 transition-colors"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-red-500" />
                </div>
                <h3 className="mb-4">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
