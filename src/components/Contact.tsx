import { Mail, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const socials = [
  { icon: Github, href: "https://github.com/SanyaShresta25", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sanya-shresta-jathanna", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/sanya_shresta", label: "Twitter" },
];

const contactItems = [
  { icon: Mail, label: "Email", value: "shrestasanya@gmail.com", color: "pink" },
  { icon: MapPin, label: "Location", value: "Udupi, India", color: "purple" },
];

const shimmer =
  "bg-gradient-to-r from-pink-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent animate-shimmer";

const Contact = () => {
  // For tsParticles
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: false,
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
              color: { value: ["#ec4899", "#f472b6", "#a78bfa", "#818cf8"] },
              links: {
                enable: true,
                color: "#f472b6",
                distance: 150,
                opacity: 0.2,
                width: 1,
              },
              move: { enable: true, speed: 0.7 },
              number: { value: 40, density: { enable: true, area: 900 } },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Curved Top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 rotate-180">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          {/* Shimmer Heading */}
        <motion.h2
  className={`leading-[1.3] text-4xl md:text-5xl font-bold mb-6 ${shimmer}`}

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm always open to discussing new opportunities and interesting projects.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info & Socials */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, type: "spring" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              {contactItems.map((contact) => (
                <motion.div
                  key={contact.label}
                  className="flex items-center space-x-4 group"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className={`p-3 bg-${contact.color}-100 rounded-xl shadow-md group-hover:scale-110 transition-transform`}>
                    <contact.icon size={26} className={`text-${contact.color}-600`} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{contact.label}</p>
                    <p className="text-gray-600">{contact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Icons with pulse */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-5">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -7 + 4 * index }}
                    whileTap={{ scale: 0.97 }}
                    className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100"
                  >
                    <social.icon size={26} className="text-gray-700 group-hover:text-pink-600 transition-colors" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, type: "spring" }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 hover:border-pink-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 hover:border-pink-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 hover:border-pink-300"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 hover:border-pink-300"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Glowing/Pulsing Send Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-xl font-semibold shadow-xl flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-pink-200 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative"
                whileHover={{ scale: 1.08, boxShadow: "0 0 24px 4px #ec4899" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="absolute inset-0 rounded-xl blur-lg opacity-60 animate-pulse bg-gradient-to-r from-pink-500 to-pink-300 z-0" />
                <span className="relative flex items-center gap-2 z-10">
                  <Send size={20} />
                  Send Message
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-20 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p className="text-gray-600">
            © 2025 Sanya Shresta Jathanna. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;