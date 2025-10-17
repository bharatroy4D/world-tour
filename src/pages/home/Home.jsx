import React from 'react';
import Banner from './banner/Banner';
import Destination from '../destination/Destination';
import About from '../abouts/About';
import AmazingPlaces from './amazingPlaces/AmazingPlaces';
import DemoCard from './demoCard/DemoCard';
import Testimonials from './testimonials/Testimonials';
import TravelBlogs from './travelBlogs/TravelBlogs';
import Facility from './facility/Facility';

const Home = () => {
      return (
        <div className=''>
            <Banner/>
            <Destination/>
            <About/>
            <AmazingPlaces/>
            <DemoCard/>
            <Testimonials/>
            <TravelBlogs/>
            <Facility/>
        </div>
    );
};

export default Home;