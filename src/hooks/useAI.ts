import { useContext } from "react";
import { AIContextType } from "../types/AITypes";
import { AIContext } from "../contexts/AIContext";

export const useAI = (): AIContextType => {
	const context = useContext(AIContext);
	if (!context) {
		throw new Error("useAI must be used within an AIProvider");
	}
	return context;
};
