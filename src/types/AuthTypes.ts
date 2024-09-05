import { User, UserCredential } from "firebase/auth";

export interface AuthContextType {
	currentUser: User | null;
	login: (email: string, password: string) => Promise<UserCredential>;
	signup: (email: string, password: string) => Promise<UserCredential>;
	logout: () => Promise<void>;
	loading: boolean;
}
