
import React from 'react';
import { Link } from 'react-router-dom';

const PixelHero: React.FC = () => {
  return (
    <div className="bg-pixel-black min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Pixel dots background */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex">
            {Array.from({ length: 30 }).map((_, colIndex) => (
              <div 
                key={`dot-${rowIndex}-${colIndex}`}
                className={`h-4 w-4 ${Math.random() > 0.5 ? 'bg-pixel-orange' : 'bg-transparent'}`}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight animate-pixel-flicker">
              LEVEL UP YOUR <span className="text-pixel-orange">CAREER</span>
            </h1>
            <p className="font-pixel-secondary text-xl md:text-2xl text-white mb-8">
              SHORT-TERM APPRENTICESHIPS FOR REAL-WORLD EXPERIENCE
              <br />
              FOR AGES 14-22
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/jobs" className="pixel-btn animate-pixel-pulse">
                FIND JOBS
              </Link>
              <Link to="/applications" className="pixel-btn bg-white text-pixel-black hover:bg-gray-100">
                MY APPLICATIONS
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            {/* Pixel Art Computer/Job Board */}
            <div className="w-64 h-64 relative animate-pixel-float">
              <div className="absolute w-48 h-36 bg-pixel-dark-gray top-4 left-1/2 -translate-x-1/2"></div>
              <div className="absolute w-40 h-28 bg-pixel-orange top-8 left-1/2 -translate-x-1/2 flex justify-center items-center">
                <div className="w-36 h-24 bg-black flex flex-wrap p-2">
                  <div className="w-4 h-1 bg-pixel-orange m-1"></div>
                  <div className="w-8 h-1 bg-pixel-orange m-1"></div>
                  <div className="w-6 h-1 bg-pixel-orange m-1"></div>
                  <div className="w-12 h-1 bg-pixel-orange m-1"></div>
                  <div className="w-10 h-1 bg-pixel-orange m-1"></div>
                  <div className="w-5 h-1 bg-pixel-orange m-1"></div>
                  <div className="w-8 h-1 bg-pixel-orange m-1"></div>
                </div>
              </div>
              <div className="absolute w-56 h-12 bg-pixel-dark-gray top-48 left-1/2 -translate-x-1/2"></div>
              <div className="absolute w-8 h-8 bg-pixel-orange bottom-0 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelHero;
