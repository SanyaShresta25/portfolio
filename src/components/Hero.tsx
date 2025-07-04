import { Github, Linkedin, Mail, Download } from 'lucide-react';

const socials = [
  {
    icon: Github,
    href: 'https://github.com/SanyaShresta25',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/sanya-shresta-jathanna/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:shrestasanya@gmail.com',
    label: 'Mail',
  },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-32 right-4 sm:top-40 sm:right-10 w-52 h-52 sm:w-96 sm:h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-44 h-44 sm:w-80 sm:h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 transform -translate-x-1/2"></div>
      </div>

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28..." opacity=".25" className="fill-white" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86..." opacity=".5" className="fill-white" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32..." className="fill-white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side */}
        <div className="text-center lg:text-left animate-fade-in-up px-2 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-snug">
              <span className="block">Hola, I'm</span>
              <span className="relative inline-block mt-2">
                <span className="text-4xl sm:text-6xl md:text-8xl font-bold italic bg-gradient-to-r from-pink-400 via-pink-600 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-lg">
                  Sanya
                </span>
                <svg
                  viewBox="0 0 120 28"
                  className="absolute left-1/2 -bottom-6 w-[100px] sm:w-[150px] md:w-[210px] -translate-x-1/2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ pointerEvents: 'none' }}
                >
                  <defs>
                    <linearGradient id="pinkWavy" x1="0" y1="0" x2="120" y2="0">
                      <stop stopColor="#f472b6" />
                      <stop offset="0.6" stopColor="#db2777" />
                      <stop offset="1" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M4 18 Q10 6 16 18 Q22 30 28 18 Q34 6 40 18 Q46 30 52 18 Q58 6 64 18 Q70 30 76 18 Q82 6 88 18 Q94 30 100 18 Q106 6 112 18"
                    stroke="url(#pinkWavy)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-xl text-gray-600 mb-2">Sanya Shresta Jathanna</p>
            <p className="text-sm sm:text-lg text-gray-500 mb-6 px-2 sm:px-0">
              Frontend developer specializing in React.js, with a passion for building seamless UIs and innovating in deep learning and cloud-based solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 sm:mb-10">
            <a
              href="https://bento.me/sanya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="/SANYA_International_Resume.pdf"
              download
              className="w-full sm:w-auto text-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-pink-600 hover:text-pink-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Resume
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-4 mb-12">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-pink-50 group"
              >
                <item.icon size={22} className="text-gray-700 group-hover:text-pink-600 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end animate-float-in mt-8 lg:mt-0">
          <div className="relative">
            <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center shadow-2xl animate-float">
              <img
                src="/assets/sanya.png"
                alt="Sanya Avatar"
                className="w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
            <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-14 sm:h-14 bg-yellow-300 rounded-full animate-bounce animation-delay-1000"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 sm:w-12 sm:h-12 bg-purple-300 rounded-full animate-bounce animation-delay-2000"></div>
            <div className="absolute top-1/2 -left-3 sm:-left-5 w-6 h-6 sm:w-8 sm:h-8 bg-pink-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
