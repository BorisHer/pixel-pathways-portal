
import React from 'react';
import { Link } from 'react-router-dom';

const PixelCTA: React.FC = () => {
  return (
    <div className="bg-pixel-orange py-16 relative overflow-hidden">
      {/* Pixel art pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div className="flex flex-wrap">
          {Array.from({ length: 100 }).map((_, index) => (
            <div 
              key={`pixel-${index}`} 
              className={`h-8 w-8 ${Math.random() > 0.7 ? 'bg-black' : 'bg-transparent'}`}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-pixel text-2xl md:text-3xl text-black mb-6 drop-shadow-[0_2px_0_rgba(255,255,255,0.3)]">
          READY TO LEVEL UP YOUR CAREER?
        </h2>
        <p className="font-pixel-secondary text-black text-xl max-w-2xl mx-auto mb-8 tracking-wide">
          Join our platform to discover micro-apprenticeship opportunities
          or post jobs to find motivated young talent.
        </p>
        
        {/* Pixel art game controllers */}
        <div className="flex justify-center mb-8">
          <div className="w-72 h-24 relative hidden md:block">
            {/* Left controller */}
            <div className="absolute left-0 top-4">
              <div className="w-24 h-16 bg-black rounded-lg border-2 border-white"></div>
              <div className="w-8 h-8 bg-black rounded-full border-2 border-white absolute -left-4 top-4"></div>
              <div className="w-6 h-6 bg-white rounded-full absolute left-6 top-5"></div>
              <div className="w-4 h-4 bg-pixel-orange absolute left-16 top-6"></div>
              <div className="w-4 h-4 bg-pixel-orange absolute left-12 top-10"></div>
            </div>
            
            {/* Right controller */}
            <div className="absolute right-0 top-4">
              <div className="w-24 h-16 bg-black rounded-lg border-2 border-white"></div>
              <div className="w-8 h-8 bg-black rounded-full border-2 border-white absolute -right-4 top-4"></div>
              <div className="w-6 h-6 bg-white rounded-full absolute right-6 top-5"></div>
              <div className="w-4 h-4 bg-pixel-orange absolute right-16 top-6"></div>
              <div className="w-4 h-4 bg-pixel-orange absolute right-12 top-10"></div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/jobs" className="pixel-btn bg-black text-pixel-orange hover:bg-pixel-dark-gray shadow-[4px_4px_0_0_#FDBA74] transform hover:translate-y-[-3px] transition-all duration-200">
            BROWSE JOBS
          </Link>
          <Link to="/post-job" className="pixel-btn bg-white text-black hover:bg-gray-100 shadow-[4px_4px_0_0_#000] transform hover:translate-y-[-3px] transition-all duration-200">
            POST A JOB
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PixelCTA;
