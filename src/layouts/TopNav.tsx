import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const TopNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link to="/" className="text-pink text-2xl font-bold">
                        ChatMate
                    </Link>
                </div>

                {/* Links Section */}
                <div className="hidden md:flex space-x-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-pink border-b-2 border-pink transition'
                                : 'text-darkBlue hover:text-pink transition'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-pink border-b-2 border-pink transition'
                                : 'text-darkBlue hover:text-pink transition'
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-pink border-b-2 border-pink transition'
                                : 'text-darkBlue hover:text-pink transition'
                        }
                    >
                        Login
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-darkBlue focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'block px-4 py-2  bg-pink text-white transition'
                                : 'block px-4 py-2 text-darkBlue hover:bg-pink hover:text-white transition'
                        }
                        onClick={toggleMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? 'block px-4 py-2  bg-pink text-white transition'
                                : 'block px-4 py-2 text-darkBlue hover:bg-pink hover:text-white transition'
                        }
                        onClick={toggleMenu}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? 'block px-4 py-2  bg-pink text-white transition'
                                : 'block px-4 py-2 text-darkBlue hover:bg-pink hover:text-white transition'
                        }
                        onClick={toggleMenu}
                    >
                        Login
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default TopNav;
