import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ViewDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // for back navigation
    const [singleCard, setSingleCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/tourPlace.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to load data.');
                }
                return res.json();
            })
            .then((data) => {
                const found = data.find((item) => item.id === parseInt(id));
                setSingleCard(found);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-center mt-20 text-blue-500 text-lg font-medium">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-20 text-red-500 text-lg font-medium">{error}</div>;
    }

    if (!singleCard) {
        return <div className="text-center mt-20 text-gray-500 text-lg">No data found.</div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-10">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col items-center md:flex-row gap-10">

                {/* Left side: Image */}
                <div className="md:w-1/2">
                    <img
                        src={singleCard.image}
                        alt={singleCard.name}
                        className="w-full  object-cover   md:rounded-lg"
                        style={{ minHeight: '420px' }}
                    />
                </div>

                {/* Right side: Text Content */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-6">
                    <h1 className="text-5xl font-extrabold leading-tight text-gray-900">{singleCard.name}</h1>

                    <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                        {singleCard.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      
                        <div className="flex items-center gap-2">
                            <h3 className="text-indigo-600 font-semibold text-xl  flex items-center gap-2">
                                <span className="text-2xl"></span> Price:
                            </h3>
                            <p className="text-gray-800 text-md">${singleCard.price}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Additional Information
                        </h3>
                        <ul className="list-disc list-inside space-y-3 text-gray-700 text-md">
                            <li><strong>Duration:</strong> {singleCard.duration || 'N/A'}</li>
                            <li><strong>Best Season:</strong> {singleCard.season || 'N/A'}</li>
                            <li><strong>Highlights:</strong> {singleCard.highlights || 'N/A'}</li>
                        </ul>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <button
                            type="button"
                            className=" inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
                        >
                            Book Now
                        </button>
                        {/* Back Button */}
                        <button
                            onClick={() => navigate(-1)}
                            className=" bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition duration-200"
                        >
                            ← Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
