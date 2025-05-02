
import React from 'react';
import { Link } from 'react-router-dom';

const PixelCTA: React.FC = () => {
  return (
    <div className="bg-pixel-orange py-16 relative overflow-hidden">
      {/* Simplified pixel art pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex flex-wrap">
          {Array.from({ length: 50 }).map((_, index) => (
            <div 
              key={`pixel-${index}`} 
              className={`h-10 w-10 ${Math.random() > 0.7 ? 'bg-black' : 'bg-transparent'}`}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-pixel text-2xl md:text-3xl text-black mb-6 drop-shadow-[0_1px_0_rgba(255,255,255,0.3)]">
          READY TO LEVEL UP YOUR CAREER?
        </h2>
        <p className="font-sans text-black text-xl max-w-2xl mx-auto mb-8">
          Join our platform to discover micro-apprenticeship opportunities
          or post jobs to find motivated young talent.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/jobs" className="bg-black text-pixel-orange hover:bg-pixel-dark-gray px-6 py-3 font-medium rounded shadow-md transform hover:translate-y-[-3px] transition-all duration-200">
            Browse Jobs
          </Link>
          <Link to="/post-job" className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-medium rounded shadow-md transform hover:translate-y-[-3px] transition-all duration-200">
            Post a Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PixelCTA;
