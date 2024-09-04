import React from 'react';

const TopNav: React.FC = () => {
    return (
        <header className="bg-gray-100 p-4 flex justify-between items-center">
            <div className="text-lg font-semibold">ChatMate</div>
            <div className="flex items-center space-x-4">
                <button className="btn btn-primary">Sign In</button>
            </div>
        </header>
    );
};

export default TopNav;
