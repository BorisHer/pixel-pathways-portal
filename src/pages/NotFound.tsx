
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pixel-black">
      <div className="text-center p-8 border-4 border-pixel-orange">
        <div className="mb-4 flex justify-center">
          {/* Pixelated 404 */}
          <div className="grid grid-cols-5 gap-1">
            {/* 4 */}
            <div className="w-4 h-4 bg-pixel-orange"></div>
            <div className="w-4 h-4 bg-transparent"></div>
            <div className="w-4 h-4 bg-pixel-orange"></div>
            <div className="w-4 h-4 bg-transparent"></div>
            <div className="w-4 h-4 bg-pixel-orange"></div>
            
            <div className="w-4 h-4 bg-pixel-orange"></div>
            <div className="w-4 h-4 bg-transparent"></div>
            <div className="w-4 h-4 bg-pixel-orange"></div>
            <div className="w-4 h-4 bg-transparent"></div>
            <div className="w-4 h-4 bg-pixel-orange"></div>
            
            <div className="w-4 h-4 bg-pixel-orange"></div>
            <div className="w-4 h-4 bg-pixel-orange"></div>
            <div className="w-4 h-4 bg-pixel-orange"></div>
            <div className="w-4 h-4 bg-transparent"></div>
            <div className="w-4 h-4 bg-pixel-orange"></div>
            
            <div className="w-4 h-4 bg-transparent"></div>
            <div className="w-4 h-4 bg-transparent"></div>
            <div className="w-4 h-4 bg-pixel-orange"></div>
            <div className="w-4 h-4 bg-transparent"></div>
            <div className="w-4 h-4 bg-pixel-orange"></div>
            
            <div className="w-4 h-4 bg-transparent"></div>
            <div className="w-4 h-4 bg-transparent"></div>
            <div className="w-4 h-4 bg-pixel-orange"></div>
            <div className="w-4 h-4 bg-transparent"></div>
            <div className="w-4 h-4 bg-pixel-orange"></div>
          </div>
        </div>
        <h1 className="font-pixel text-2xl text-pixel-orange mb-4">PAGE NOT FOUND</h1>
        <p className="font-pixel-secondary text-white mb-6">This level doesn't exist... yet!</p>
        <Link to="/" className="pixel-btn inline-block animate-pixel-pulse">
          RETURN HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
