
import React from 'react';
import { Link } from 'react-router-dom';

const PixelHero: React.FC = () => {
  return (
    <div className="bg-pixel-black min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Pixel art background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-16 md:grid-cols-32 gap-1">
          {Array.from({ length: 320 }).map((_, index) => (
            <div 
              key={`pixel-${index}`} 
              className={`h-4 w-4 ${Math.random() > 0.5 ? 'bg-pixel-orange' : 'bg-transparent'}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight animate-pixel-flicker">
              LEVEL UP YOUR <span className="text-pixel-orange">CAREER</span>
            </h1>
            <p className="font-pixel-secondary text-xl md:text-2xl text-white mb-8 tracking-wide">
              SHORT-TERM APPRENTICESHIPS FOR REAL-WORLD EXPERIENCE
              <br />
              <span className="text-pixel-orange">FOR AGES 14-22</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/jobs" className="pixel-btn animate-pixel-pulse">
                FIND JOBS
              </Link>
              <Link to="/applications" className="pixel-btn bg-white text-pixel-black hover:bg-gray-100">
                MY APPLICATIONS
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Pixel Art Computer with Character */}
            <div className="w-full h-64 relative animate-pixel-float flex justify-center">
              <div className="relative">
                {/* Computer Monitor */}
                <div className="w-48 h-40 bg-pixel-dark-gray border-4 border-black"></div>
                <div className="w-40 h-32 absolute top-4 left-4 bg-pixel-black border-2 border-pixel-orange flex items-center justify-center">
                  <div className="text-pixel-orange font-pixel text-sm">NEXT LEVEL</div>
                </div>
                
                {/* Computer Stand */}
                <div className="w-16 h-8 bg-pixel-dark-gray mx-auto border-4 border-black"></div>
                <div className="w-32 h-4 bg-pixel-dark-gray mx-auto border-4 border-black"></div>
                
                {/* Pixel Character */}
                <div className="absolute -bottom-12 right-0">
                  <div className="w-6 h-6 bg-pixel-orange"></div> {/* Head */}
                  <div className="w-10 h-10 bg-white relative mx-auto"> {/* Body */}
                    <div className="absolute top-0 left-0 w-2 h-6 bg-pixel-orange"></div>
                    <div className="absolute top-0 right-0 w-2 h-6 bg-pixel-orange"></div>
                  </div>
                  <div className="flex">
                    <div className="w-4 h-4 bg-pixel-orange"></div> {/* Leg */}
                    <div className="w-4 h-4 bg-pixel-orange"></div> {/* Leg */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelHero;
