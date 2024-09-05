import { useState, useCallback } from "react";
import { Message } from "../types/AITypes";

export const useMessages = () => {
	const [messages, setMessages] = useState<Message[]>([]);

	const addMessage = useCallback((message: Message) => {
		setMessages((prevMessages) => [...prevMessages, message]);
	}, []);

	return { messages, addMessage };
};
