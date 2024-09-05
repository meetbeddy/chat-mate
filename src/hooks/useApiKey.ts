import { useState, useEffect } from "react";

export const useApiKey = () => {
	const [API_KEY] = useState<string | undefined>(
		import.meta.env.VITE_OPENAI_API_KEY
	);

	useEffect(() => {
		if (!API_KEY) {
			console.warn(
				"OpenAI API key is not set. Please set VITE_OPENAI_API_KEY in your .env file."
			);
		}
	}, [API_KEY]);

	return { API_KEY };
};
