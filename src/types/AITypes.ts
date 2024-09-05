export interface Message {
	role: "system" | "user" | "assistant";
	content: string;
}

export interface AIContextType {
	messages: Message[];
	addMessage: (message: Message) => void;
	getResponse: (prompt: string) => Promise<void>;
	isLoading: boolean;
	error: string | null;
}
