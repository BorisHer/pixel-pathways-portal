
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const PixelForWho: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Students */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="border-b-2 border-pixel-orange">
              <h2 className="font-pixel text-2xl md:text-3xl text-pixel-orange py-6 text-center">
                FOR JOB SEEKERS
              </h2>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {["Explore careers before committing", "Build your portfolio", "Earn skill badges", "Gain real experience"].map((item, index) => (
                  <li key={index} className="font-sans text-white flex items-start">
                    <Check size={20} className="text-pixel-orange mr-3 shrink-0 mt-1" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Link to="/jobs" className="bg-pixel-orange text-gray-900 font-sans font-medium py-3 px-8 rounded hover:bg-pixel-orange-light transition-colors duration-300">
                  Find Jobs
                </Link>
              </div>
            </div>
          </div>
          
          {/* For Businesses */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="border-b-2 border-pixel-orange">
              <h2 className="font-pixel text-2xl md:text-3xl text-pixel-orange py-6 text-center">
                FOR EMPLOYERS
              </h2>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {["Find motivated talent", "Short-term commitments", "Test potential hires", "Community impact"].map((item, index) => (
                  <li key={index} className="font-sans text-white flex items-start">
                    <Check size={20} className="text-pixel-orange mr-3 shrink-0 mt-1" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Link to="/post-job" className="bg-pixel-orange text-gray-900 font-sans font-medium py-3 px-8 rounded hover:bg-pixel-orange-light transition-colors duration-300">
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelForWho;
