import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Building2, ArrowRight } from 'lucide-react';

const PixelForWho: React.FC = () => {
  const studentFeatures = [
    "Explore careers before committing",
    "Build your portfolio",
    "Earn skill badges",
    "Gain real experience"
  ];

  const businessFeatures = [
    "Find motivated young talent",
    "Short-term commitments",
    "Shape future workforce",
    "Build community connections"
  ];

  return (
    <section id="for-who" className="section-bg min-h-screen flex items-center relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Students */}
          <div className="gradient-border group">
            <div className="pixel-card relative">
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-pixel-orange/30 rounded-tr-lg"></div>
              
              <div className="w-12 h-12 bg-gradient-to-br from-pixel-gradient-start to-pixel-gradient-end 
                            rounded-lg flex justify-center items-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-black" />
              </div>
              
              <h2 className="font-pixel text-lg md:text-xl mb-6 text-transparent bg-clip-text 
                           bg-gradient-to-r from-pixel-gradient-start to-pixel-gradient-end">
                FOR JOB SEEKERS
              </h2>
              
              <ul className="space-y-4 mb-8">
                {studentFeatures.map((item, index) => (
                  <li key={index} className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-br from-pixel-orange to-pixel-orange-light 
                                  mt-2 mr-3 shrink-0 rounded-sm group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="professional-text text-gray-300 group-hover/item:text-white transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link to="/jobs" 
                    className="group/button pixel-btn inline-flex items-center gap-2">
                <span>FIND OPPORTUNITIES</span>
                <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* For Businesses */}
          <div className="gradient-border group">
            <div className="pixel-card relative">
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-pixel-orange/30 rounded-tr-lg"></div>
              
              <div className="w-12 h-12 bg-gradient-to-br from-pixel-gradient-start to-pixel-gradient-end 
                            rounded-lg flex justify-center items-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-6 h-6 text-black" />
              </div>
              
              <h2 className="font-pixel text-lg md:text-xl mb-6 text-transparent bg-clip-text 
                           bg-gradient-to-r from-pixel-gradient-start to-pixel-gradient-end">
                FOR BUSINESSES
              </h2>
              
              <ul className="space-y-4 mb-8">
                {businessFeatures.map((item, index) => (
                  <li key={index} className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-br from-pixel-orange to-pixel-orange-light 
                                  mt-2 mr-3 shrink-0 rounded-sm group-hover/item:scale-125 transition-transform duration-200"></div>
                    <span className="professional-text text-gray-300 group-hover/item:text-white transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link to="/post-job" 
                    className="group/button pixel-btn-secondary inline-flex items-center gap-2">
                <span>POST A JOB</span>
                <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelForWho;
