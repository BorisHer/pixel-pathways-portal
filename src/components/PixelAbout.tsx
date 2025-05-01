
import React from 'react';

const PixelAbout: React.FC = () => {
  return (
    <div className="bg-white py-20 pixel-section">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-2xl md:text-3xl text-pixel-black mb-12 text-center">
          WHAT ARE <span className="text-pixel-orange">MICRO</span>-APPRENTICESHIPS?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-pixel-black border-4 border-pixel-orange p-6 transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-pixel-orange mb-4 mx-auto pixelated"></div>
            <h3 className="font-pixel text-pixel-orange text-lg mb-3 text-center">SHORT-TERM</h3>
            <p className="font-pixel-secondary text-white text-center">
              1-2 week hands-on experiences that fit into your schedule, no long-term commitments required.
            </p>
          </div>
          
          <div className="bg-pixel-black border-4 border-pixel-orange p-6 transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-pixel-orange mb-4 mx-auto pixelated"></div>
            <h3 className="font-pixel text-pixel-orange text-lg mb-3 text-center">REAL WORLD</h3>
            <p className="font-pixel-secondary text-white text-center">
              Work with local businesses to gain practical skills and experience in diverse career fields.
            </p>
          </div>
          
          <div className="bg-pixel-black border-4 border-pixel-orange p-6 transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-pixel-orange mb-4 mx-auto pixelated"></div>
            <h3 className="font-pixel text-pixel-orange text-lg mb-3 text-center">EARN BADGES</h3>
            <p className="font-pixel-secondary text-white text-center">
              Collect verifiable skill badges that showcase your experiences and abilities to future employers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelAbout;
