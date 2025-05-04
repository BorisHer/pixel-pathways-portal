import React from 'react';
import { Search, FileCheck, Briefcase, Award } from 'lucide-react';

const PixelHowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "EXPLORE",
      description: "Browse through available micro-apprenticeships in your area of interest."
    },
    {
      number: 2,
      icon: FileCheck,
      title: "APPLY",
      description: "Submit your application with a simple one-click process."
    },
    {
      number: 3,
      icon: Briefcase,
      title: "WORK",
      description: "Complete your 1-2 week project and gain real experience."
    },
    {
      number: 4,
      icon: Award,
      title: "EARN",
      description: "Receive payment and add new skills to your portfolio."
    }
  ];

  return (
    <section id="how-it-works" className="section-bg min-h-screen flex items-center relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-3xl text-white mb-4">
            HOW IT <span className="text-pixel-orange">WORKS</span>
          </h2>
          <p className="professional-text text-gray-300">
            Get started with Next Level in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Step number */}
              <div className="absolute -top-3 -left-3 w-7 h-7 bg-pixel-surface rounded-full flex items-center justify-center border-2 border-pixel-orange">
                <span className="font-pixel text-pixel-orange text-sm">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl border-2 border-pixel-orange bg-pixel-surface flex items-center justify-center">
                <step.icon className="w-6 h-6 text-pixel-orange" />
              </div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5">
                  <div className="h-full bg-pixel-orange/30"></div>
                </div>
              )}

              {/* Content */}
              <div className="bg-pixel-surface border-2 border-pixel-orange p-4 rounded-xl text-center h-full">
                <h3 className="font-pixel text-pixel-orange text-lg mb-3">
                  {step.title}
                </h3>
                <p className="professional-text text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PixelHowItWorks;
