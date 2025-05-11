import React from 'react';
import { FaSearchLocation, FaFlag, FaCalendarAlt, FaUserFriends, FaSearch } from "react-icons/fa";

// import hero from '../../../../assets/hero_img.jpg'
import hero_4 from '../../../../assets/hero_4avif.avif'

const Banner = () => {
    return (
        <div className='container relative w-full lg:max-w-7xl opacity-95 mx-auto h-screen overflow-hidden'>
            <img src={hero_4} alt="" className='w-full h-full' />

            {/* banner content text */}
            <div className='absolute bottom-10 w-full'>
                <h1 className='container text-5xl text-white font-bold text-center'>Explore The World With Us</h1>
                <div className="flex items-center justify-between gap-5 py-5 px-10 mt-50 bg-white rounded shadow-md w-fit mx-auto">
                    {/* Location */}
                    <div className="flex items-center gap-2 px-4 py-2 border rounded-full text-gray-700">
                        <FaSearchLocation />
                        <span>Where to?</span>
                        <select className="ml-2 bg-transparent outline-none">
                          
                        </select>
                    </div>

                    {/* Activity */}
                    <div className="flex items-center justify-between gap-2 px-4 py-2 border rounded-full text-gray-700">
                        <FaFlag />
                        <span>All Activity</span>                      
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 px-4 py-2 border rounded-full text-gray-700">
                        <FaCalendarAlt />
                        <span>Date from</span>
                        <input type="date" className="ml-2 bg-transparent outline-none" />
                    </div>

                    {/* Guests */}
                    <div className="flex items-center gap-2 px-4 py-2 border rounded-full text-gray-700">
                        <FaUserFriends />
                        <span>Guests</span>
                        <select className="ml-2 bg-transparent outline-none">
                            <option>1</option>
                            <option>2</option>
                            <option>3+</option>
                        </select>
                    </div>

                    {/* Search Button */}
                    <button className="flex items-center gap-2 px-6 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600">
                        <FaSearch />
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;