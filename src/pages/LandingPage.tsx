import React from 'react';
import ModuleList from '../components/ModuleList';

const LandingPage: React.FC = () => {
    return (
        <div className="pt-20 p-6 min-h-screen">
            <header className="mb-8 text-center">
                <h1 className="text-5xl font-bold text-darkBlue">
                    Welcome to <span className="text-pink">ChatMate</span>
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                    Choose a module to start interacting with our AI-powered tools.
                </p>
            </header>

            <ModuleList />
        </div>
    );
};

export default LandingPage;
