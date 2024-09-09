import { useCallback } from "react";

const getApiBaseUrl = () => {
	const env = import.meta.env.MODE;

	switch (env) {
		case "development":
			return import.meta.env.VITE_API_BASE_URL_DEV;
		case "production":
			return import.meta.env.VITE_API_BASE_URL_PROD;
		default:
			return import.meta.env.VITE_API_BASE_URL_DEV;
	}
};

const API_BASE_URL = getApiBaseUrl();

export const useApiUsage = () => {
	const checkApiUsage = useCallback(async (userId: string) => {
		const response = await fetch(`${API_BASE_URL}/api/usage?userId=${userId}`, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});
		const data = await response.json();

		if (data.apiUsageCount >= data.apiLimit) {
			throw new Error("API usage limit exceeded");
		}
	}, []);

	const getApiUsage = useCallback(async (userId: string) => {
		const response = await fetch(`${API_BASE_URL}/api/usage?userId=${userId}`, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});
		const data = await response.json();

		return data;
	}, []);

	const updateApiUsage = useCallback(async (userId: string) => {
		await fetch(`${API_BASE_URL}/api/usage?userId=${userId}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
		});
	}, []);

	return { checkApiUsage, updateApiUsage, getApiUsage };
};
