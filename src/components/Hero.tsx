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
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left animate-fade-in-up">
          <div className="mb-8">
           <h1 className="flex flex-row items-baseline flex-wrap text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6">
  <span className="animate-slide-down">Hi, I'm</span>
  <span className="relative inline-block ml-4">
    <span className="
      text-6xl md:text-8xl font-bold italic
      bg-gradient-to-r from-pink-400 via-pink-600 to-fuchsia-500
      text-transparent bg-clip-text
      drop-shadow-lg
    ">
      Sanya
    </span>
    {/* SVG underline */}
    <svg
      viewBox="0 0 120 28"
      className="absolute left-1/2 -bottom-8 w-[150px] md:w-[210px] -translate-x-1/2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
    >
      <defs>
        <linearGradient id="pinkWavy" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f472b6" />
          <stop offset="0.6" stopColor="#db2777" />
          <stop offset="1" stopColor="#d946ef" />
        </linearGradient>
      </defs>
      <path
        d="
          M4 18
          Q10 6 16 18
          Q22 30 28 18
          Q34 6 40 18
          Q46 30 52 18
          Q58 6 64 18
          Q70 30 76 18
          Q82 6 88 18
          Q94 30 100 18
          Q106 6 112 18
        "
        stroke="url(#pinkWavy)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </span>
</h1>


            <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in-up animation-delay-200">
              Sanya Shresta Jathanna
            </p>
            <p className="text-lg md:text-xl text-gray-500 mb-8 animate-fade-in-up animation-delay-400">
              Frontend developer specializing in React.js, with a passion for building seamless UIs and innovating in deep learning and cloud-based solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up animation-delay-600">
            <a
              href="https://bento.me/sanya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 transform animate-bounce-in animation-delay-700"
            >
              View My Work
            </a>
            <a
              href="/SANYA_International_Resume.pdf"
              download="SANYA_International_Resume.pdf"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-pink-600 hover:text-pink-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 animate-bounce-in animation-delay-900"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center lg:justify-start space-x-6 mb-12">
            {socials.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-pink-50 group animate-pop-in`}
                style={{ animationDelay: `${0.5 + idx * 0.15}s` }}
              >
                <item.icon size={24} className="text-gray-700 group-hover:text-pink-600 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Profile Picture */}
        <div className="flex justify-center lg:justify-end animate-float-in">
          <div className="relative animate-float-in">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center shadow-2xl animate-float">
              <img
                src="/assets/sanya.png"
                alt="Sanya Avatar"
                className="w-60 h-60 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full animate-bounce animation-delay-1000"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-300 rounded-full animate-bounce animation-delay-2000"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-pink-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
