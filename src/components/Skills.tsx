import { useEffect, useState } from "react";
import {
  FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaDocker, FaGit, FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss, SiFlutter, SiMysql, SiMongodb, SiSupabase, SiVite, SiFlask, SiThreedotjs,
} from "react-icons/si";

// --- Your icon mapping
const skillIcons = {
  Java: <FaJava className="text-orange-500" />,
  Python: <FaPython className="text-blue-500" />,
  C: <span className="font-bold text-xl text-blue-900">C</span>,
  HTML5: <FaHtml5 className="text-orange-600" />,
  CSS3: <FaCss3 className="text-blue-600" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  "Java (Desktop/Android Apps)": <FaJava className="text-orange-500" />,
  React: <FaReact className="text-blue-400" />,
  Flask: <SiFlask className="text-gray-900" />,
  Flutter: <SiFlutter className="text-sky-400" />,
  "Three.js": <SiThreedotjs className="text-black" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  Vite: <SiVite className="text-purple-400" />,
  Docker: <FaDocker className="text-blue-400" />,
  Git: <FaGit className="text-red-500" />,
  "Node.js": <FaNodeJs className="text-green-700" />,
  MySQL: <SiMysql className="text-blue-800" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Supabase: <SiSupabase className="text-green-400" />,
};

// --- Categorized grid
const skills = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Application Development",
    skills: ["Java (Desktop/Android Apps)"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Flask", "Flutter", "Three.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Vite", "Docker", "Git", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Supabase"],
  }
];

// --- Skills to animate as falling tags (add/remove as you wish)
const fallingSkills = [
  "React", "JavaScript", "TypeScript", "Node.js", "Python", "Java", "HTML5", "CSS3",
  "Tailwind CSS", "Bootstrap", "Vue.js", "Angular", "Express.js", "MongoDB", "PostgreSQL",
  "MySQL", "Firebase", "AWS", "Docker", "Git", "GitHub", "Figma", "Adobe XD", "Photoshop",
  "REST APIs", "GraphQL", "Redux", "Next.js", "React Native", "Flutter", "Jest", "Vite"
];

export default function Skills() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationStarted(true), 600);
    return () => clearTimeout(timer);
  }, []);

  // For random falling positions, duration, and delays
  const getRandomPosition = () => ({
    left: Math.random() * 90 + '%',
    animationDelay: Math.random() * 4 + 's',
    animationDuration: (Math.random() * 3 + 2) + 's'
  });

  const getRandomColor = () => {
    const colors = [
      'from-pink-400 to-rose-300',
      'from-purple-300 to-indigo-300',
      'from-blue-300 to-cyan-300',
      'from-green-300 to-emerald-300',
      'from-yellow-200 to-orange-300',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 overflow-hidden"
    >
      {/* Top Bump */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full h-[48px]" preserveAspectRatio="none">
          <path
            d="M0,35 Q120,60 240,35 Q360,10 480,35 Q600,60 720,35 Q840,10 960,35 Q1080,60 1200,35 Q1320,10 1440,35 V0 H0 Z"
            fill="#fff"
          />
        </svg>
      </div>

      {/* Falling Skills Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {animationStarted && fallingSkills.map((skill, index) => (
          <div
            key={index}
            className={`absolute -top-20 bg-gradient-to-r ${getRandomColor()} text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg animate-fall opacity-20 hover:opacity-80 transition-opacity duration-300`}
            style={getRandomPosition()}
          >
            {skill}
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center drop-shadow animate-fadeInUp">
          Skills & Tools
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((group) => (
            <div key={group.title} className="bg-white/90 rounded-2xl shadow-xl p-7 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-pink-600 mb-4">{group.title}</h3>
              <ul className="flex flex-wrap gap-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center space-x-2 bg-pink-50 rounded-full px-3 py-1 shadow hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-xl">
                      {skillIcons[skill as keyof typeof skillIcons] || "🔗"}
                    </span>
                    <span className="text-gray-800 text-sm font-semibold">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bump */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full h-[48px] rotate-180" preserveAspectRatio="none">
          <path
            d="M0,35 Q120,60 240,35 Q360,10 480,35 Q600,60 720,35 Q840,10 960,35 Q1080,60 1200,35 Q1320,10 1440,35 V0 H0 Z"
            fill="#fff"
          />
        </svg>
      </div>
    </section>
  );
}
