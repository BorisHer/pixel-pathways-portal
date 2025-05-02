
import React from 'react';

const PixelAbout: React.FC = () => {
  const features = [
    {
      title: "SHORT-TERM",
      description: "1-2 week micro-apprenticeships that fit into your schedule, no long-term commitments needed.",
      icon: (
        <div className="w-16 h-16 bg-pixel-orange mb-4 mx-auto pixelated flex justify-center items-center relative">
          <div className="w-10 h-10 bg-black absolute"></div>
          <div className="w-8 h-1 bg-pixel-orange absolute top-3"></div>
          <div className="w-1 h-8 bg-pixel-orange absolute left-4"></div>
          <div className="w-3 h-3 bg-pixel-orange absolute bottom-2 right-2"></div>
        </div>
      )
    },
    {
      title: "REAL JOBS",
      description: "Work with local businesses on actual projects to gain practical skills in diverse career fields.",
      icon: (
        <div className="w-16 h-16 bg-pixel-orange mb-4 mx-auto pixelated flex justify-center items-center relative">
          <div className="w-10 h-10 bg-black absolute"></div>
          <div className="w-6 h-4 bg-pixel-orange absolute top-2"></div>
          <div className="w-2 h-6 bg-pixel-orange absolute bottom-0 left-2"></div>
          <div className="w-2 h-4 bg-pixel-orange absolute top-6 right-2"></div>
        </div>
      )
    },
    {
      title: "EARN SKILLS",
      description: "Collect verifiable skill badges that showcase your real-world experience to future employers.",
      icon: (
        <div className="w-16 h-16 bg-pixel-orange mb-4 mx-auto pixelated flex justify-center items-center relative">
          <div className="w-10 h-10 bg-black absolute"></div>
          <div className="w-8 h-8 bg-pixel-orange absolute rotate-45"></div>
          <div className="w-6 h-6 bg-black absolute rotate-45"></div>
          <div className="w-3 h-3 bg-pixel-orange absolute"></div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white py-20 pixel-section relative">
      {/* Background pixel grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-16 gap-1">
          {Array.from({ length: 256 }).map((_, index) => (
            <div key={`grid-${index}`} className="h-8 w-8 border border-black"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-pixel text-2xl md:text-3xl text-pixel-black mb-12 text-center">
          WHAT ARE <span className="text-pixel-orange">NEXT LEVEL</span> OPPORTUNITIES?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-pixel-black border-4 border-pixel-orange p-6 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[8px_8px_0_0_rgba(249,115,22,0.5)]"
            >
              {feature.icon}
              <h3 className="font-pixel text-pixel-orange text-lg mb-4 text-center">{feature.title}</h3>
              <p className="font-pixel-secondary text-white text-center text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Pixel art game elements */}
        <div className="mt-16 flex justify-center opacity-60">
          <div className="flex space-x-6">
            <div className="w-8 h-8 bg-pixel-black"></div>
            <div className="w-8 h-8 bg-pixel-orange"></div>
            <div className="w-8 h-8 bg-pixel-black"></div>
            <div className="w-8 h-8 bg-pixel-orange"></div>
            <div className="w-8 h-8 bg-pixel-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelAbout;
