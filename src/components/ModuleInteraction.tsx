import React, { useState, useRef, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useAI } from "../hooks/useAI";

interface ModuleInteractionProps {
    title: string;
    placeholder: string;
}

const ModuleInteraction: React.FC<ModuleInteractionProps> = ({ title, placeholder }) => {
    const [input, setInput] = useState("");
    const { messages, addMessage, getResponse, isLoading, error } = useAI();
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            addMessage({ role: "user", content: input });
            setInput("");
            await getResponse(input);
        }
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-soft mt-8">
            <h2 className="text-3xl font-semibold text-darkBlue mb-4">{title}</h2>

            <div ref={chatContainerRef} className="mb-4 h-96 overflow-y-auto border rounded-lg p-4 bg-lightGray scrollbar-hide">
                {messages.map((message, index) => (
                    <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                        <div className={`inline-block p-3 rounded-lg ${message.role === "user" ? "bg-pink text-white" : "bg-pastelPink text-darkGray"
                            }`}>
                            <p className="font-bold mb-1">{message.role === "user" ? "You" : "AI"}</p>
                            <p>{message.content}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={placeholder}
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink bg-lightGray text-darkBlue"
                    rows={3}
                    required
                />
                <div className="flex justify-between items-center">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-pink text-white font-semibold rounded-lg shadow-lg hover:bg-lightPink transition duration-300"
                        disabled={isLoading}
                    >
                        {isLoading ? <FaSpinner className="animate-spin" /> : "Submit"}
                    </button>
                </div>
            </form>

            {isLoading && (
                <div className="flex justify-center items-center mt-4">
                    <FaSpinner className="animate-spin text-pink text-2xl" />
                </div>
            )}

            {error && (
                <div className="mt-6 p-4 bg-red-100 rounded-lg shadow-inner text-red-700">
                    <h3 className="text-lg font-bold mb-2">Error:</h3>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default ModuleInteraction;