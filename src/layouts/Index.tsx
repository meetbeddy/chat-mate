import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
        <div className="bg-lightGray min-h-screen flex flex-col">
            <TopNav />
            <main className="flex-grow p-6 bg-white shadow-soft">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;