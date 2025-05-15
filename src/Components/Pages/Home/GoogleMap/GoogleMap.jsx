// components/GoogleMap.jsx
import React from 'react';
import {
    GoogleMap as GoogleMapLib,
    LoadScript,
    Marker,
} from '@react-google-maps/api';

const GoogleMap = ({
    apiKey,
    center = { lat: 23.8103, lng: 90.4125 }, // Default: Dhaka, Bangladesh
    zoom = 10,
    markers = [],
    mapHeight = '400px',
    mapWidth = '100%',
}) => {
    const containerStyle = {
        width: mapWidth,
        height: mapHeight,
        borderRadius: '16px',
    };

    return (
        <div className='container px-5 lg:px-10 py-10 mx-auto'>
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMapLib
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={zoom}
                >
                    {/* Default center marker */}
                    <Marker position={center} />

                    {/* Optional additional markers */}
                    {markers.map((marker, index) => (
                        <Marker key={index} position={marker} />
                    ))}
                </GoogleMapLib>
            </LoadScript>
        </div>
    );
};

export default GoogleMap;
