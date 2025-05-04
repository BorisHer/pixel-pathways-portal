import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const PixelFooter: React.FC = () => {
  return (
    <footer className="section-bg pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="font-pixel text-transparent bg-clip-text bg-gradient-to-r 
                          from-pixel-gradient-start to-pixel-gradient-end text-lg mb-4">
              NEXT LEVEL
            </h3>
            <p className="professional-text text-gray-300 text-lg mb-4">
              Connecting students with short-term job opportunities through our micro-apprenticeship platform.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-pixel text-transparent bg-clip-text bg-gradient-to-r 
                          from-pixel-gradient-start to-pixel-gradient-end text-lg mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jobs" 
                      className="group font-pixel-secondary text-gray-300 hover:text-pixel-orange transition-all duration-200 
                               text-lg flex items-center gap-2">
                  <div className="w-1 h-1 bg-pixel-orange rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/applications" 
                      className="group font-pixel-secondary text-gray-300 hover:text-pixel-orange transition-all duration-200 
                               text-lg flex items-center gap-2">
                  <div className="w-1 h-1 bg-pixel-orange rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  My Applications
                </Link>
              </li>
              <li>
                <Link to="/post-job" 
                      className="group font-pixel-secondary text-gray-300 hover:text-pixel-orange transition-all duration-200 
                               text-lg flex items-center gap-2">
                  <div className="w-1 h-1 bg-pixel-orange rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/about" 
                      className="group font-pixel-secondary text-gray-300 hover:text-pixel-orange transition-all duration-200 
                               text-lg flex items-center gap-2">
                  <div className="w-1 h-1 bg-pixel-orange rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h3 className="font-pixel text-transparent bg-clip-text bg-gradient-to-r 
                          from-pixel-gradient-start to-pixel-gradient-end text-lg mb-4">
              CONNECT
            </h3>
            <div className="flex space-x-4 mb-4">
              {/* Social Links with Icons */}
              <a href="#" className="group w-10 h-10 gradient-border p-[2px] rounded-lg">
                <div className="w-full h-full bg-pixel-surface rounded-lg flex items-center justify-center 
                              hover:bg-pixel-surface-light transition-colors duration-200">
                  <Facebook className="w-5 h-5 text-gray-300 group-hover:text-pixel-orange transition-colors duration-200" />
                </div>
              </a>
              <a href="#" className="group w-10 h-10 gradient-border p-[2px] rounded-lg">
                <div className="w-full h-full bg-pixel-surface rounded-lg flex items-center justify-center 
                              hover:bg-pixel-surface-light transition-colors duration-200">
                  <Twitter className="w-5 h-5 text-gray-300 group-hover:text-pixel-orange transition-colors duration-200" />
                </div>
              </a>
              <a href="#" className="group w-10 h-10 gradient-border p-[2px] rounded-lg">
                <div className="w-full h-full bg-pixel-surface rounded-lg flex items-center justify-center 
                              hover:bg-pixel-surface-light transition-colors duration-200">
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-pixel-orange transition-colors duration-200" />
                </div>
              </a>
            </div>
            <Link to="/contact" 
                  className="group inline-flex items-center gap-2 font-pixel-secondary text-gray-300 
                           hover:text-pixel-orange transition-colors duration-200 text-lg">
              <Mail className="w-5 h-5" />
              info@nextlevel.com
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="bg-pixel-surface/40 rounded-lg p-4">
          <p className="font-pixel-secondary text-gray-500 text-lg text-center">
            © 2025 NEXT LEVEL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PixelFooter;
