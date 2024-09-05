import React, { createContext, useState, ReactNode } from 'react';
import { AIContextType, Message } from '../types/AITypes'


export const AIContext = createContext<AIContextType | undefined>(undefined);

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

if (!API_KEY) {
    console.warn('OpenAI API key is not set. Please set VITE_OPENAI_API_KEY in your .env file.');
}

export const AIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const addMessage = (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const getResponse = async (prompt: string) => {
        setIsLoading(true);
        setError(null);

        try {
            if (!API_KEY) {
                throw new Error('OpenAI API key is not set');
            }

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [
                        { role: 'system', content: 'You are a helpful assistant.' },
                        ...messages,
                        { role: 'user', content: prompt },
                    ],
                    max_tokens: 150,
                    temperature: 0.7,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const aiMessage = data.choices[0].message.content;

            addMessage({ role: 'assistant', content: aiMessage });
        } catch (error) {
            console.error('Error fetching AI response:', error);
            setError(error instanceof Error ? error.message : 'An unknown error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AIContext.Provider value={{ messages, addMessage, getResponse, isLoading, error }}>
            {children}
        </AIContext.Provider>
    );
};

