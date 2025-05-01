
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const PixelNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-pixel-black py-4 border-b-4 border-pixel-orange sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="h-8 w-8 bg-pixel-orange mr-2 pixelated"></div>
          <span className="font-pixel text-pixel-orange text-lg md:text-xl">PIXEL PATHS</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/students" className="font-pixel-secondary text-white hover:text-pixel-orange transition-colors duration-200">
            FOR STUDENTS
          </Link>
          <Link to="/businesses" className="font-pixel-secondary text-white hover:text-pixel-orange transition-colors duration-200">
            FOR BUSINESSES
          </Link>
          <Link to="/about" className="font-pixel-secondary text-white hover:text-pixel-orange transition-colors duration-200">
            ABOUT
          </Link>
          <Link to="/contact" className="pixel-btn">
            GET STARTED
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-pixel-black border-t-4 border-pixel-orange pt-2 pb-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/students" 
              className="font-pixel-secondary text-white hover:text-pixel-orange py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FOR STUDENTS
            </Link>
            <Link 
              to="/businesses" 
              className="font-pixel-secondary text-white hover:text-pixel-orange py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FOR BUSINESSES
            </Link>
            <Link 
              to="/about" 
              className="font-pixel-secondary text-white hover:text-pixel-orange py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              to="/contact" 
              className="pixel-btn inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              GET STARTED
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default PixelNavbar;
