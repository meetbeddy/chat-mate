import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-lightGray to-lightBlue ">
            <TopNav />
            <main className="flex-grow p-6  shadow-soft">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;