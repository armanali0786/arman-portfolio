import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading the development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and conducting code reviews.',
      achievements: [
        'Architected and deployed scalable microservices handling 1M+ requests daily',
        'Reduced application load time by 60% through optimization',
        'Mentored 5+ junior developers and led team of 8 engineers'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client-facing web applications. Collaborated with designers and product managers to deliver high-quality solutions.',
      achievements: [
        'Built 15+ responsive web applications from scratch',
        'Implemented CI/CD pipeline reducing deployment time by 40%',
        'Introduced TypeScript improving code quality and maintainability'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Startup Hub',
      period: '2019 - 2020',
      description: 'Worked on front-end development using React and Vue.js. Contributed to building user interfaces and implementing new features.',
      achievements: [
        'Developed reusable component library used across 10+ projects',
        'Improved website accessibility to meet WCAG 2.1 standards',
        'Collaborated with cross-functional teams in agile environment'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-500 mb-4">Work Experience</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-slate-700 last:pb-0">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 border-4 border-slate-900" />
              
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-red-500 transition-colors">
                <div className="flex items-start justify-between mb-4 gap-4 flex-wrap">
                  <div>
                    <h3 className="mb-1">{exp.title}</h3>
                    <p className="text-red-500 mb-2">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Briefcase size={16} />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <p className="text-slate-300 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
