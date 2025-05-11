import React from 'react';
import logo from '../../assets/logo.svg'
import { CiHeart, CiSearch } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div >
            <div className=' flex items-center justify-between shadow-md w-full lg:max-w-7xl px-5 py-4 lg:px-10 mx-auto '>
                <img src={logo} alt="" />
                <div className='flex gap-8 items-center text-lg font-semibold'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/destination'>Destination</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                <div className='flex items-center gap-5'>
                    <CiSearch className='text-2xl  ' />
                    <CiHeart className='text-2xl' />
                    <button className='font-semibold bg-green-400  py-1.5 px-4 rounded-full '>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;