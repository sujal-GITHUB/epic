import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`}>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img src={game.imageUrl} alt={game.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-white text-lg font-semibold">{game.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
