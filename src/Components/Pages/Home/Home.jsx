import React from 'react';
import Banner from './Banner/Banner';
import Destination from './Destination/Destination';
import About from '../About/About';
import AmazingPlaces from './AmazingPlaces/AmazingPlaces';
import Testimonial from './Testimonial/Testimonial';
import Facility from './Facility/Facility';
import DemoCard from './DemoCard/DemoCard';
import TravelBlogs from './TravelBlogs/TravelBlogs';
const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Destination/>
            <About/>
            <AmazingPlaces/>
            <DemoCard/>
            <Testimonial/>
            <TravelBlogs/>
            <Facility/>
        </div>
    );
};

export default Home;