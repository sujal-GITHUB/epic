import React from 'react';
import HeroSection from '../components/HeroSection';
import GameCarousel from '../components/GameCarousel';
import GameGrid from '../components/GameGrid';

const Home = () => {
  return (
    <>
      <HeroSection />
      <GameCarousel />
      <GameGrid />
    </>
  );
};

export default Home;
