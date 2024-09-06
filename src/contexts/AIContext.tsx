import React, { createContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { AIContextType, } from '../types/AITypes';
import { useAuth } from '../hooks/useAuth';
import { useApiKey } from '../hooks/useApiKey';
import { useMessages } from '../hooks/useMessages';
import { useApiUsage } from '../hooks/useApiUsage';
import { callOpenAI } from '../services/openAIServices';
import Swal from 'sweetalert2';

export const AIContext = createContext<AIContextType | undefined>(undefined);

export const AIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { currentUser } = useAuth();
    const { API_KEY } = useApiKey();
    const { messages, addMessage } = useMessages();
    const { checkApiUsage, updateApiUsage } = useApiUsage();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [retryPrompt, setRetryPrompt] = useState<string | null>(null);

    const getResponse = useCallback(async (prompt: string, systemMessage: string) => {
        setIsLoading(true);
        setError(null);
        setRetryPrompt(prompt);

        try {
            if (!API_KEY) {
                throw new Error('OpenAI API key is not set');
            }

            const userId = currentUser?.uid;
            if (!userId) {
                throw new Error('User is not authenticated');
            }

            await checkApiUsage(userId);

            const aiMessage = await callOpenAI(API_KEY, systemMessage, messages, prompt);
            addMessage({ role: 'assistant', content: aiMessage, timestamp: new Date().toISOString() });

            await updateApiUsage(userId);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            if (error instanceof Error && error.message === 'API usage limit exceeded') {
                Swal.fire({
                    title: 'API Limit Exceeded',
                    text: 'You have exceeded your API usage limit. Please upgrade to continue using the service.',
                    icon: 'warning',
                    confirmButtonText: 'Go to Pricing',
                    allowOutsideClick: false,
                }).then(() => {
                    window.location.href = '/pricing?limitExceeded=true';
                });
            } else {
                setError(error instanceof Error ? error.message : 'An unknown error occurred');
            }
        } finally {
            setIsLoading(false);
        }
    }, [API_KEY, messages, currentUser, addMessage, checkApiUsage, updateApiUsage]);

    const retry = useCallback(() => {
        if (retryPrompt) {
            getResponse(retryPrompt, 'You are a helpful assistant.');
        }
    }, [retryPrompt, getResponse]);

    const contextValue = useMemo(() => ({
        messages,
        addMessage,
        getResponse,
        isLoading,
        error,
        retry
    }), [messages, addMessage, getResponse, isLoading, error, retry]);

    return (
        <AIContext.Provider value={contextValue}>
            {children}
        </AIContext.Provider>
    );
};





