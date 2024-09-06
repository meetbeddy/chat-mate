import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-3xl font-extrabold text-pink mb-6">About ChatMate</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    ChatMate is your personal AI assistant powered by the latest GPT technology. Whether you're looking to automate emails, manage your finances, or have a friendly conversation, ChatMate is here to help.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our app offers various modules, including Personal Assistant, Cold Email Automation, AI Financial Planner, and more. Each module is designed to make your life easier by leveraging the power of AI.
                </p>

                <h2 className="text-2xl font-bold text-darkBlue mb-4">Key Features</h2>
                <ul className="text-left text-lg text-gray-700 list-disc list-inside mx-auto w-full max-w-lg">
                    <li>AI-powered personal assistant for everyday tasks</li>
                    <li>Automated cold email generation and management</li>
                    <li>Financial planning and analysis tools</li>
                    <li>Seamless integration with various AI models</li>
                    <li>Customizable interaction modules for different use cases</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
