import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { FaPlaneDeparture } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-blue-600 font-bold text-2xl tracking-wide"
        >
          <FaPlaneDeparture className="text-4xl text-orange-500 drop-shadow-md" />
          <span>TravelMate</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          {["Home", "About", "Destinations", "Services", "Blogs", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className={({ isActive }) =>
                `relative transition duration-300 hover:text-orange-500 ${isActive
                  ? "text-orange-500 font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-orange-500 after:rounded-full"
                  : ""
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <CiSearch className="text-2xl text-gray-600 cursor-pointer hover:text-orange-500 transition" />
          <CiHeart className="text-2xl text-gray-600 cursor-pointer hover:text-orange-500 transition" />
          <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:opacity-90 text-white font-medium px-6 py-2 rounded-full shadow-lg transition-all">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <HiX className="text-3xl text-gray-800" />
            ) : (
              <HiMenuAlt3 className="text-3xl text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100 px-6 py-6">
          <nav className="flex flex-col gap-5 text-gray-700 font-medium">
            {["Home", "About", "Destinations", "Services", "Blogs", "Contact"].map((item) => (
              <NavLink
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `transition-colors duration-300 hover:text-orange-500 ${isActive ? "text-orange-500 font-semibold" : ""}`
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          <div className="flex gap-6 mt-6">
            <CiSearch className="text-2xl text-gray-600 cursor-pointer hover:text-orange-500" />
            <CiHeart className="text-2xl text-gray-600 cursor-pointer hover:text-orange-500" />
          </div>

          <button className="mt-6 w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-medium py-2 rounded-full shadow-lg hover:opacity-90 transition">
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
