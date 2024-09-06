import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopNav from './TopNav';
import Footer from './Footer';
import ReactGA from 'react-ga4';

const Layout: React.FC = () => {

    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize('G-1B4PL71XRD');
        ReactGA.send('pageview');
    }, []);

    useEffect(() => {

        ReactGA.send({ hitType: 'pageview', page: location.pathname });
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-lightGray to-lightBlue scrollbar-hide">
            <TopNav />
            <main className="flex-grow p-6  shadow-soft">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;