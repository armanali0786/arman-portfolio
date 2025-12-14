import MyImage from '../styles/images/my-image.jpeg'
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
      </div>
    </section>
  );
}
