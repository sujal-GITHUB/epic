import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';

const App = () => {
  const [filteredGames, setFilteredGames] = useState([]);

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Navbar setFilteredGames={setFilteredGames} />
        <Routes>
          <Route path="/" element={<Home setFilteredGames={setFilteredGames} />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
