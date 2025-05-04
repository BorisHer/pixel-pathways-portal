import React from 'react';
import { Clock, Briefcase, Award } from 'lucide-react';

const PixelAbout: React.FC = () => {
  return (
    <section id="about" className="section-bg min-h-screen flex items-center relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-pixel text-xl md:text-2xl text-white mb-4 text-center">
            WHAT ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pixel-gradient-start to-pixel-gradient-end">NEXT LEVEL</span> OPPORTUNITIES?
          </h2>
          <p className="professional-text text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Discover the future of career development through our innovative micro-apprenticeship platform
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gradient-border group">
              <div className="pixel-card h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-pixel-gradient-start to-pixel-gradient-end 
                              mb-6 rounded-lg flex justify-center items-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-pixel text-pixel-orange text-sm mb-3">SHORT-TERM</h3>
                <p className="professional-text text-gray-300">
                  1-2 week micro-apprenticeships that fit into your schedule.
                </p>
              </div>
            </div>
            
            <div className="gradient-border group">
              <div className="pixel-card h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-pixel-gradient-start to-pixel-gradient-end 
                              mb-6 rounded-lg flex justify-center items-center group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-pixel text-pixel-orange text-sm mb-3">REAL JOBS</h3>
                <p className="professional-text text-gray-300">
                  Work with local businesses on actual projects.
                </p>
              </div>
            </div>
            
            <div className="gradient-border group">
              <div className="pixel-card h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-pixel-gradient-start to-pixel-gradient-end 
                              mb-6 rounded-lg flex justify-center items-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-pixel text-pixel-orange text-sm mb-3">EARN SKILLS</h3>
                <p className="professional-text text-gray-300">
                  Collect verifiable skill badges for your portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelAbout;
