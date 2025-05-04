import React from 'react';
import { Link } from 'react-router-dom';

const PixelHero: React.FC = () => {
  return (
    <section id="hero" className="section-bg min-h-screen flex items-center relative">
      <div className="container mx-auto px-6 py-16 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight">
            LEVEL UP YOUR <span className="text-pixel-orange">CAREER</span>
          </h1>
          <p className="professional-text text-gray-300 mb-10 max-w-2xl mx-auto">
            SHORT-TERM APPRENTICESHIPS FOR REAL-WORLD EXPERIENCE
            <br />
            FOR AGES 14-22
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/jobs" 
              className="pixel-btn w-full sm:w-auto"
            >
              FIND JOBS
            </Link>
            <Link 
              to="/applications" 
              className="pixel-btn bg-white text-pixel-black hover:bg-gray-100 w-full sm:w-auto"
            >
              MY APPLICATIONS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelHero;
