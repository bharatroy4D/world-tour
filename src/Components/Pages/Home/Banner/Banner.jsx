import React from 'react';
import {
  FaSearchLocation,
  FaFlag,
  FaCalendarAlt,
  FaUserFriends,
  FaSearch,
} from "react-icons/fa";
import hero_2 from '../../../../assets/hero_2.jpg';

const Banner = () => {
  return (
    <div className='relative w-full h-[65%] lg:h-screen max-w-7xl mx-auto overflow-hidden'>
      {/* Background Image */}
      <img src={hero_2} alt="Banner" className='w-full h-full object-cover' />

      {/* Heading */}
      <h1 className='absolute top-1/4 md:top-1/3 left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold text-center z-20 px-2'>
        Explore The World With Us
      </h1>

      {/* Search Box */}
      <div className='hidden lg:block absolute bottom-10 w-full px-4 lg:px-0'>
        <div className="mt-6 bg-white rounded-full shadow-md w-full max-w-5xl mx-auto px-4 py-5 flex flex-col md:flex-row gap-4 md:gap-5 items-center justify-between">
          {/* Location */}
        <div className="flex items-center gap-2 w-44 lg:w-full border px-4 py-2 rounded-full text-gray-700">
            <FaSearchLocation />
            <span className='text-sm md:text-base'>Where to?</span>
           
          </div>

          {/* Activity */}
          <div className="hidden lg:inline-flex items-center gap-2 w-full border px-4 py-2 rounded-full text-gray-700">
            <FaFlag />
            <span className='text-sm md:text-base'>All Activity</span>
          </div>

          {/* Date */}
          <div className="hidden lg:inline-flex items-center gap-2 w-full border px-4 py-2 rounded-full text-gray-700">
            <FaCalendarAlt />
            <span className='text-sm md:text-base'>Date</span>
            <input type="date" className="ml-2 bg-transparent outline-none text-sm md:text-base" />
          </div>

          {/* Guests */}
          <div className="hidden lg:inline-flex items-center gap-2 w-full border px-4 py-2 rounded-full text-gray-700">
            <FaUserFriends />
            <span className='text-sm md:text-base'>Guests</span>
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 px-6 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600 text-sm md:text-base w-fit lg:w-full">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
