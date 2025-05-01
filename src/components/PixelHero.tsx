
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
              <span className="text-pixel-orange">MICRO</span>-APPRENTICESHIPS
            </h1>
            <p className="font-pixel-secondary text-xl md:text-2xl text-white mb-8">
              EXPLORE CAREERS IN 1-2 WEEK ADVENTURES
              <br />
              FOR AGES 14-22
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/students" className="pixel-btn animate-pixel-pulse">
                FOR STUDENTS
              </Link>
              <Link to="/businesses" className="pixel-btn bg-white text-pixel-black hover:bg-gray-100">
                FOR BUSINESSES
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Pixel Art Character */}
            <div className="w-64 h-64 mx-auto relative animate-pixel-float">
              <div className="absolute w-12 h-12 bg-pixel-orange top-0 left-1/2 -translate-x-1/2"></div>
              <div className="absolute w-36 h-36 bg-pixel-orange top-12 left-1/2 -translate-x-1/2 flex justify-center items-center">
                <div className="w-24 h-24 bg-black flex flex-wrap p-2">
                  <div className="w-4 h-4 bg-pixel-orange m-1"></div>
                  <div className="w-4 h-4 bg-pixel-orange m-1"></div>
                  <div className="w-4 h-4 bg-pixel-orange m-1"></div>
                  <div className="w-4 h-4 bg-pixel-orange m-1"></div>
                </div>
              </div>
              <div className="absolute w-48 h-12 bg-pixel-orange top-48 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelHero;
