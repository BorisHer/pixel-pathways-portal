
import React from 'react';
import PixelNavbar from '../components/PixelNavbar';
import PixelFooter from '../components/PixelFooter';

const Businesses = () => {
  return (
    <div className="min-h-screen bg-pixel-black">
      <PixelNavbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-pixel text-3xl md:text-4xl text-pixel-orange text-center mb-12">
          FOR EMPLOYERS
        </h1>
        
        <div className="max-w-3xl mx-auto">
          {/* Why Post Jobs */}
          <div className="bg-white border-4 border-pixel-orange p-8 mb-10">
            <h2 className="font-pixel text-2xl text-pixel-black mb-6 text-center">
              WHY POST ON NEXT LEVEL?
            </h2>
            <ul className="space-y-4 mb-6">
              <li className="font-pixel-secondary text-lg flex items-start">
                <div className="w-6 h-6 bg-pixel-orange flex justify-center items-center mr-3 mt-1 shrink-0">
                  <span className="font-pixel text-black">1</span>
                </div>
                <span>Find motivated young talent eager to learn and contribute</span>
              </li>
              <li className="font-pixel-secondary text-lg flex items-start">
                <div className="w-6 h-6 bg-pixel-orange flex justify-center items-center mr-3 mt-1 shrink-0">
                  <span className="font-pixel text-black">2</span>
                </div>
                <span>Short-term commitments of only 1-2 weeks</span>
              </li>
              <li className="font-pixel-secondary text-lg flex items-start">
                <div className="w-6 h-6 bg-pixel-orange flex justify-center items-center mr-3 mt-1 shrink-0">
                  <span className="font-pixel text-black">3</span>
                </div>
                <span>Test potential future hires with real projects</span>
              </li>
              <li className="font-pixel-secondary text-lg flex items-start">
                <div className="w-6 h-6 bg-pixel-orange flex justify-center items-center mr-3 mt-1 shrink-0">
                  <span className="font-pixel text-black">4</span>
                </div>
                <span>Make a positive impact on your community</span>
              </li>
            </ul>
            <div className="text-center">
              <button className="pixel-btn">
                POST A JOB NOW
              </button>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white border-4 border-pixel-orange p-8">
            <h2 className="font-pixel text-2xl text-pixel-black mb-6 text-center">
              HOW IT WORKS
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="w-full md:w-16 h-16 bg-pixel-orange flex justify-center items-center mb-4 md:mb-0 shrink-0">
                  <span className="font-pixel text-black text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-pixel text-lg mb-2">Create Your Job Listing</h3>
                  <p className="font-pixel-secondary">
                    Describe the micro-apprenticeship opportunity, required skills, and what students will learn.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="w-full md:w-16 h-16 bg-pixel-orange flex justify-center items-center mb-4 md:mb-0 shrink-0">
                  <span className="font-pixel text-black text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-pixel text-lg mb-2">Review Applications</h3>
                  <p className="font-pixel-secondary">
                    Browse student profiles and select the best candidates for your opportunity.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="w-full md:w-16 h-16 bg-pixel-orange flex justify-center items-center mb-4 md:mb-0 shrink-0">
                  <span className="font-pixel text-black text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-pixel text-lg mb-2">Host the Micro-Apprenticeship</h3>
                  <p className="font-pixel-secondary">
                    Welcome students for a 1-2 week experience and provide them with real-world tasks.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="w-full md:w-16 h-16 bg-pixel-orange flex justify-center items-center mb-4 md:mb-0 shrink-0">
                  <span className="font-pixel text-black text-xl">4</span>
                </div>
                <div>
                  <h3 className="font-pixel text-lg mb-2">Award Skill Badges</h3>
                  <p className="font-pixel-secondary">
                    Recognize students' achievements by awarding verifiable skill badges upon completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PixelFooter />
    </div>
  );
};

export default Businesses;
