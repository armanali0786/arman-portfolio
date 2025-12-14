import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Data Engineer',
      company: 'Evolvus Solution Pvt Ltd.',
      period: 'Sep 2025 - Present',
      description: 'Leading the development of enterprise web applications using React.js, Typescript, Javascript.',
      achievements: [
        'Developed an AI-driven secure data archival platform for finance and manufacturing sectors.',
        'Ensured compliance, efficient retrieval, and cost reduction through advanced archival solutions.',
        'Leveraged AI to streamline data storage and lower operational costs in regulated industries.'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Cipher Craft Pvt Ltd.',
      period: 'Sep 2024 - Sep 2025',
      description: 'Developed and maintained multiple client-facing web applications. Collaborated with designers and product managers to deliver high-quality solutions.',
      achievements: [
        'Developed a Chrome extension integrating LinkedIn API for user authentication, profile reviews, and market insights visualization.',
        'Implemented a 3D map rendering with Three.js to display location-based house models.',
        'Facilitated solar panel installation and energy calculations through interactive 3D models.'
      ]
    },
    {
      title: 'Web Developer',
      company: '9Brainz',
      period: 'July 2023 - July 2024',
      description: 'Worked on front-end development using React and Vue.js. Contributed to building user interfaces and implementing new features.',
      achievements: [
        'Created a REST API and user interface using standard React.js, Node.js, Express, and MongoDB practices for a scalable and maintainable application.',
        'Collaborated with cross-functional teams in agile environment'
      ]
    },
    {
      title: 'Software Developer (Intern)',
      company: 'Technomark Solutions LLP',
      period: 'Jan 2023 - July 2023',
      description: 'Worked on front-end development using React and Vue.js. Contributed to building user interfaces and implementing new features.',
      achievements: [
        'Created a REST API and user interface using standard React.js, Node.js, Express, and MongoDB practices for a scalable and maintainable application.',
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
