import React, { useState } from 'react';

const tabs = ['New', 'Featured', 'Discount', 'Popular'];

const AmazingPlaces = () => {
  const [activeTab, setActiveTab] = useState('New');

  return (
    <div className="text-center py-12 px-4 bg-white">
      <p className="text-orange-500 text-base font-medium mb-2">Popular Tour</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Amazing Tour Places</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md text-sm font-medium transition border-b-2
              ${activeTab === tab
                ? 'text-green-600 bg-green-50 border-green-500'
                : 'text-gray-700 bg-green-50 border-transparent hover:border-green-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AmazingPlaces;
