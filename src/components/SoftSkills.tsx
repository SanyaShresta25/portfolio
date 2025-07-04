import { Users, MessageCircle, FileText, Shuffle, Clock, Eye } from 'lucide-react';

const SoftSkills = () => {
  const softSkills = [
    { name: "Leadership and Teamwork", icon: Users, description: "Collaborating and leading teams effectively" },
    { name: "Effective Communication", icon: MessageCircle, description: "Clear, confident, and professional interaction" },
    { name: "Technical Documentation", icon: FileText, description: "Precise and structured technical writing skills" },
    { name: "Adaptability", icon: Shuffle, description: "Flexible and quick to respond to changing environments" },
    { name: "Time Management", icon: Clock, description: "Efficiently organizing tasks to meet deadlines" },
    { name: "Attention to Detail", icon: Eye, description: "Meticulous and careful execution of tasks" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-pink-50 relative">
      {/* Curved Top */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 rotate-180">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Soft Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Personal qualities that help me work effectively with others.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 animate-slideInUp group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-300">
                  <skill.icon size={24} className="text-pink-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 ml-3">{skill.name}</h3>
              </div>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Curved Bottom */}
    {/* Bumpy Bottom to match Extracurricular Top */}
<div className="absolute bottom-0 left-0 w-full">
  <svg className="w-full h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path fill="#fff" d="M0,0 C360,80 1080,0 1440,80 L1440,0 L0,0 Z" />
  </svg>
</div>

    </section>
  );
};

export default SoftSkills;
