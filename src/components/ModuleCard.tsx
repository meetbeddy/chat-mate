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
        <Link to={moduleRoute} className="block max-w-xs mb-4 bg-white shadow-soft rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <figure className="relative">
                <img src={img} alt={moduleName} className="w-full h-36 object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
            </figure>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-darkBlue">{moduleName}</h2>
                <p className="mt-1 text-sm text-lightBlue">{moduleDescription}</p>
            </div>
        </Link>
    );
};

export default ModuleCard;
