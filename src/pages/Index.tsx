
import React from 'react';
import PixelNavbar from '../components/PixelNavbar';
import PixelHero from '../components/PixelHero';
import PixelAbout from '../components/PixelAbout';
import PixelHowItWorks from '../components/PixelHowItWorks';
import PixelForWho from '../components/PixelForWho';
import PixelCTA from '../components/PixelCTA';
import PixelFooter from '../components/PixelFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-pixel-black">
      <PixelNavbar />
      <PixelHero />
      <PixelAbout />
      <PixelHowItWorks />
      <PixelForWho />
      <PixelCTA />
      <PixelFooter />
    </div>
  );
};

export default Index;
