import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Phone, Monitor, Headphones, Watch, Smartphone, Laptop } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ onSearch }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { cartCount } = useCart();
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (onSearch) onSearch(value);
    };

    const categories = [
        { name: 'All', icon: <Monitor size={18} />, path: '/' },
        { name: 'Laptops', icon: <Laptop size={18} />, path: '/category/Laptops' },
        { name: 'Phones', icon: <Smartphone size={18} />, path: '/category/Phones' },
        { name: 'Audio', icon: <Headphones size={18} />, path: '/category/Audio' },
        { name: 'Wearables', icon: <Watch size={18} />, path: '/category/Wearables' },
        { name: 'Accessories', icon: <Phone size={18} />, path: '/category/Accessories' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold text-pink-600 tracking-tight">
                            KH<span className="text-gray-800">Shopping</span>
                        </Link>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 text-gray-900 font-medium placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 sm:text-sm transition duration-150 ease-in-out"
                                placeholder="Search for Mobiles, Laptops and more..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        <Link to="/profile" className="flex flex-col items-center text-gray-600 hover:text-pink-600 transition duration-150">
                            <User size={24} />
                            <span className="text-xs hidden sm:block">Profile</span>
                        </Link>
                        <Link to="/cart" className="flex flex-col items-center text-gray-600 hover:text-pink-600 transition duration-150 relative">
                            <ShoppingCart size={24} />
                            <span className="text-xs hidden sm:block">Cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="md:hidden px-4 pb-3">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 text-gray-900 font-medium placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            {/* Category Links */}
            <div className="border-t border-gray-100 overflow-x-auto no-scrollbar">
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
                    <div className="flex space-x-8 py-3 whitespace-nowrap">
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                to={cat.path}
                                className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-pink-600 transition duration-150"
                            >
                                {cat.icon}
                                <span>{cat.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 py-2 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                to={cat.path}
                                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-gray-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {cat.icon}
                                <span>{cat.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
