import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PixelCTA: React.FC = () => {
  return (
    <section id="cta" className="section-bg min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-pixel-orange/5 via-pixel-accent-purple/5 to-pixel-accent-pink/5 
                      animate-pulse [animation-duration:4s]"></div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="gradient-border p-[2px]">
            <div className="glass-effect rounded-lg px-8 py-12 relative">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-pixel-orange/30 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-pixel-orange/30 rounded-br-lg"></div>
              
              <h2 className="font-pixel text-2xl md:text-3xl text-center mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pixel-gradient-start to-pixel-gradient-end">
                  LEVEL UP
                </span>{" "}
                YOUR CAREER
              </h2>
              
              <p className="professional-text text-gray-300 text-center max-w-2xl mx-auto mb-10">
                Whether you're looking to explore new careers or find young talent, 
                Next Level connects you with opportunities that matter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/jobs" 
                  className="group pixel-btn flex items-center gap-2 min-w-[200px] justify-center"
                >
                  <span>BROWSE JOBS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link 
                  to="/post-job" 
                  className="group pixel-btn-secondary flex items-center gap-2 min-w-[200px] justify-center"
                >
                  <span>POST A JOB</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelCTA;
