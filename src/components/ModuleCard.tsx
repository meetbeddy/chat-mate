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
        <Link to={moduleRoute} className="block w-full">
            <div className="card w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full transition-transform duration-200 hover:shadow-xl hover:scale-105">
                <figure>
                    <img src={img} alt={moduleName} className="w-full h-40 object-cover" />
                </figure>
                <div className="p-4 flex-grow">
                    <h2 className="text-lg font-semibold text-darkBlue">{moduleName}</h2>
                    <p className="mt-2 text-gray-600">{moduleDescription}</p>
                </div>
            </div>
        </Link>
    );
};

export default ModuleCard;
