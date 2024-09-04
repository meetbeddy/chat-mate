import React from 'react';
import { Outlet } from 'react-router-dom';

import TopNav from './TopNav';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
        <div >
            <TopNav />
            <main className="p-6 bg-gray-100 min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
