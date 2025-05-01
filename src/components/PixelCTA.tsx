
import React from 'react';
import { Link } from 'react-router-dom';

const PixelCTA: React.FC = () => {
  return (
    <div className="bg-pixel-orange py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-pixel text-2xl md:text-3xl text-black mb-6">
          READY TO START YOUR PIXEL JOURNEY?
        </h2>
        <p className="font-pixel-secondary text-black text-xl max-w-2xl mx-auto mb-8">
          Join our platform to discover micro-apprenticeship opportunities 
          or host the next generation of talent at your business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/students" className="pixel-btn bg-black text-pixel-orange hover:bg-pixel-dark-gray shadow-[4px_4px_0_0_#FDBA74]">
            I'M A STUDENT
          </Link>
          <Link to="/businesses" className="pixel-btn bg-white text-black hover:bg-gray-100 shadow-[4px_4px_0_0_#000]">
            I'M A BUSINESS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PixelCTA;
