
import React from 'react';
import { Link } from 'react-router-dom';

const PixelForWho: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Students */}
          <div className="bg-pixel-black border-4 border-pixel-orange p-8 transform hover:translate-y-[-5px] transition-all duration-300">
            <div className="flex justify-center mb-6">
              {/* Pixel art student */}
              <div className="w-24 h-24 relative">
                <div className="w-8 h-8 bg-pixel-orange absolute top-0 left-8"></div> {/* Head */}
                <div className="w-16 h-12 bg-white absolute top-8 left-4"> {/* Body */}
                  <div className="w-16 h-3 bg-pixel-orange absolute top-0"></div> {/* Collar */}
                </div>
                <div className="w-4 h-4 bg-pixel-orange absolute top-20 left-4"></div> {/* Leg */}
                <div className="w-4 h-4 bg-pixel-orange absolute top-20 left-12"></div> {/* Leg */}
                <div className="w-6 h-3 bg-pixel-orange absolute top-12 left-0 rotate-45"></div> {/* Arm */}
                <div className="w-6 h-3 bg-pixel-orange absolute top-12 right-0 -rotate-45"></div> {/* Arm */}
                <div className="w-6 h-2 bg-black absolute top-3 left-9"></div> {/* Glasses */}
              </div>
            </div>
            <h2 className="font-pixel text-2xl md:text-3xl text-pixel-orange mb-6 text-center">
              FOR JOB SEEKERS
            </h2>
            <ul className="space-y-4 mb-8">
              {["Explore careers before committing", "Build your portfolio", "Earn skill badges", "Gain real experience"].map((item, index) => (
                <li key={index} className="font-pixel-secondary text-white flex items-start">
                  <div className="w-4 h-4 bg-pixel-orange mt-1 mr-3 shrink-0"></div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Link to="/jobs" className="pixel-btn inline-block hover:scale-105 transition-transform">
                FIND JOBS
              </Link>
            </div>
          </div>
          
          {/* For Businesses */}
          <div className="bg-pixel-black border-4 border-pixel-orange p-8 transform hover:translate-y-[-5px] transition-all duration-300">
            <div className="flex justify-center mb-6">
              {/* Pixel art business person */}
              <div className="w-24 h-24 relative">
                <div className="w-8 h-8 bg-white absolute top-0 left-8"></div> {/* Head */}
                <div className="w-16 h-12 bg-pixel-orange absolute top-8 left-4"> {/* Body */}
                  <div className="w-16 h-3 bg-black absolute top-0"></div> {/* Suit top */}
                </div>
                <div className="w-4 h-4 bg-black absolute top-20 left-4"></div> {/* Leg */}
                <div className="w-4 h-4 bg-black absolute top-20 left-12"></div> {/* Leg */}
                <div className="w-3 h-6 bg-pixel-orange absolute top-8 left-1 rotate-45"></div> {/* Arm */}
                <div className="w-3 h-6 bg-pixel-orange absolute top-8 right-1 -rotate-45"></div> {/* Arm */}
                <div className="w-4 h-1 bg-black absolute top-3 left-10"></div> {/* Tie */}
                <div className="w-2 h-3 bg-black absolute top-4 left-11"></div> {/* Tie */}
              </div>
            </div>
            <h2 className="font-pixel text-2xl md:text-3xl text-pixel-orange mb-6 text-center">
              FOR EMPLOYERS
            </h2>
            <ul className="space-y-4 mb-8">
              {["Find motivated talent", "Short-term commitments", "Test potential hires", "Community impact"].map((item, index) => (
                <li key={index} className="font-pixel-secondary text-white flex items-start">
                  <div className="w-4 h-4 bg-pixel-orange mt-1 mr-3 shrink-0"></div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Link to="/post-job" className="pixel-btn inline-block hover:scale-105 transition-transform">
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
