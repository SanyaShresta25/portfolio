'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Design Webtech',
    location: 'Bengaluru, Karnataka, India · Remote',
    duration: 'Jun 2025 – Present · 2 mos',
    description: (
      <ul className="list-disc list-inside">
        <li>
          Developing responsive user interfaces using HTML, CSS, JavaScript (ES6), TypeScript, and
          modern frameworks like React.js (with Vite & Tailwind CSS)
        </li>
      </ul>
    ),
    skills: ['React.js', 'Tailwind CSS', 'Typescript'],
  },
  {
    title: 'Prompt Engineer Intern',
    company: 'Nexus Void Ai',
    location: 'Delhi, India · Remote',
    duration: 'Apr 2025 – Present · 4 mos',
    description: (
      <ul className="list-disc list-inside">
        <li>
          Contributed to building AI agents for Twitter Spaces by integrating LLMs (OpenAI, Google
          Gemini, AssemblyAI) and developing APIs using web scraping of space data
        </li>
        <li>
          Built and deployed full-stack features with Next.js, including payment integration and an
          authenticated backend using Supabase
        </li>
      </ul>
    ),
    skills: ['Large Language Models (LLM)', 'AI Agents', 'Full Stack Dev'],
  },
  {
    title: 'Research Intern',
    company: 'Manipal Academy of Higher Education',
    location: 'Udupi, Karnataka, India · Hybrid',
    duration: 'Oct 2024 – Present · 10 mos',
    description: (
      <span>
        Speech Enhancement using U-Net architecture: Developed a U-Net-based deep learning model to
        enhance speech by removing background noise using spectrogram learning.
      </span>
    ),
    skills: ['Research Skills'],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#d72660] min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* SVG Decorations (same as before) */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full h-[48px]" preserveAspectRatio="none">
          <path
            d="M0,35 Q120,60 240,35 Q360,10 480,35 Q600,60 720,35 Q840,10 960,35 Q1080,60 1200,35 Q1320,10 1440,35 V0 H0 Z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full h-[48px] rotate-180" preserveAspectRatio="none">
          <path
            d="M0,35 Q120,60 240,35 Q360,10 480,35 Q600,60 720,35 Q840,10 960,35 Q1080,60 1200,35 Q1320,10 1440,35 V0 H0 Z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="absolute left-0 top-0 h-full z-10 pointer-events-none">
        <svg viewBox="0 0 60 1440" className="h-full w-[48px]" preserveAspectRatio="none">
          <path
            d="M35,0 Q60,120 35,240 Q10,360 35,480 Q60,600 35,720 Q10,840 35,960 Q60,1080 35,1200 Q10,1320 35,1440 H0 V0 Z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="absolute right-0 top-0 h-full z-10 pointer-events-none">
        <svg viewBox="0 0 60 1440" className="h-full w-[48px] rotate-180" preserveAspectRatio="none">
          <path
            d="M35,0 Q60,120 35,240 Q10,360 35,480 Q60,600 35,720 Q10,840 35,960 Q60,1080 35,1200 Q10,1320 35,1440 H0 V0 Z"
            fill="#fff"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-20 pt-[48px] pb-[48px] py-20 px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            My professional journey and the amazing projects I've worked on.
          </p>
        </div>

        <div className="w-full overflow-x-hidden space-y-4">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-500 ${
                  isOpen ? 'shadow-2xl' : ''
                } animate-slideInUp`}
              >
                {/* Title Bar with Toggle for mobile */}
                <div
                  className="flex justify-between items-center sm:cursor-default cursor-pointer sm:block"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-pink-100 rounded-xl">
                      <Briefcase size={24} className="text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-pink-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="sm:hidden">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {/* Always visible on large screens, toggle on mobile */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen || typeof window !== 'undefined' && window.innerWidth >= 640 ? 'auto' : 0,
                    opacity: isOpen || typeof window !== 'undefined' && window.innerWidth >= 640 ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden sm:overflow-visible"
                >
                  <div className="mt-4 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="text-gray-600 leading-relaxed">{exp.description}</div>

                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full text-sm font-medium hover:from-pink-200 hover:to-rose-200 transition-all duration-300 transform hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
