import React from "react";
import ModuleInteraction from "../components/ModuleInteraction";

const WritingAssistant: React.FC = () => {
    const systemMessage = "You are an AI writing assistant. Your role is to help the user with drafting, editing, and enhancing various forms of writing including essays, blog posts, stories, and more.";

    return (
        <ModuleInteraction
            title="Writing Assistant"
            placeholder="What would you like to write today?"
            systemMessage={systemMessage}
        />
    );
};

export default WritingAssistant;
