
import React from 'react';

const PixelHowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "BROWSE JOBS",
      description: "Search through our curated list of micro-apprenticeships across different industries."
    },
    {
      number: 2,
      title: "APPLY & MATCH",
      description: "Apply to opportunities that interest you and get matched with local businesses."
    },
    {
      number: 3,
      title: "GAIN EXPERIENCE",
      description: "Spend 1-2 weeks gaining hands-on experience in a real workplace environment."
    },
    {
      number: 4,
      title: "LEVEL UP",
      description: "Complete your apprenticeship and earn verifiable skill badges for your portfolio."
    }
  ];

  return (
    <div className="bg-pixel-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-2xl md:text-3xl text-white mb-12 text-center">
          HOW IT <span className="text-pixel-orange">WORKS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Step Number */}
              <div className="w-12 h-12 bg-pixel-orange flex items-center justify-center font-pixel text-xl text-black mb-6 mx-auto">
                {step.number}
              </div>
              
              {/* Connection Line */}
              {step.number < 4 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-pixel-orange"></div>
              )}
              
              {/* Content */}
              <div className="bg-white border-4 border-pixel-orange p-5 h-full">
                <h3 className="font-pixel text-pixel-black text-lg mb-3 text-center">
                  {step.title}
                </h3>
                <p className="font-pixel-secondary text-center">
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
