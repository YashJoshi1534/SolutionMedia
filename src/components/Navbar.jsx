import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference
    if (document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed w-full z-50 bg-primary-bg/90 backdrop-blur-md border-b border-secondary-bg/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-accent-orange rounded-lg flex justify-center items-center text-white font-bold text-xl leading-none">
              H
            </div>
            <span className="font-bold text-xl tracking-tight text-dark-green">
              Hypematter Media
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-8 mr-2">
              <a href="#how-it-works" className="text-dark-green/80 hover:text-accent-orange font-medium transition-colors">Process</a>
              <a href="#problems" className="text-dark-green/80 hover:text-accent-orange font-medium transition-colors">Problems We Solve</a>
            </div>
            
            <button 
              onClick={toggleTheme} 
              aria-label="Toggle Dark Mode" 
              className="p-2 text-dark-green/80 hover:text-accent-orange transition-colors rounded-full hover:bg-secondary-bg/20"
            >
               {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a href="mailto:contact@hypemattermedia.com" className="btn-primary px-6 py-2 text-sm ml-2 hidden sm:flex">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
