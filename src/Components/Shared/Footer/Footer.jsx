import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-800'>
      <footer className=" text-white py-12 w-full lg:max-w-7xl px-5 lg:px-20 mx-auto">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              We are a travel company dedicated to providing the best vacation experiences around the world. Our mission is to make travel easy, exciting, and memorable.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/about" className="text-sm text-gray-400 hover:text-green-500">About</a></li>
              <li><a href="/services" className="text-sm text-gray-400 hover:text-green-500">Services</a></li>
              <li><a href="/destinations" className="text-sm text-gray-400 hover:text-green-500">Destinations</a></li>
              <li><a href="/contact" className="text-sm text-gray-400 hover:text-green-500">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-sm text-gray-400">123 Travel St, Vacation City, 56789</p>
            <p className="text-sm text-gray-400">Email: contact@travelcompany.com</p>
            <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Travel Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
