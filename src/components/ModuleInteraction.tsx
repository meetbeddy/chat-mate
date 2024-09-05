import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface ModuleInteractionProps {
    title: string;
    placeholder: string;
    onSubmit: (input: string) => Promise<string>;
}

const ModuleInteraction: React.FC<ModuleInteractionProps> = ({ title, placeholder, onSubmit }) => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponse("");
        try {
            const result = await onSubmit(input);
            setResponse(result);
        } catch (error) {

            console.log(error)
            setResponse("Something went wrong, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-soft mt-8">
            <h2 className="text-3xl font-semibold text-darkBlue mb-4">{title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={placeholder}
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink bg-lightGray text-darkBlue"
                    rows={5}
                    required
                />
                <div className="flex justify-between items-center">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-pink text-white font-semibold rounded-lg shadow-lg hover:bg-lightPink transition duration-300"
                        disabled={loading}
                    >
                        {loading ? <FaSpinner className="animate-spin" /> : "Submit"}
                    </button>
                </div>
            </form>


            {loading && (
                <div className="flex justify-center items-center mt-4">
                    <FaSpinner className="animate-spin text-pink text-2xl" />
                </div>
            )}


            {response && !loading && (
                <div className="mt-6 p-4 bg-pastelPink rounded-lg shadow-inner text-darkGray">
                    <h3 className="text-lg font-bold mb-2">AI Response:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default ModuleInteraction;
