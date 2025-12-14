import { Users, Code, BookOpen, Target, MessageSquare, UserCheck } from 'lucide-react';
import { useState } from 'react';

export function Mentorship() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const offerings = [
    // {
    //   icon: Code,
    //   title: '1-on-1 Coding Sessions',
    //   description: 'Personalized coding sessions focusing on your specific challenges and learning goals.'
    // },
    {
      icon: BookOpen,
      title: 'Code Review & Feedback',
      description: 'Detailed code reviews with constructive feedback to improve code quality and best practices.'
    },
    {
      icon: Target,
      title: 'Career Guidance',
      description: 'Industry insights and career advice to help you navigate your professional journey.'
    },
    {
      icon: Users,
      title: 'Project Collaboration',
      description: 'Work together on real projects to build your portfolio and gain practical experience.'
    },
    // {
    //   icon: MessageSquare,
    //   title: 'Interview Preparation',
    //   description: 'Mock interviews and technical interview practice to help you land your dream job.'
    // },
    // {
    //   icon: UserCheck,
    //   title: 'Skill Development',
    //   description: 'Structured learning paths to master new technologies and frameworks.'
    // }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Junior Developer',
      text: 'Jonathan\'s mentorship helped me transition from a bootcamp graduate to a confident full-stack developer. His guidance was invaluable!'
    },
    {
      name: 'Mike Chen',
      role: 'Career Switcher',
      text: 'The personalized approach and real-world insights made all the difference. I landed my first developer role within 3 months!'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CS Student',
      text: 'The interview prep sessions were amazing! Jonathan\'s feedback helped me understand my weak points and ace my interviews.'
    }
  ];

  return (
    <section id="mentorship" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-500 mb-4">Mentorship</h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about helping others grow and thrive in their careers. If you're looking for guidance in web development, design, or career advice, I offer personalized mentorship to help you achieve your goals. My approach is hands-on, tailored to your needs, and focused on helping you overcome challenges and build your skills.
          </p>
        </div>

        {/* Offerings */}
        <div className="mb-16">
          <h3 className="text-center mb-8">What I Offer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-red-500 transition-colors"
                >
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-red-500" />
                  </div>
                  <h4 className="mb-3">{offering.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        {/* <div className="mb-16">
          <h3 className="text-center mb-8">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6"
              >
                <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-red-500 mb-1">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Contact Form */}
        {/* <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="mb-3">Interested in Mentorship?</h3>
            <p className="text-slate-400">
              Fill out the form below and let's connect! Tell me what you're looking for and how I can help.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-700 rounded-xl p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-slate-300 mb-2 text-sm">
                Name *
              </label>
              <input 
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-slate-300 mb-2 text-sm">
                Email *
              </label>
              <input 
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-slate-300 mb-2 text-sm">
                What kind of mentorship are you looking for? *
              </label>
              <textarea 
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                placeholder="Tell me about your goals, challenges, and how I can help..."
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              Book a Session
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
}
