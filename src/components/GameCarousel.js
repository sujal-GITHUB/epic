import React from 'react';
import { Link } from 'react-router-dom';

const GameCarousel = () => {
  const games = [
    { id: 1, title: 'Farcry', imageUrl: '/images/farcry.jpeg' },
    { id: 2, title: 'God of War', imageUrl: '/images/gow.jpeg' },
    { id: 3, title: 'Horizon', imageUrl: '/images/horizon.jpeg' },
    { id: 4, title: 'Sekiro', imageUrl: '/images/sekiro.jpeg' },
    // Add more games here...
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl text-white font-bold mb-4">Featured Games</h2>
      <div className="flex overflow-x-scroll space-x-4">
        {games.map((game) => (
          <Link key={game.id} to={`/game/${game.id}`} className="min-w-full md:min-w-1/3">
            <div className="relative">
              <img src={game.imageUrl} alt={game.title} className="rounded-lg shadow-md w-full h-56 object-cover" />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full text-white">
                <h3 className="text-lg font-semibold">{game.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameCarousel;
