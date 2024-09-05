export interface Message {
	role: "system" | "user" | "assistant";
	content: string;
	timestamp?: string;
}

export interface AIContextType {
	messages: Message[];
	addMessage: (message: Message) => void;
	getResponse: (prompt: string, systemMessage: string) => Promise<void>;
	isLoading: boolean;
	error: string | null;
	retry: () => void;
}
