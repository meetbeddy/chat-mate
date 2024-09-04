
import React from 'react';
import { Link } from 'react-router-dom';

const TopNav: React.FC = () => {
    return (
        <header className="bg-white shadow-soft">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-xl font-bold text-pink">
                    <Link to="/" className="hover:text-lightPink">ChatMate</Link>
                </div>
                <nav className="flex space-x-4 text-darkGray">
                    <Link to="/" className="hover:text-pink">Home</Link>
                    <Link to="/about" className="hover:text-pink">About</Link>
                    <button className="btn bg-pink text-white hover:bg-lightPink rounded-lg px-4 py-2">Login</button>
                </nav>
            </div>
        </header>
    );
};

export default TopNav;
