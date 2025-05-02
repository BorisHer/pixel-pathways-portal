
import React from 'react';

const PixelHowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "BROWSE JOBS",
      description: "Search through our curated list of micro-apprenticeships across different industries.",
      icon: (
        <div className="w-16 h-16 bg-black mx-auto mb-4 relative">
          <div className="w-12 h-8 bg-white absolute top-2 left-2"></div>
          <div className="w-8 h-1 bg-pixel-orange absolute top-4 left-4"></div>
          <div className="w-8 h-1 bg-pixel-orange absolute top-6 left-4"></div>
          <div className="w-6 h-1 bg-pixel-orange absolute top-8 left-5"></div>
        </div>
      )
    },
    {
      number: 2,
      title: "APPLY & MATCH",
      description: "Apply to opportunities that interest you and get matched with local businesses.",
      icon: (
        <div className="w-16 h-16 bg-black mx-auto mb-4 relative">
          <div className="w-6 h-6 bg-white absolute top-2 left-2"></div>
          <div className="w-6 h-6 bg-pixel-orange absolute bottom-2 right-2"></div>
          <div className="w-2 h-2 bg-pixel-orange absolute top-4 left-4"></div>
          <div className="w-2 h-6 bg-white absolute top-5 left-7 rotate-45"></div>
        </div>
      )
    },
    {
      number: 3,
      title: "GAIN EXPERIENCE",
      description: "Spend 1-2 weeks gaining hands-on experience in a real workplace environment.",
      icon: (
        <div className="w-16 h-16 bg-black mx-auto mb-4 relative">
          <div className="w-6 h-6 bg-white absolute top-2 left-5"></div>
          <div className="w-10 h-6 bg-pixel-orange absolute bottom-2 left-3"></div>
          <div className="w-2 h-4 bg-white absolute top-8 left-5"></div>
          <div className="w-2 h-4 bg-white absolute top-8 left-9"></div>
        </div>
      )
    },
    {
      number: 4,
      title: "LEVEL UP",
      description: "Complete your apprenticeship and earn verifiable skill badges for your portfolio.",
      icon: (
        <div className="w-16 h-16 bg-black mx-auto mb-4 relative">
          <div className="w-10 h-10 bg-pixel-orange absolute top-3 left-3 rotate-45"></div>
          <div className="w-6 h-6 bg-white absolute top-5 left-5"></div>
          <div className="w-2 h-2 bg-black absolute top-7 left-7"></div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-pixel-black py-20 relative overflow-hidden">
      {/* Background pixel pattern */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex">
            {Array.from({ length: 30 }).map((_, colIndex) => (
              <div 
                key={`dot-${rowIndex}-${colIndex}`}
                className={`h-8 w-8 ${Math.random() > 0.8 ? 'bg-pixel-orange' : 'bg-white'}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-pixel text-2xl md:text-3xl text-white mb-12 text-center">
          HOW IT <span className="text-pixel-orange">WORKS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              {/* Step Number */}
              <div className="w-12 h-12 bg-pixel-orange flex items-center justify-center font-pixel text-xl text-black mb-6 mx-auto transform group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              
              {/* Connection Line */}
              {step.number < 4 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-2 bg-pixel-orange pixel-sliding-light"></div>
              )}
              
              {/* Content */}
              <div className="bg-white border-4 border-pixel-orange p-5 h-full hover:translate-y-[-5px] transition-transform duration-300">
                {/* Pixel Icon */}
                {step.icon}
                
                <h3 className="font-pixel text-pixel-black text-lg mb-3 text-center">
                  {step.title}
                </h3>
                <p className="font-pixel-secondary text-center text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PixelHowItWorks;
