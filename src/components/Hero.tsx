import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 pb-8 px-4"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fadeIn">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
              Backend Developer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              Building robust{' '}
              <span className="text-blue-600 dark:text-blue-400">
                backend solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I specialize in creating scalable, maintainable backend
              applications using modern technologies and best practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                View Projects <ArrowDown size={16} />
              </button>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg text-gray-800 dark:text-white transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fadeInRight">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-green-400 rounded-2xl opacity-20 dark:opacity-30 animate-pulse"></div>
              <img src="src/public/metransparent.png" alt="myavatar"> 
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
