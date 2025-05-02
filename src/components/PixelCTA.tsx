
import React from 'react';
import { Link } from 'react-router-dom';

const PixelCTA: React.FC = () => {
  return (
    <div className="bg-pixel-orange py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-pixel text-2xl md:text-3xl text-gray-900 mb-6">
          READY TO LEVEL UP YOUR CAREER?
        </h2>
        <p className="font-sans text-gray-900 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Join our platform to discover micro-apprenticeship opportunities
          or post jobs to find motivated young talent.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/jobs" className="bg-gray-900 text-white font-sans font-medium py-3 px-8 rounded hover:bg-gray-800 transition-colors duration-300">
            Browse Jobs
          </Link>
          <Link to="/post-job" className="bg-white text-gray-900 font-sans font-medium py-3 px-8 rounded hover:bg-gray-100 transition-colors duration-300 border border-gray-900">
            Post a Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PixelCTA;
