import React from 'react';
import GameCard from './GameCard';

const GameGrid = () => {
  const games = [
    { id: 1, title: 'Farcry', imageUrl: '/images/farcry.jpeg' },
    { id: 2, title: 'Fallout', imageUrl: '/images/fallout.jpeg' },
    { id: 3, title: 'God of War', imageUrl: '/images/gow.jpeg' },
    { id: 4, title: 'Horizon', imageUrl: '/images/horizon.jpeg' },
    { id: 5, title: 'Sekiro', imageUrl: '/images/sekiro.jpeg' },
    { id: 6, title: 'Watch Dogs', imageUrl: '/images/watchdogs.jpeg' },
    // Add more games here...
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl text-white font-bold mb-4">All Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
