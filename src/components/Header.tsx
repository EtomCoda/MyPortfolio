import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { ThemeMode } from '../types';
import logo from 'src/img/metransparent.png';
interface HeaderProps {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white dark:bg-gray-900 shadow-md py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
         <img src={logo} alt="MyLogo" className="inline-block h-8 w-8 mr-2" />
        <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">Meet</span>Me
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['home', 'projects', 'skills', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 capitalize transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md py-4 px-4 flex flex-col space-y-4 animate-fadeIn">
          {['home', 'projects', 'skills', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 capitalize py-2 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
