module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both',
        'shine': 'shine 2s linear both',
        'bounce-in': 'bounceIn 1.1s cubic-bezier(.18,.89,.32,1.28) both',
        'pop-in': 'popIn 0.8s cubic-bezier(.18,.89,.32,1.28) both',
        'float-in': 'floatIn 1.2s cubic-bezier(.24,1.43,.47,.98) both',
        'float': 'float 4s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'underline-wobble': 'wobble 2s linear infinite',
        'slide-down': 'slideDown 1s cubic-bezier(.22,.68,.43,1.16) both',
        'fall': 'fall 7s linear infinite',
        // --- add shimmer animation here ---
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shine: {
          '0%': { opacity: 0.4 },
          '80%': { opacity: 1 },
          '100%': { opacity: 1 },
        },
        bounceIn: {
          '0%': { opacity: 0, transform: 'scale(.6) translateY(40px)' },
          '80%': { opacity: 1, transform: 'scale(1.05) translateY(-8px)' },
          '100%': { transform: 'scale(1) translateY(0)' },
        },
        popIn: {
          '0%': { opacity: 0, transform: 'scale(.8) translateY(30px)' },
          '100%': { opacity: 1, transform: 'scale(1) translateY(0)' },
        },
        floatIn: {
          '0%': { opacity: 0, transform: 'translateY(40px) scale(.9)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        wobble: {
          '0%,100%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-3px)' },
          '50%': { transform: 'translateY(0px)' },
          '75%': { transform: 'translateY(3px)' },
        },
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fall: {
          '0%': { transform: 'translateY(-200px) scale(1)', opacity: 0.2 },
          '90%': { opacity: 0.7 },
          '100%': { transform: 'translateY(900px) scale(1.1)', opacity: 0.05 }
        },
   
        shimmer: {
          '100%': { backgroundPosition: '200% center' }
        }
      },
    
      backgroundSize: {
        '200': '200% 100%',
      }
    },
  },
  plugins: [],
};
