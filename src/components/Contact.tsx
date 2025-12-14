import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-500 mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6">Let's Connect</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something amazing together!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <p className="text-slate-300">jonathan.doe@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Phone</p>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <p className="text-slate-300">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-slate-400 mb-4 text-sm">Follow me on social media</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-red-500 hover:bg-red-600/10 transition-colors"
                >
                  <Linkedin size={20} className="text-slate-300" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-red-500 hover:bg-red-600/10 transition-colors"
                >
                  <Github size={20} className="text-slate-300" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-red-500 hover:bg-red-600/10 transition-colors"
                >
                  <Twitter size={20} className="text-slate-300" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-red-500 hover:bg-red-600/10 transition-colors"
                >
                  <Mail size={20} className="text-slate-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
            <h3 className="mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="contact-name" className="block text-slate-300 mb-2 text-sm">
                  Name *
                </label>
                <input 
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contact-email" className="block text-slate-300 mb-2 text-sm">
                  Email *
                </label>
                <input 
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-slate-300 mb-2 text-sm">
                  Message *
                </label>
                <textarea 
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
