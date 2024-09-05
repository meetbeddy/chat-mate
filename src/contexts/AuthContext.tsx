import React, { createContext, useState, useEffect, ReactNode } from 'react';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    User,
    AuthError
} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { AuthContextType } from '../types/AuthTypes';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const login = async (email: string, password: string): Promise<void> => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setCurrentUser(userCredential.user);
        } catch (error) {
            console.error('Login error:', error);
            throw error as AuthError;
        } finally {
            setLoading(false);
        }
    };

    const signup = async (email: string, password: string): Promise<void> => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setCurrentUser(userCredential.user);
        } catch (error) {
            console.error('Signup error:', error);
            throw error as AuthError;
        } finally {
            setLoading(false);
        }
    };

    const logout = async (): Promise<void> => {
        setLoading(true);
        try {
            await signOut(auth);
            setCurrentUser(null);
        } catch (error) {
            console.error('Logout error:', error);
            throw error as AuthError;
        } finally {
            setLoading(false);
        }
    };

    const value: AuthContextType = {
        currentUser,
        login,
        signup,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};