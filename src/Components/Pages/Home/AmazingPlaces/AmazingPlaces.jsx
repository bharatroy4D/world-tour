import React, { useEffect, useState } from 'react';

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {displayedPlaces.map((place) => (
                    <div key={place.id} className="bg-white border rounded-lg shadow-md overflow-hidden">
                        <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{place.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">{place.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AmazingPlaces;
