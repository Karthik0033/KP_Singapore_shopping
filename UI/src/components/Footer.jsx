import React from 'react';
import { Instagram, Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">
                            KH<span className="text-pink-500">Shopping</span>
                        </h2>
                        <p className="text-sm leading-relaxed">
                            Modern electronics e-commerce platform providing the best gadgets at affordable prices. Experience the future of shopping.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="hover:text-pink-500 transition-colors"><Globe size={20} /></a>
                            <a href="#" className="hover:text-pink-500 transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-pink-500 transition-colors"><Github size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-pink-500 transition-colors">Home</Link></li>
                            <li><Link to="/profile" className="hover:text-pink-500 transition-colors">My Account</Link></li>
                            <li><Link to="/cart" className="hover:text-pink-500 transition-colors">Shopping Cart</Link></li>
                            <li><Link to="/" className="hover:text-pink-500 transition-colors">Product Catalog</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Customer Service</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-pink-500 transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-pink-500 transition-colors">Returns & Refunds</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3">
                        <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Contact Us</h3>
                        <div className="flex items-center space-x-3 text-sm">
                            <MapPin size={18} className="text-pink-500 flex-shrink-0" />
                            <span>123 Tech Park, Silicon Valley, CA</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                            <Phone size={18} className="text-pink-500 flex-shrink-0" />
                            <span>+1 (555) 000-0000</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                            <Mail size={18} className="text-pink-500 flex-shrink-0" />
                            <span>support@khshopping.com</span>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
