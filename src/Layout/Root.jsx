import React from 'react';
import { Outlet } from 'react-router-dom';
import TopToScroll from '../Components/TopToScroll/TopToScroll';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
const Root = () => {
    return (
        <div>
            <TopToScroll/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;