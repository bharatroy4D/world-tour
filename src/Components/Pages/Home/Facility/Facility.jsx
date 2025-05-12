import React from 'react';
import { FaPlane, FaHotel, FaCar, FaConciergeBell } from 'react-icons/fa';
const services = [
    {
        id: 1,
        name: 'Flight Booking',
        icon: <FaPlane className="text-4xl text-blue-500" />,
    },
    {
        id: 2,
        name: 'Hotel Booking',
        icon: <FaHotel className="text-4xl text-green-500" />,
    },
    {
        id: 3,
        name: 'Car Rentals',
        icon: <FaCar className="text-4xl text-yellow-500" />,
    },
    {
        id: 4,
        name: 'Tour Packages',
        icon: <FaConciergeBell className="text-4xl text-red-500" />,
    },
];

const Facility = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-base-300 ">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="flex items-center gap-4  rounded-xl py-6 mx-auto "
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className=" font-semibold text-gray-800 mb-2">{service.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Facility;