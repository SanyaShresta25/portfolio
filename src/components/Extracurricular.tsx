import { Trophy,  UtensilsCrossed, Headphones, Keyboard, Guitar, Book, Users, FileText } from 'lucide-react';

const Extracurricular = () => {
  const activities = [
    {
      title: "Treasurer",
      organization: "NSS IT Wing, NMAMIT",
      duration: "Aug 2024 – Jun 2025",
      description: "Managed financial records and budgeting for NSS activities with accountability and transparency.",
      icon: Trophy,
      achievements: [
        "Maintained accurate expenditure lists",
        "Oversaw effective fund allocation"
      ]
    },
    {
      title: "Magazine Coordinator",
      organization: "Department of ISE, NMAMIT",
      duration: "Aug 2024 – Jun 2025",
      description: "Documented and organized departmental events for the official magazine and social outreach.",
      icon: Book,
      achievements: [
        "Compiled comprehensive event reports",
        "Led event logistics & engagement"
      ]
    },
    {
      title: "Student Coordinator",
      organization: "Placement Cell, NMAMIT",
      duration: "Jul 2024 – Jun 2025",
      description: "Served as a bridge between students and the placement department during drives.",
      icon: Users,
      achievements: [
        "Coordinated 10+ placement drives",
        "Shared timely updates and insights"
      ]
    },
    {
      title: "Documentation Team Member",
      organization: "Placement NMAMIT",
      duration: "Aug 2024 – Jun 2025",
      description: "Created detailed documentation of all outreach activities and visits for official records.",
      icon: FileText,
      achievements: [
        "Documented 10+ outreach events",
        "Participated in awareness campaigns"
      ]
    }
  ];

  const hobbies = [
    { name: "Playing Keyboard", icon: Keyboard },
    { name: "Playing Guitar", icon: Guitar },
    { name: "Listening to Podcasts", icon: Headphones },
    { name: "Cooking Italian Food", icon: UtensilsCrossed },
  ];

  return (
    <section className="relative bg-[#d72660] text-white py-24 px-6 overflow-hidden">
      {/* Top Bumpy Cut */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="#fff" d="M0,0 C360,80 1080,0 1440,80 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 animate-fadeInUp">Extracurricular Activities</h2>
          <p className="text-xl max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Beyond academics — where passion meets leadership and creativity.
          </p>
        </div>

        {/* Activities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-10 text-center">Leadership & Volunteering</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-slideInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-white/30 rounded-xl">
                    <activity.icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold">{activity.title}</h4>
                    <p className="text-pink-100 font-semibold">{activity.organization}</p>
                    <p className="text-pink-200 text-sm">{activity.duration}</p>
                  </div>
                </div>
                <p className="text-white/90 mb-4">{activity.description}</p>
                <ul className="space-y-2">
                  {activity.achievements.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full mt-1"></div>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div>
          <h3 className="text-3xl font-bold mb-10 text-center">Hobbies & Interests</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-white/20 rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <hobby.icon size={26} className="text-white" />
                </div>
                <p className="text-white/90 font-medium text-sm">{hobby.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bumpy Cut */}
      <div className="absolute bottom-0 left-0 w-full rotate-180">
        <svg className="w-full h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="#fff" d="M0,0 C360,80 1080,0 1440,80 L1440,0 L0,0 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Extracurricular;
