
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const PixelNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 py-4 border-b-2 border-pixel-orange sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="h-8 w-8 bg-pixel-orange mr-2 pixelated"></div>
          <span className="font-pixel text-pixel-orange text-lg md:text-xl">NEXT LEVEL</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/jobs" className="font-sans text-white hover:text-pixel-orange transition-colors duration-200 text-base">
            Jobs
          </Link>
          <Link to="/applications" className="font-sans text-white hover:text-pixel-orange transition-colors duration-200 text-base">
            Applications
          </Link>
          <Link to="/about" className="font-sans text-white hover:text-pixel-orange transition-colors duration-200 text-base">
            About
          </Link>
          <Link to="/login" className="mr-2">
            <Button variant="outline" className="text-white border-pixel-orange hover:bg-pixel-orange hover:text-gray-900 font-pixel transition-colors">
              LOGIN
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-pixel-orange text-gray-900 font-pixel hover:bg-pixel-orange-light transition-colors">
              SIGN UP
            </Button>
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
        <div className="md:hidden bg-gray-800 border-t border-gray-700 pt-2 pb-4 px-4">
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
              className="bg-pixel-orange text-gray-900 font-pixel py-2 px-4 rounded text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              SIGN UP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default PixelNavbar;
