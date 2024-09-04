import React from 'react';
import ModuleCard from './ModuleCard';
import modules from "../modules/module.json"
const ModuleList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module, index) => (
                <ModuleCard
                    key={index}
                    moduleName={module.moduleName}
                    moduleDescription={module.moduleDescription}
                    moduleRoute={module.moduleRoute}
                    img={module.img}
                />
            ))}
        </div>
    );
};

export default ModuleList;
