import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const destinations = [
    {
        id: 1,
        name: 'Paris',
        location: 'France',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
        rating: 4.8,
        popularFor: 'Eiffel Tower, Cafés',
        budget: '$1,500 - $2,500',
        bestTime: 'April to June',
    },
    {
        id: 2,
        name: 'Bali',
        location: 'Indonesia',
        image: 'https://img.freepik.com/free-photo/woman-walking-kelingking-beach-nusa-penida-island-bali-indonesia_335224-337.jpg?uid=R180858093&semt=ais_hybrid&w=740',
        rating: 4.7,
        popularFor: 'Beaches, Surfing',
        budget: '$800 - $1,500',
        bestTime: 'September',
    },
    {
        id: 3,
        name: 'Santorini',
        location: 'Greece',
        image: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9',
        rating: 4.9,
        popularFor: 'Sunsets, White Houses',
        budget: '$1,200 - $2,200',
        bestTime: 'April to October',
    },
    {
        id: 4,
        name: 'Kyoto',
        location: 'Japan',
        image: 'https://img.freepik.com/free-photo/woman-bikini-sitting-viewpoint-nang-yuan-island-thailand_335224-1091.jpg?uid=R180858093&semt=ais_hybrid&w=740',
        rating: 4.6,
        popularFor: 'Temples, Culture',
        budget: '$1,300 - $2,000',
        bestTime: 'March to May',
    },
];

const Destination = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="relative py-16">
       <div className="absolute left-1/2 -translate-x-1/2 -top-14 z-20 w-[90%] md:w-[80%] lg:max-w-5xl bg-white rounded-full shadow-2xl border border-gray-200 flex flex-wrap items-center justify-between px-10 py-8">
  
  {/* Destination */}
  <div className="flex items-center gap-2 w-full sm:w-auto border-r border-gray-300 pr-6">
    <span className="text-orange-500 text-xl">✈️</span>
    <div>
      <p className="text-gray-500 text-sm">Destination</p>
      <h4 className="text-gray-800 font-semibold">Your City Or Region</h4>
    </div>
  </div>

  {/* Activity */}
  <div className="flex items-center gap-2 w-full sm:w-auto border-r border-gray-300 px-6 ">
    <span className="text-orange-500 text-xl">⚡</span>
    <div className=''>
      <p className="text-gray-500 text-sm">All Activity</p>
      <h4 className="text-gray-800 font-semibold">Choose Activity</h4>
    </div>
  </div>

  {/* Date */}
  <div className="flex items-center gap-2 w-full sm:w-auto border-r border-gray-300 px-6">
    <span className="text-orange-500 text-xl">📅</span>
    <div>
      <p className="text-gray-500 text-sm">Departure Date</p>
      <h4 className="text-gray-800 font-semibold">Date Form</h4>
    </div>
  </div>

  {/* Guest */}
  <div className="flex items-center gap-2 w-full sm:w-auto px-6">
    <span className="text-orange-500 text-xl">👥</span>
    <div>
      <p className="text-gray-500 text-sm">Guest</p>
      <h4 className="text-gray-800 font-semibold">Your Guest</h4>
    </div>
  </div>

  {/* Search Button */}
  <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center gap-2 px-6 py-3 rounded-full shadow-lg transition">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.5 5.5a7.5 7.5 0 0 0 10.303 10.303z" />
    </svg>
    Search
  </button>
</div>


            {/* ✅ Overlay for soft color tint */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/80 backdrop-blur-sm"></div>

            {/* ✅ Foreground Content */}
            <div className="relative container mx-auto px-5 pt-6 md:pt-10 lg:px-10 text-center">
                <p className="text-orange-500 text-base font-medium mb-2">Top Travel Spots</p>
                <h2 className="text-3xl font-bold text-gray-800 mb-10">Popular Destinations</h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
                    {destinations.map((dest, index) => (
                        <div
                            key={dest.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="overflow-hidden lg:h-52">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-28 lg:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-3 lg:p-5 text-left lg:space-y-2">
                                <h3 className="text-lg font-semibold text-gray-800">{dest.name}</h3>
                                <p className="text-sm hidden lg:block text-gray-500">{dest.location}</p>
                                <p className="text-sm hidden lg:block">
                                    <span className="font-medium">Estimated Budget:</span> {dest.budget}
                                </p>
                                <p className="text-sm">
                                    <span className="font-medium">Best Time:</span> {dest.bestTime}
                                </p>
                                <div className="flex items-center text-yellow-500 gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={i < Math.floor(dest.rating) ? 'text-yellow-500' : 'text-gray-300'}
                                        />
                                    ))}
                                    <span className="text-xs text-gray-600 ml-2">{dest.rating}/5</span>
                                </div>
                                <button className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition">
                                    Explore <FaArrowRight className="text-xs" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destination;
