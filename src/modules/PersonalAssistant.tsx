import React from "react";
import ModuleInteraction from "../components/ModuleInteraction";

const PersonalAssistant: React.FC = () => {
    const handleSubmit = async (input: string) => {
        // Simulate AI response (you'll replace this with actual API calls)
        return `Personal Assistant response to: "${input}"`;
    };

    return (
        <ModuleInteraction
            title="Personal Assistant"
            placeholder="How can I assist you today?"
            onSubmit={handleSubmit}
        />
    );
};

export default PersonalAssistant;
