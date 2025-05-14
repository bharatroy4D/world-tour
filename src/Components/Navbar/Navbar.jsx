import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className=' container mx-auto px-5 lg:px-10 poppins '>
            <div className='flex items-center justify-between py-4  '>
                {/* Logo */}
                <img src={logo} alt="Logo" className='w-28' />

                {/* Desktop Menu */}
                <div className='hidden lg:flex gap-8 items-center font-semibold'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/destination'>Destination</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>

                {/* Icons + Button */}
                <div className='hidden lg:flex items-center gap-5'>
                    <CiSearch className='text-2xl' />
                    <CiHeart className='text-2xl' />
                    <button className='font-semibold text-white bg-[#FF710D] py-1.5 px-4 rounded-full'>
                        Book Now
                    </button>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className='lg:hidden'>
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <HiX className='text-3xl' /> : <HiMenuAlt3 className='text-3xl' />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='lg:hidden flex flex-col items-center gap-4 py-4 bg-base-200 text-center text-lg font-semibold'>
                    <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
                    <NavLink to='/about' onClick={toggleMenu}>About</NavLink>
                    <NavLink to='/destination' onClick={toggleMenu}>Destination</NavLink>
                    <NavLink to='/services' onClick={toggleMenu}>Services</NavLink>
                    <NavLink to='/blogs' onClick={toggleMenu}>Blogs</NavLink>
                    <NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink>
                    <div className='flex gap-5 mt-3'>
                        <CiSearch className='text-2xl' />
                        <CiHeart className='text-2xl' />
                    </div>
                    <button className='font-semibold text-white bg-[#FF710D] py-1.5 px-4 rounded-full'>
                        Book Now
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
