import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";


const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md z-10 cursor-pointer hover:bg-purple-200"
  >
    <MdOutlineKeyboardArrowLeft className='text-2xl' />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md z-10 cursor-pointer hover:bg-purple-200"
  >
    <MdOutlineKeyboardArrowRight className='text-2xl' />
  </div>
);

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('tourPlace.json')
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-12 px-5 lg:px-10 bg-gradient-to-r from-blue-50 to-pink-50 relative">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Explore Popular Destinations
      </h2>
      <Slider {...settings}>
        {destinations.map((place) => (
          <div key={place.id} className="p-3">
            <div className="bg-white rounded-md shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative p-4 pt-6">
                <div className="overflow-hidden rounded-t-full shadow-md">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-40 object-cover rounded-t-full"
                  />
                </div>
                <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Top Place
                </div>
              </div>
              <div className="px-4 pb-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {place.name}
                </h3>
                <p className="text-sm text-gray-500">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Destination;
