import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', path: '#about' },
    { label: 'Experience', path: '#experience' },
    { label: 'Projects', path: '#projects' },
    { label: 'Skills', path: '#skills' },
    { label: 'Education', path: '#education' },
    { label: 'Contact', path: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/30 backdrop-blur-2xl border-b border-white/20 shadow-md shadow-pink-100/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* LOGO */}
          <a
            href="#hero"
            className="flex items-center group"
            tabIndex={0}
            aria-label="Go to Home"
          >
            <img
              src="/assets/ssj.jpg"
              alt="Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-full shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-pink-200"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ label, path }) => (
              <a
                key={label}
                href={path}
                className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-medium relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-pink-100 transition-all duration-300 transform hover:scale-110 focus:outline-none"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg rounded-b-xl shadow-inner py-4 border-t border-pink-100 space-y-2">
            {navItems.map(({ label, path }) => (
              <a
                key={label}
                href={path}
                className="block text-center py-2 px-4 text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 rounded-md mx-4"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
