import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-96"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold">Epic Gaming Experience</h1>
        <p className="text-gray-300 mt-4 max-w-xl">
          Discover the best games, handpicked just for you.
        </p>
        <Link to="/game/1" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-800">
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
