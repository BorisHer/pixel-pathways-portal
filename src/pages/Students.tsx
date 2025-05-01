
import React from 'react';
import PixelNavbar from '../components/PixelNavbar';
import PixelFooter from '../components/PixelFooter';

const Students = () => {
  return (
    <div className="min-h-screen bg-pixel-black">
      <PixelNavbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-pixel text-3xl md:text-4xl text-pixel-orange text-center mb-12">
          FOR STUDENTS
        </h1>
        <div className="bg-white border-4 border-pixel-orange p-8 max-w-3xl mx-auto">
          <p className="font-pixel-secondary text-xl text-center mb-8">
            Student content coming soon...
          </p>
        </div>
      </div>
      <PixelFooter />
    </div>
  );
};

export default Students;
