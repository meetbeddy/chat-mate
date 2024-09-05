import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaSpinner, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import { AuthError } from 'firebase/auth';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const { login, loading } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);

            if (error instanceof Error) {
                const authError = error as AuthError;
                switch (authError.code) {
                    case 'auth/user-not-found':
                    case 'auth/wrong-password':
                        setError('Invalid email or password. Please try again.');
                        break;
                    case 'auth/too-many-requests':
                        setError('Too many failed login attempts. Please try again later.');
                        break;
                    default:
                        setError(`An error occurred during login: ${authError.message}`);
                }
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-20">
            <h2 className="text-2xl font-semibold text-darkBlue mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-pink focus:border-transparent"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-pink focus:border-transparent"
                        placeholder="Enter your password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-8 text-gray-500"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                {error && (
                    <div className="alert alert-error shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 11-12.728 0m12.728 0L21 8m-3.636-2.364L21 3m-3.636 2.364A9 9 0 113.636 5.636l-2.364 2.364"></path>
                            </svg>
                            <span>{error}</span>
                        </div>
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full px-6 py-2 bg-pink text-white font-semibold rounded-lg shadow-lg hover:bg-lightPink transition duration-300 flex items-center justify-center"
                    disabled={loading}
                >
                    {loading ? <FaSpinner className="animate-spin mr-2" /> : null}
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <p className="mt-4 text-gray-600 text-center">
                    Don't have an account? <Link to="/signup" className="text-pink hover:underline">Sign up</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;