import React from 'react';

const About: React.FC = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-2">Welcome to our job seeker platform. We are dedicated to helping you find your dream job.</p>
            <p className="text-lg mb-2">Our mission is to connect job seekers with employers in the most efficient way possible.</p>
            <p className="text-lg">Thank you for choosing our platform!</p>
        </div>
    );
};

export default About;