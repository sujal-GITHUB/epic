import React from 'react';
import { Link } from 'react-router-dom';

const GameList = ({ games, searchQuery }) => {
  // Filter games based on search query
  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.length > 0 ? (
          filteredGames.map(game => (
            <div key={game.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <Link to={`/game/${game.id}`}>
                <img 
                  src={game.imageUrl} 
                  alt={game.title} 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-white">{game.title}</h2>
                <p className="text-gray-400 mt-2">{game.price}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-lg font-semibold">{game.rating.toFixed(1)}</span>
                  <svg className="w-5 h-5 text-yellow-400 ml-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l2.39 4.83L20 8l-3.69 3.61L17.61 18 12 14.87 6.39 18 7.69 11.61 4 8l5.61-.17L12 2z"/>
                  </svg>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-white">No games found.</p>
        )}
      </div>
    </div>
  );
};

export default GameList;
