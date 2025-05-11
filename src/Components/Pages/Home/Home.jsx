import React from 'react';
import Banner from './Banner/Banner';
import Destination from './Destination/Destination';
import About from '../About/About';
import AmazingPlaces from './AmazingPlaces/AmazingPlaces';

const Home = () => {
    return (
        <div className='w-full lg:max-w-7xl  mx-auto'>
            <Banner/>
            <Destination/>
            <About/>
            <AmazingPlaces/>
        </div>
    );
};

export default Home;