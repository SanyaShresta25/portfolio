import { FaGlobe, FaLanguage } from "react-icons/fa";
import { Globe } from "lucide-react";
const languageIcons: Record<string, React.ReactNode> = {
  English: <FaGlobe className="text-blue-500" />,
  Hindi: <FaLanguage className="text-yellow-700" />,
  Kannada: <FaLanguage className="text-green-700" />,
  Japanese: <span className="text-2xl">🇯🇵</span>,
};


const languages = [
  {
    name: "English",
    level: "Full professional proficiency",
    proficiency: "Fluent",
  },
  {
    name: "Hindi",
    level: "Full professional proficiency",
    proficiency: "Fluent",
  },
  {
    name: "Japanese",
    level: "Elementary proficiency",
    proficiency: "Basic",
  },
  {
    name: "Kannada",
    level: "Native or bilingual proficiency",
    proficiency: "Native",
  },
];

const badgeGradients: Record<string, string> = {
  Fluent: "from-blue-200 to-blue-100 text-blue-800",
  Native: "from-green-200 to-green-100 text-green-900",
  Basic: "from-pink-200 to-pink-100 text-pink-800",
  Intermediate: "from-yellow-200 to-yellow-100 text-yellow-800",
};

const Languages = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-rose-100 relative overflow-hidden">
      {/* Curved Top */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 rotate-180">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-20">
        <div className="text-center mb-16">
         <h2 className="leading-tight md:leading-snug text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent mb-8 drop-shadow animate-fadeInUp flex items-center justify-center gap-2">

            <Globe className="text-pink-500" size={38} /> Languages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Languages I speak and my proficiency levels.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transition-all duration-500 animate-floatIn border border-pink-100">
          <div className="divide-y divide-pink-50">
            {languages.map((lang, idx) => (
              <div
                key={lang.name}
                className="py-5 flex items-center justify-between group animate-slideInUp"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Icon, name and subtext */}
                <div className="flex items-center gap-4">
                  {languageIcons[lang.name] && (
                    <span className="bg-white rounded-full shadow p-2 text-2xl flex items-center justify-center ring-2 ring-pink-100 animate-bounce">
                      {languageIcons[lang.name]}
                    </span>
                  )}
                  <div>
                    <span className="block font-semibold text-lg md:text-xl text-gray-900">{lang.name}</span>
                    <span className="block text-sm text-gray-500">{lang.level}</span>
                  </div>
                </div>
                {/* Badge */}
                <div className="ml-4">
                  <span
                    className={`px-4 py-1 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 bg-gradient-to-r ${
                      badgeGradients[lang.proficiency] || "from-gray-200 to-gray-100 text-gray-900"
                    } animate-shine`}
                  >
                    {lang.proficiency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute -top-16 left-10 w-28 h-28 bg-gradient-to-br from-pink-200 to-rose-100 rounded-full blur-2xl opacity-50 animate-float z-0"></div>
        <div
          className="absolute bottom-10 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-100 rounded-full blur-2xl opacity-40 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Languages;
