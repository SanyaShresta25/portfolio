import { Code, Palette, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Code",
    desc: "Love turning ideas into robust, beautiful web apps.",
    color: "from-pink-300 to-fuchsia-300"
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Pixel-perfect UIs with a touch of magic and pastel.",
    color: "from-purple-200 to-blue-200"
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "Curious mind, always learning and building new things.",
    color: "from-yellow-200 to-pink-200"
  },
  {
    icon: Heart,
    title: "Passion",
    desc: "Creating joyful, meaningful digital experiences.",
    color: "from-pink-100 to-orange-100"
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"
    >
      {/* Background floating blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-16 top-24 w-44 h-44 bg-pink-100 rounded-full filter blur-2xl opacity-50 animate-blob" />
        <div className="absolute right-20 top-10 w-52 h-52 bg-blue-100 rounded-full filter blur-2xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute left-1/2 -bottom-16 w-48 h-48 bg-purple-100 rounded-full filter blur-2xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      {/* Main Card */}
      <div className="relative max-w-5xl mx-auto z-10 rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl px-8 py-12 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-10">
          
           <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-pink-500 drop-shadow-lg inline-block pb-2">
  About Me
</h2>

          
          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto animate-fadeInUp">
            From biology lover to frontend enthusiast, I design, code, and explore to make the web a little brighter—one playful idea at a time.
          </p>
        </div>

        {/* 2-column layout on desktop, stacked on mobile */}
        <div className="mt-8 grid md:grid-cols-2 gap-12 w-full items-start">
          {/* My Journey */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                <span className="inline-block bg-pink-100 rounded-full p-2">
                  <Heart size={24} className="text-pink-500" />
                </span>
                My Journey
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                I started my learning journey in Ras Al Khaimah, UAE. Initially, I was set on biology, but a growing curiosity led me to code—and I was hooked. Like my cat who could never resist a puzzle, I love breaking problems down, experimenting, and building things from scratch. My path from biology to computer science hasn’t always been straightforward, but every step has been full of learning, discovery, and the joy of creation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">A few fun facts:</h3>
              <ul className="list-disc ml-6 space-y-1 text-gray-600 text-base">
                <li>I’m happiest when solving new problems—big or small.</li>
                <li>I thrive on project-based, hands-on learning.</li>
                <li>I love blending creativity with technology and design.</li>
                <li>Coffee + code + good music = perfect day!</li>
              </ul>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`flex flex-col items-center text-center rounded-2xl bg-gradient-to-br ${f.color} p-6 shadow-lg hover:scale-105 transition-all duration-300 animate-pop-in`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="mb-3">
                    <f.icon size={36} className="text-gray-700 drop-shadow" />
                  </div>
                  <div className="font-semibold text-lg text-gray-800">{f.title}</div>
                  <div className="text-gray-600 text-sm mt-2">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
