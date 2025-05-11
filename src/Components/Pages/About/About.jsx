import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-pink-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Image / Illustration */}
        <motion.img
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="https://cdn.pixabay.com/photo/2021/07/05/16/56/travel-6388630_960_720.png"
          alt="Travel Illustration"
          className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-xl"
        />

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-pink-500">Our Journey</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We are a passionate team of travelers who believe in exploring the world and sharing the beauty of every destination.
            With years of experience, we help people plan unforgettable trips.
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>✅ Over 100+ destinations covered</li>
            <li>✅ Experienced local guides</li>
            <li>✅ Personalized travel experiences</li>
          </ul>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
