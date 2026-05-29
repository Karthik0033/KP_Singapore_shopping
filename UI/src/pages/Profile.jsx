import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, Package, MapPin, CreditCard, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-gray-50">
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center max-w-md w-full">
                    <div className="bg-pink-50 p-6 rounded-full text-pink-600 mb-6">
                        <User size={48} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Please Sign In</h2>
                    <p className="text-gray-500 text-center mb-8">Login to view your profile and manage orders.</p>
                    <Link to="/login" className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold text-center hover:bg-pink-700 transition duration-300 shadow-lg shadow-pink-600/20 active:scale-95">
                        Login Now
                    </Link>
                </div>
            </div>
        );
    }

    const menuItems = [
        { title: 'My Orders', icon: <Package size={20} />, description: 'View and track your purchases' },
        { title: 'Addresses', icon: <MapPin size={20} />, description: 'Manage your delivery locations' },
        { title: 'Payment Methods', icon: <CreditCard size={20} />, description: 'Saved cards and wallets' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-pink-600 to-violet-600 px-8 py-12 text-white relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <User size={120} />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
                            <div className="h-24 w-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl">
                                <span className="text-4xl font-extrabold">{user.name.charAt(0)}</span>
                            </div>
                            <div className="text-center sm:text-left">
                                <h1 className="text-3xl font-extrabold">{user.name}</h1>
                                <p className="text-pink-100 mt-1 flex items-center justify-center sm:justify-start">
                                    <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                    Active Shopper
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Account Details */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest text-xs border-b border-gray-100 pb-2">Account Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-gray-400 font-bold uppercase">Email Address</p>
                                        <p className="text-gray-900 font-semibold">{user.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-bold uppercase">Member Since</p>
                                        <p className="text-gray-900 font-semibold">May 2026</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="space-y-4">
                                {menuItems.map((item, idx) => (
                                    <button key={idx} className="w-full group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-200">
                                        <div className="bg-pink-50 p-3 rounded-xl text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                        <div className="flex-grow text-left">
                                            <p className="text-gray-900 font-bold">{item.title}</p>
                                            <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-300 mt-1 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <button
                                onClick={handleLogout}
                                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all duration-300 active:scale-95 shadow-xl shadow-gray-900/10"
                            >
                                <LogOut size={20} />
                                <span>Logout Session</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
