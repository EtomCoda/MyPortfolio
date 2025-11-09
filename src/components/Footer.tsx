import React from 'react';
const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0"></div>

          <nav className="flex space-x-6 mb-4 md:mb-0">
            {['home', 'projects', 'skills', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm capitalize transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
            <span>© {year} EtomCoda</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
