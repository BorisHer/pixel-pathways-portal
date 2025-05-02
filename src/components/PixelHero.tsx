
import React from 'react';
import { Link } from 'react-router-dom';

const PixelHero: React.FC = () => {
  return (
    <div className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-40 grid-rows-20 h-full w-full">
          {Array.from({ length: 800 }).map((_, index) => (
            <div 
              key={`dot-${index}`}
              className={`${Math.random() > 0.5 ? 'bg-pixel-orange' : 'bg-transparent'} h-full w-full`}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              LEVEL UP YOUR <span className="text-pixel-orange">CAREER</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Short-term apprenticeships for real-world experience.
              Designed for ages 14-22 to build skills and explore careers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/jobs" className="bg-pixel-orange text-gray-900 font-sans font-medium py-3 px-6 rounded hover:bg-pixel-orange-light transition-colors duration-300">
                Find Jobs
              </Link>
              <Link to="/applications" className="bg-white text-gray-900 font-sans font-medium py-3 px-6 rounded hover:bg-gray-100 transition-colors duration-300">
                My Applications
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            {/* Pixel Art Computer/Job Board - Improved design */}
            <div className="w-72 h-72 relative">
              <div className="absolute w-56 h-40 bg-gray-700 top-4 left-1/2 -translate-x-1/2 rounded"></div>
              <div className="absolute w-48 h-32 bg-pixel-orange top-8 left-1/2 -translate-x-1/2 flex justify-center items-center rounded-sm">
                <div className="w-44 h-28 bg-gray-900 flex flex-wrap p-2 rounded">
                  <div className="w-4 h-1 bg-pixel-orange m-1"></div>
                  <div className="w-8 h-1 bg-pixel-orange m-1"></div>
                  <div className="w-6 h-1 bg-pixel-orange m-1"></div>
                  <div className="w-12 h-1 bg-pixel-orange m-1"></div>
                  <div className="w-10 h-1 bg-pixel-orange m-1"></div>
                  <div className="w-5 h-1 bg-pixel-orange m-1"></div>
                  <div className="w-8 h-1 bg-pixel-orange m-1"></div>
                </div>
              </div>
              <div className="absolute w-56 h-12 bg-gray-700 top-48 left-1/2 -translate-x-1/2 rounded-b"></div>
              <div className="absolute w-8 h-8 bg-pixel-orange bottom-4 left-1/2 -translate-x-1/2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelHero;
