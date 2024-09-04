import React from 'react';
import ModuleList from '../components/ModuleList';

const LandingPage: React.FC = () => {
    return (
        <div className="p-6 min-h-screen">
            <header className="mb-12 text-center">
                <h1 className="text-5xl font-extrabold text-pink">Welcome to ChatMate</h1>
                <p className="mt-4 text-xl text-darkGray">Choose a module to start interacting with our AI-powered tools.</p>
            </header>
            <ModuleList />
        </div>
    );
};

export default LandingPage;
