import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 p-4">
            <div className="flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <h1>JobViet</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
                        <li><a href="/jobs" className="text-white hover:text-gray-300">Jobs</a></li>
                        <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
                        <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;