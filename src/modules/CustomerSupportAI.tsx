import React from "react";
import ModuleInteraction from "../components/ModuleInteraction";

const CustomerSupportAI: React.FC = () => {
    const systemMessage = "You are an AI designed to assist users with customer support tasks. You help in drafting responses, handling queries, and solving issues effectively and professionally.";

    return (
        <ModuleInteraction
            title="Customer Support AI"
            placeholder="How can I assist with your customer support task?"
            systemMessage={systemMessage}
        />
    );
};

export default CustomerSupportAI;
