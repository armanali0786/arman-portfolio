import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      period: '2017 - 2019',
      description: 'Specialized in Web Technologies and Software Engineering. Graduated with honors.',
      highlights: [
        'GPA: 3.9/4.0',
        'Research on Progressive Web Applications',
        'Teaching Assistant for Web Development course'
      ]
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'University of California, Berkeley',
      period: '2013 - 2017',
      description: 'Comprehensive study of software development, algorithms, and system design.',
      highlights: [
        'GPA: 3.7/4.0',
        'Dean\'s List all semesters',
        'President of Computer Science Club'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      year: '2022'
    },
    {
      name: 'Google UX Design Professional',
      issuer: 'Google',
      year: '2021'
    },
    {
      name: 'Meta Front-End Developer',
      issuer: 'Meta',
      year: '2021'
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-500 mb-4">Education & Certifications</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-red-500 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">{edu.degree}</h3>
                  <p className="text-red-500 mb-2">{edu.institution}</p>
                  <p className="text-slate-400 text-sm mb-4">{edu.period}</p>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-red-500">•</span>
                        <span className="text-slate-300 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
              <Award size={20} className="text-red-500" />
            </div>
            <h3>Professional Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-red-500 transition-colors"
              >
                <p className="mb-2">{cert.name}</p>
                <p className="text-slate-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-red-500 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
