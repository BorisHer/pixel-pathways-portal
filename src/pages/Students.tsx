
import React from 'react';
import PixelNavbar from '../components/PixelNavbar';
import PixelFooter from '../components/PixelFooter';
import { Search } from 'lucide-react';

const Jobs = () => {
  const featuredJobs = [
    {
      title: "Article Writer for Travel Blog",
      category: "Writing",
      location: "Remote",
      duration: "7 days",
      company: "Wanderlust Media"
    },
    {
      title: "Mobile App Developer",
      category: "Programming",
      location: "Manila, Philippines",
      duration: "7 days",
      company: "TechSolutions Inc."
    },
    {
      title: "Graphic Designer",
      category: "Digital Design",
      location: "Quezon City, Philippines",
      duration: "7 days",
      company: "Creative Studio"
    },
    {
      title: "Video Editor",
      category: "Digital Design",
      location: "Manila, Philippines",
      duration: "7 days",
      company: "Media Productions"
    }
  ];

  return (
    <div className="min-h-screen bg-pixel-black">
      <PixelNavbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-pixel text-3xl md:text-4xl text-pixel-orange text-center mb-12">
          AVAILABLE JOBS
        </h1>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-pixel-light-gray" />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="w-full bg-pixel-dark-gray border-2 border-pixel-orange pl-10 pr-4 py-2 text-white font-pixel-secondary"
            />
          </div>
          <select className="bg-pixel-dark-gray border-2 border-pixel-orange px-4 py-2 text-white font-pixel-secondary">
            <option>All Categories</option>
            <option>Writing</option>
            <option>Programming</option>
            <option>Digital Design</option>
          </select>
          <input 
            type="text" 
            placeholder="Filter by location" 
            className="bg-pixel-dark-gray border-2 border-pixel-orange px-4 py-2 text-white font-pixel-secondary"
          />
        </div>
        
        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job, index) => (
            <div key={index} className="bg-pixel-black border-4 border-pixel-orange p-6 hover:transform hover:scale-[1.02] transition-transform">
              <h3 className="font-pixel text-white text-lg mb-3">{job.title}</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-pixel-dark-gray px-3 py-1 text-white font-pixel-secondary text-sm">{job.category}</span>
                  <span className="bg-pixel-dark-gray px-3 py-1 text-white font-pixel-secondary text-sm">{job.duration}</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-pixel-light-gray font-pixel-secondary">{job.location}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-pixel-orange font-pixel-secondary">{job.company}</span>
                </div>
              </div>
              <button className="pixel-btn w-full">VIEW DETAILS</button>
            </div>
          ))}
        </div>
      </div>
      <PixelFooter />
    </div>
  );
};

export default Jobs;
