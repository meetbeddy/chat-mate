import { useCallback } from "react";

export const useApiUsage = () => {
	const checkApiUsage = useCallback(async (userId: string) => {
		const response = await fetch(
			`http://localhost:5000/api/usage?userId=${userId}`,
			{
				method: "GET",
				headers: { "Content-Type": "application/json" },
			}
		);
		const data = await response.json();
		if (data.apiUsageCount >= data.apiLimit) {
			throw new Error("API usage limit exceeded");
		}
	}, []);

	const updateApiUsage = useCallback(async (userId: string) => {
		await fetch(`http://localhost:5000/api/usage?userId=${userId}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
		});
	}, []);

	return { checkApiUsage, updateApiUsage };
};
