import React from "react";
import ModuleInteraction from "../components/ModuleInteraction";

const AIFinancialAdvisor: React.FC = () => {
    const systemMessage = "You are an AI financial advisor. Your role is to provide users with personalized financial advice, budgeting tips, investment strategies, and overall financial management.";

    return (
        <ModuleInteraction
            title="AI Financial Advisor"
            placeholder="How can I assist with your finances?"
            systemMessage={systemMessage}
        />
    );
};

export default AIFinancialAdvisor;
