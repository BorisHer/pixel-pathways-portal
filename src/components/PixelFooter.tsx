
import React from 'react';
import { Link } from 'react-router-dom';

const PixelFooter: React.FC = () => {
  return (
    <footer className="bg-pixel-black border-t-4 border-pixel-orange pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-pixel text-pixel-orange text-lg mb-4">PIXEL PATHS</h3>
            <p className="font-pixel-secondary text-white mb-4">
              Connecting students with short-term career experiences through our micro-apprenticeship platform.
            </p>
          </div>
          
          <div>
            <h3 className="font-pixel text-pixel-orange text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/students" className="font-pixel-secondary text-white hover:text-pixel-orange transition-colors">
                  For Students
                </Link>
              </li>
              <li>
                <Link to="/businesses" className="font-pixel-secondary text-white hover:text-pixel-orange transition-colors">
                  For Businesses
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-pixel-secondary text-white hover:text-pixel-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-pixel-secondary text-white hover:text-pixel-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-pixel text-pixel-orange text-lg mb-4">CONNECT</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-pixel-orange transition-colors">
                <span className="font-pixel text-black">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-pixel-orange transition-colors">
                <span className="font-pixel text-black">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-pixel-orange transition-colors">
                <span className="font-pixel text-black">in</span>
              </a>
            </div>
            <Link to="/contact" className="font-pixel-secondary text-white hover:text-pixel-orange transition-colors">
              info@pixelpaths.com
            </Link>
          </div>
        </div>
        
        <div className="border-t border-pixel-dark-gray pt-6">
          <p className="font-pixel-secondary text-pixel-light-gray text-center">
            © 2025 PIXEL PATHS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PixelFooter;
