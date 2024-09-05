import { Message } from "../types/AITypes";

export const callOpenAI = async (
	apiKey: string,
	systemMessage: string,
	messages: Message[],
	prompt: string
): Promise<string> => {
	const response = await fetch("https://api.openai.com/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
		body: JSON.stringify({
			model: "gpt-4",
			messages: [
				{ role: "system", content: systemMessage },
				...messages,
				{ role: "user", content: prompt },
			],
			max_tokens: 150,
			temperature: 0.7,
		}),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const data = await response.json();
	return data.choices[0].message.content;
};
