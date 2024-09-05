import React from "react";
import ModuleInteraction from "../components/ModuleInteraction";

const ColdEmail: React.FC = () => {
    const systemMessage = "You are an AI specialized in generating cold emails. Your role is to assist the user in writing effective and professional cold emails for business outreach, networking, and lead generation.";

    return (
        <ModuleInteraction
            title="Cold Email Generator"
            placeholder="What would you like to achieve with this email?"
            systemMessage={systemMessage}
        />
    );
};

export default ColdEmail;
