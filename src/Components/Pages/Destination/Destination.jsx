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
    image: 'https://img.freepik.com/free-photo/woman-walking-kelingking-beach-nusa-penida-island-bali-indonesia_335224-337.jpg?uid=R180858093&semt=ais_hybrid&w=740', // Bali Beach
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
    image: 'https://img.freepik.com/free-photo/woman-bikini-sitting-viewpoint-nang-yuan-island-thailand_335224-1091.jpg?uid=R180858093&semt=ais_hybrid&w=740', // Kyoto Temple
  },
  {
    id: 5,
    name: 'Park Girl with Laptop',
    location: 'Unknown',
    image: 'https://img.freepik.com/free-photo/brunette-girl-sunglasses-is-sitting-fence-park-she-holds-yellow-laptop-smiling-camera_197531-25034.jpg?uid=R180858093&semt=ais_hybrid&w=740',
  },
  {
    id: 6,
    name: 'Koh Nangyuan Island Viewpoint',
    location: 'Thailand',
    image: 'https://img.freepik.com/free-photo/beautiful-viewpoint-koh-nangyuan-island-surat-thani-thailand_335224-1097.jpg?uid=R180858093&semt=ais_hybrid&w=740',
  },
  {
    id: 7,
    name: 'Nang Yuan Island Viewpoint',
    location: 'Thailand',
    image: 'https://img.freepik.com/free-photo/woman-bikini-sitting-viewpoint-nang-yuan-island-thailand_335224-1091.jpg?uid=R180858093&semt=ais_hybrid&w=740',
  },
  {
    id: 8,
    name: 'Kelingking Beach Walk',
    location: 'Bali, Indonesia',
    image: 'https://img.freepik.com/free-photo/woman-walking-kelingking-beach-nusa-penida-island-bali-indonesia_335224-337.jpg?uid=R180858093&semt=ais_hybrid&w=740',
  }
];


const Destination = () => {
  return (
    <div className="bg-white py-10 px-5 w-full lg:max-w-7xl lg:px-20 text-center">
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
