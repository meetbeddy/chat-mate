import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaBars, FaTimes, FaUser, FaHome, FaInfoCircle, FaSignInAlt, FaMoneyBill } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import { useAuth } from '../hooks/useAuth';
import { useApiUsage } from '../hooks/useApiUsage';

interface ApiUsage {
    apiUsageCount: number;
    apiLimit: number;
}

interface NavItemProps {
    to: string;
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
}


const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [apiUsage, setApiUsage] = useState<ApiUsage | null>(null);
    const { currentUser, logout } = useAuth();

    const { getApiUsage } = useApiUsage();
    const userId = currentUser?.uid;

    useEffect(() => {
        const fetchApiUsage = async () => {
            if (userId) {
                try {
                    const usage = await getApiUsage(userId);
                    setApiUsage(usage);
                } catch (error) {
                    console.error("Failed to fetch API usage:", error);
                }
            }
        };

        fetchApiUsage();
    }, [getApiUsage, userId]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const NavItem = ({ to, icon: Icon, children }: NavItemProps) => (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm transition ${isActive
                    ? 'text-pink border-b-2 border-pink md:border-none'
                    : 'text-darkBlue hover:text-pink'
                }`
            }
            onClick={() => setIsOpen(false)}
        >
            <Icon className="mr-2" />
            {children}
        </NavLink>
    );

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-pink text-2xl font-bold flex items-center">
                        ChatMate
                    </Link>

                    <div className="hidden md:flex space-x-4">
                        <NavItem to="/" icon={FaHome}>Home</NavItem>
                        <NavItem to="/about" icon={FaInfoCircle}>About</NavItem>
                        <NavItem to="/pricing" icon={FaMoneyBill}>Pricing</NavItem>
                        {!currentUser && <NavItem to="/login" icon={FaSignInAlt}>Login</NavItem>}
                    </div>

                    {currentUser && (
                        <Menu as="div" className="relative ml-3">
                            <MenuButton className="flex items-center text-darkBlue hover:text-pink transition">
                                <FaUser className="w-6 h-6" />
                                <span className="ml-2 hidden md:inline">{currentUser.displayName || 'User'}</span>
                            </MenuButton>
                            <MenuItems className="absolute right-0 w-64 mt-2 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-md">
                                <div className="py-2 px-4 border-b border-gray-200">
                                    <div className="px-4 py-3 bg-gradient-to-r from-pink to-purple-500 text-white">
                                        <p className="font-semibold text-lg">{currentUser.displayName || 'User'}</p>
                                        <p className="text-sm opacity-90">{currentUser.email}</p>
                                    </div>
                                    <div className="py-2 px-4 bg-gray-50">
                                        <p className="text-sm font-medium text-gray-700">Current Plan: <span className="font-bold text-pink">Free Plan</span></p>
                                        {apiUsage && (
                                            <>
                                                <div className="mt-1 bg-gray-200 rounded-full h-2">
                                                    <div className="bg-pink h-2 rounded-full" style={{ width: `${(apiUsage.apiUsageCount / apiUsage.apiLimit) * 100}%` }}></div>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-1">API Limit: {apiUsage.apiUsageCount}/{apiUsage.apiLimit} requests</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <MenuItem>
                                    {({ disabled }) => (
                                        <button
                                            onClick={logout}
                                            className={`flex items-center w-full px-4 py-2 text-sm ${!disabled ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                        >
                                            <IoMdLogOut className="mr-2" />
                                            Logout
                                        </button>
                                    )}
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    )}

                    <button
                        className="md:hidden text-darkBlue focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <NavItem to="/" icon={FaHome}>Home</NavItem>
                <NavItem to="/about" icon={FaInfoCircle}>About</NavItem>
                {!currentUser && <NavItem to="/login" icon={FaSignInAlt}>Login</NavItem>}
                {currentUser && (
                    <button
                        onClick={logout}
                        className="flex items-center w-full px-4 py-2 text-sm text-darkBlue hover:bg-pink hover:text-white transition"
                    >
                        <IoMdLogOut className="mr-2" />
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default TopNav;
