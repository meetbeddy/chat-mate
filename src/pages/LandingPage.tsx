
import React from 'react';
import ModuleList from '../components/ModuleList';

const LandingPage: React.FC = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to ChatMate</h1>
                <p className="mt-2 text-lg text-gray-600">Choose a module to start interacting with our AI-powered tools.</p>
            </header>
            <ModuleList />
        </div>
    );
};

export default LandingPage;
