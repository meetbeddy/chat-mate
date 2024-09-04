
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
        <div className="card w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <figure>
                <img src={img} alt={moduleName} className="w-full h-48 object-cover" />
            </figure>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{moduleName}</h2>
                <p className="mt-2 text-gray-600">{moduleDescription}</p>
                <div className="mt-4">
                    <Link to={moduleRoute} className="btn btn-primary">Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default ModuleCard;
