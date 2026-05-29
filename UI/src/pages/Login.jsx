import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ name: 'Saurabh Kumar', email, role: 'User' });
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100">
                <div className="text-center">
                    <Link to="/" className="text-3xl font-extrabold text-pink-600">
                        KP<span className="text-gray-800">Shopping</span>
                    </Link>
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Please sign in to your account
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 sm:text-sm transition duration-200"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <Lock size={18} />
                            </div>
                            <input
                                type="password"
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 sm:text-sm transition duration-200"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded cursor-pointer" />
                            <label className="ml-2 text-gray-900 cursor-pointer">Remember me</label>
                        </div>
                        <a href="#" className="font-bold text-pink-600 hover:text-pink-500">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-4 px-4 border border-transparent font-bold rounded-xl text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300 shadow-lg shadow-pink-600/20 active:scale-95"
                    >
                        Sign In
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <div className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-200 space-x-3 w-full">
                            <Github size={20} />
                            <span>Sign in with GitHub</span>
                        </button>
                    </div>
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to="/signup" className="font-bold text-pink-600 hover:text-pink-500 underline">
                        Start a 14-day free trial
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
