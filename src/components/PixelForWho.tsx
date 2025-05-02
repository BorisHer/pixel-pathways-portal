
import React from 'react';
import { Link } from 'react-router-dom';

const PixelForWho: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Students */}
          <div className="bg-pixel-black border-4 border-pixel-orange p-8">
            <h2 className="font-pixel text-2xl md:text-3xl text-pixel-orange mb-6 text-center">
              FOR JOB SEEKERS
            </h2>
            <ul className="space-y-4 mb-8">
              {["Explore careers before committing", "Build your portfolio", "Earn skill badges", "Gain real experience"].map((item, index) => (
                <li key={index} className="font-pixel-secondary text-white flex items-start">
                  <div className="w-4 h-4 bg-pixel-orange mt-1 mr-3 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Link to="/jobs" className="pixel-btn inline-block">
                FIND JOBS
              </Link>
            </div>
          </div>
          
          {/* For Businesses */}
          <div className="bg-pixel-black border-4 border-pixel-orange p-8">
            <h2 className="font-pixel text-2xl md:text-3xl text-pixel-orange mb-6 text-center">
              FOR EMPLOYERS
            </h2>
            <ul className="space-y-4 mb-8">
              {["Find motivated talent", "Short-term commitments", "Test potential hires", "Community impact"].map((item, index) => (
                <li key={index} className="font-pixel-secondary text-white flex items-start">
                  <div className="w-4 h-4 bg-pixel-orange mt-1 mr-3 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Link to="/post-job" className="pixel-btn inline-block">
                POST A JOB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelForWho;
