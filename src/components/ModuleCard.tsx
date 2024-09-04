import React from 'react';
import { Link } from 'react-router-dom';

interface ModuleCardProps {
    moduleName: string;
    moduleDescription: string;
    moduleRoute: string;
    img: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ moduleName, moduleDescription, moduleRoute, img }) => {
    return (
        <div className="card w-full max-w-xs bg-white shadow-soft rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <figure className="relative">
                <img src={img} alt={moduleName} className="w-full h-36 object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
            </figure>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-darkBlue">{moduleName}</h2>
                <p className="mt-1 text-sm text-lightBlue">{moduleDescription}</p>
                <div className="mt-4">
                    <Link to={moduleRoute} className="btn bg-pink text-white hover:bg-lightPink rounded-lg px-3 py-2 text-sm">Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default ModuleCard;
