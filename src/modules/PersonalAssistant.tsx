import React from "react";
import ModuleInteraction from "../components/ModuleInteraction";

const PersonalAssistant: React.FC = () => {
    const systemMessage = "You are a personal assistant AI. Your role is to help the user with various tasks such as scheduling, reminders, and general life management advice. Be proactive, friendly, and always prioritize the user's well-being and efficiency.";

    return (
        <ModuleInteraction
            title="Personal Assistant"
            placeholder="How can I assist you today?"
            systemMessage={systemMessage}
        />
    );
};

export default PersonalAssistant;
