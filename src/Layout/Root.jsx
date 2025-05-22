import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header/Header';
import Footer from '../Components/Shared/Footer/Footer';
import TopToScroll from '../Components/TopToScroll/TopToScroll';
const Root = () => {
    return (
        <div>
            <TopToScroll/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;