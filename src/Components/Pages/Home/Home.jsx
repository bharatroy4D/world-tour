import React from 'react';
import Banner from './Banner/Banner';
import Destination from './Destination/Destination';

const Home = () => {
    return (
        <div className='w-full lg:max-w-7xl  mx-auto'>
            <Banner/>
            <Destination/>
        </div>
    );
};

export default Home;