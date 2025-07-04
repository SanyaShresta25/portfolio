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

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

  return (
   <header
  className={`fixed top-0 w-full z-50 transition-all duration-500 ${
   scrolled
  ? 'bg-white/20 backdrop-blur-3xl border border-white/20 shadow-xl shadow-pink-100/30'
  : 'bg-transparent'

  }`}
>
    
      <nav className="max-w-7xl mx-auto px-0">
        <div className="flex justify-between items-center py-4">
          {/* LOGO at the absolute left */}
          <a
            href="#hero"
            className="flex items-center group pl-0"
            tabIndex={0}
            aria-label="Go to Home"
          >
            <img
              src="/assets/ssj.jpg"
              alt="Logo"
              className="w-16 h-16 object-contain rounded-full shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-pink-200"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-medium relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-pink-100 transition-all duration-300 transform hover:scale-110"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-pink-200 bg-white/90 backdrop-blur-xl rounded-b-2xl">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-4 text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 rounded-lg mx-2"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
