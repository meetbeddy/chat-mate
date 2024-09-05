import { Link } from 'react-router-dom';
import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-lightGray">
            <h1 className="text-6xl font-bold text-darkBlue mb-4">404</h1>
            <p className="text-2xl text-darkGray mb-8">Oops! The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="px-6 py-2 bg-pink text-white font-semibold rounded-lg shadow-lg hover:bg-lightPink transition duration-300"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
