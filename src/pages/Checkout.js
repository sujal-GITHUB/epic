import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>
      <form className="bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input type="text" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Address</label>
          <input type="text" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Payment Method</label>
          <select className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white">
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default Checkout;
