import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'; // For React icon (star rating)

const tabs = ['All', 'New', 'Featured', 'Discount', 'Popular'];

const AmazingPlaces = () => {
    const [places, setPlaces] = useState([]);
    const [activeTab, setActiveTab] = useState('All');

    useEffect(() => {
        fetch('tourPlace.json')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, []);

    // Filter places based on active tab
    const filteredPlaces = activeTab === 'All'
        ? places
        : places.filter(place => place.category === activeTab);

    // Limit the filtered places to 3 for the "All" tab or show the full list
    const displayedPlaces = activeTab === 'All' ? filteredPlaces : filteredPlaces.slice(0, 3);

    return (
        <div className="text-center py-12 px-5 lg:px-10 bg-white">
            <p className="text-orange-500 text-base font-medium mb-2">Popular Tour</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Amazing Tour Places</h2>

            {/* Tabs for category selection */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
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

            {/* Grid layout for displaying places */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedPlaces.map((place) => (
                    <div key={place.id} className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
                        <div className="p-5 text-left bg-white">
                            {/* Name and Rating */}
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold text-gray-800 hover:text-green-600 transition duration-300">{place.name}</h3>
                                <div className="flex items-center text-yellow-400">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar key={index} className={`${index < place.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">{place.rating}</span>
                                </div>
                            </div>

                            {/* Price and Duration */}
                            <div className="flex justify-between items-center mb-4">
                                <p className="text font-bold text-gray-500">Price: {place.price}</p>
                                <p className="text-sm text-gray-500">{place.duration}</p>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-start text-gray-600 mb-3">{place.description}</p>

                            {/* Button */}
                            <div className="mt-4 flex items-start">
                                <button
                                    onClick={() => alert(`Booking for ${place.name}`)}
                                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AmazingPlaces;
