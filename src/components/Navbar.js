import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setFilteredGames }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Fetch games from some source or use context
    // Assuming `games` is fetched or available in a higher-level component
    const games = []; // Placeholder for games data
    const filteredGames = games.filter(game =>
      game.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(filteredGames);
  };

  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Gaming Store</Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/cart" className="text-gray-300 hover:text-white">Cart</Link>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search games..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
