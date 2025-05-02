
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const PixelNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 py-4 border-b-2 border-pixel-orange sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="h-8 w-8 bg-pixel-orange mr-2 pixelated"></div>
          <span className="font-pixel text-pixel-orange text-lg md:text-xl">NEXT LEVEL</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/jobs" className="font-sans text-white hover:text-pixel-orange transition-colors duration-200 text-base">
            Jobs
          </Link>
          <Link to="/applications" className="font-sans text-white hover:text-pixel-orange transition-colors duration-200 text-base">
            Applications
          </Link>
          <Link to="/about" className="font-sans text-white hover:text-pixel-orange transition-colors duration-200 text-base">
            About
          </Link>
          <Link to="/login" className="font-sans text-white hover:text-pixel-orange transition-colors duration-200 text-base mr-2">
            Login
          </Link>
          <Link to="/contact" className="bg-pixel-orange text-gray-900 font-sans font-medium py-2 px-5 rounded hover:bg-pixel-orange-light transition-colors duration-200 text-base">
            Sign Up
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
        <div className="md:hidden bg-gray-900 border-t border-gray-800 pt-2 pb-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/jobs" 
              className="font-sans text-white hover:text-pixel-orange py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link 
              to="/applications" 
              className="font-sans text-white hover:text-pixel-orange py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Applications
            </Link>
            <Link 
              to="/about" 
              className="font-sans text-white hover:text-pixel-orange py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/login" 
              className="font-sans text-white hover:text-pixel-orange py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/contact" 
              className="bg-pixel-orange text-gray-900 font-sans py-2 px-4 rounded text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default PixelNavbar;
