import React from 'react';

const destinations = [
  {
    id: 1,
    name: 'Paris',
    location: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34', // Eiffel Tower
  },
  {
    id: 2,
    name: 'Bali',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1549887534-1723e5032e92', // Bali Beach
  },
  {
    id: 3,
    name: 'Santorini',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9', // Santorini
  },
  {
    id: 4,
    name: 'Kyoto',
    location: 'Japan',
    image: 'https://images.unsplash.com/photo-1587191139211-8f3b30d951f3', // Kyoto Temple
  },
  {
    id: 5,
    name: 'New York City',
    location: 'USA',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442', // NYC Skyline
  },
  {
    id: 6,
    name: 'Rome',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1526481280691-906f9a522b29', // Colosseum
  },
  {
    id: 7,
    name: 'Dubai',
    location: 'UAE',
    image: 'https://images.unsplash.com/photo-1571030908226-89763f9e84b8', // Dubai Skyline
  },
  {
    id: 8,
    name: 'Cape Town',
    location: 'South Africa',
    image: 'https://images.unsplash.com/photo-1599471795736-55f1f21e0f83', // Table Mountain, Cape Town
  },
];

const Destination = () => {
  return (
    <div className="bg-white py-16 px-5 lg:px-20 text-center">
      <p className="text-orange-500 text-base font-medium mb-2">Top Travel Spots</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Popular Destinations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:scale-105"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-left bg-white">
              <h3 className="text-xl font-semibold text-gray-800">{dest.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{dest.location}</p>
              <button className="mt-auto px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
