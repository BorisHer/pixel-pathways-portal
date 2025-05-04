import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const PixelNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="glass-effect sticky top-0 z-50 border-b-2 border-pixel-orange/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="flex items-center group">
            <div className="h-8 w-8 bg-gradient-to-br from-pixel-gradient-start to-pixel-gradient-end mr-3 rounded-md 
                          group-hover:animate-pixel-pulse transition-all duration-300"></div>
            <span className="font-pixel text-white text-2xl md:text-3xl group-hover:text-pixel-orange transition-colors duration-300">
              NEXT LEVEL
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')}
                  className="font-pixel-secondary text-white hover:text-pixel-orange transition-all duration-200 
                           text-xl md:text-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 
                           after:w-0 after:h-0.5 after:bg-pixel-orange hover:after:w-full 
                           after:transition-all after:duration-300">
              HOME
            </button>
            <button onClick={() => scrollToSection('how-it-works')}
                  className="font-pixel-secondary text-white hover:text-pixel-orange transition-all duration-200 
                           text-xl md:text-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 
                           after:w-0 after:h-0.5 after:bg-pixel-orange hover:after:w-full 
                           after:transition-all after:duration-300">
              PROCESS
            </button>
            <button onClick={() => scrollToSection('for-who')}
                  className="font-pixel-secondary text-white hover:text-pixel-orange transition-all duration-200 
                           text-xl md:text-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 
                           after:w-0 after:h-0.5 after:bg-pixel-orange hover:after:w-full 
                           after:transition-all after:duration-300">
              JOIN
            </button>
            <button onClick={() => scrollToSection('cta')} className="pixel-btn text-xl">
              START
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-pixel-orange transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-pixel-orange/20 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="font-pixel-secondary text-white hover:text-pixel-orange py-2 text-xl
                         transition-colors duration-200 w-full hover:bg-pixel-surface-light px-4 rounded-md text-left"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="font-pixel-secondary text-white hover:text-pixel-orange py-2 text-xl
                         transition-colors duration-200 w-full hover:bg-pixel-surface-light px-4 rounded-md text-left"
            >
              PROCESS
            </button>
            <button 
              onClick={() => scrollToSection('for-who')}
              className="font-pixel-secondary text-white hover:text-pixel-orange py-2 text-xl
                         transition-colors duration-200 w-full hover:bg-pixel-surface-light px-4 rounded-md text-left"
            >
              JOIN
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="pixel-btn w-full text-center text-xl"
            >
              START
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default PixelNavbar;
