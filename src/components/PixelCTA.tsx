
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const PixelCTA: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-pixel text-2xl md:text-3xl text-gray-900 mb-6">
          READY TO LEVEL UP YOUR CAREER?
        </h2>
        <p className="font-sans text-gray-700 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Join our platform to discover micro-apprenticeship opportunities
          or post jobs to find motivated young talent.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/jobs" className="inline-block">
            <Button className="bg-pixel-orange text-gray-900 font-pixel py-3 px-8 rounded hover:bg-pixel-orange-light transition-colors duration-300 text-sm">
              BROWSE JOBS
            </Button>
          </Link>
          <Link to="/post-job" className="inline-block">
            <Button variant="outline" className="bg-white text-gray-900 font-pixel py-3 px-8 rounded hover:bg-gray-100 transition-colors duration-300 border border-gray-900 text-sm">
              POST A JOB
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PixelCTA;
