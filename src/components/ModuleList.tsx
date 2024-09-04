// src/components/ModuleList.tsx
import React from 'react';
import ModuleCard from './ModuleCard';

// Example modules data
const modules = [
    {
        moduleName: "Personal Assistant",
        moduleDescription: "Your very own personal assistant at your service.",
        moduleRoute: "/assistant",
        img: "/assets/cover/assistant.png",
    },
    {
        moduleName: "Cold Email",
        moduleDescription: "Generate cold email templates instantly.",
        moduleRoute: "/cold",
        img: "/assets/cover/coldEmail.png",
    },
    // Add other modules here
];

const ModuleList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
