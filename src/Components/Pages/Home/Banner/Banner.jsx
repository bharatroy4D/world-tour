import React from 'react';
import hero_2 from '../../../../assets/hero_2.jpg';

const Banner = () => {
  return (
    <div className='relative w-screen mx-auto overflow-hidden'>
      {/* Background Image */}
      <img src={hero_2} alt="Banner" className='w-screen' />

      {/* Heading */}
      <h1 className='absolute top-1/12 md:top-1/3 left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold text-center z-20 px-2'>
        Explore The World With Us
      </h1>
    </div>
  );
};

export default Banner;
