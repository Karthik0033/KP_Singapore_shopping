import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative bg-gray-900 overflow-hidden mb-8">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 -m-20 opacity-20">
                <div className="w-80 h-80 bg-pink-500 rounded-full filter blur-3xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 -m-20 opacity-20">
                <div className="w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-24 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-left space-y-6">
                    <div className="inline-flex items-center space-x-2 bg-pink-600/10 text-pink-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        <Zap size={14} />
                        <span>Flash Sale is Live</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                        Elevate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                            Tech Lifestyle
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                        Discover the latest electronics, from high-performance laptops to stunning audio gear. Premium quality, best prices.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                        <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold transition duration-300 flex items-center justify-center space-x-2 group active:scale-95 shadow-lg shadow-pink-600/20">
                            <span>Shop Now</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="border border-gray-700 hover:border-gray-500 text-white px-8 py-4 rounded-full font-bold transition duration-300 hover:bg-gray-800 active:scale-95">
                            Explore Deals
                        </button>
                    </div>
                </div>

                <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
                    <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden">
                        {/* Decorative lines */}
                        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

                        {/* Product Image representation */}
                        <img
                            src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=600&h=600"
                            alt="Latest Smartphone"
                            className="w-full h-full object-cover rounded-xl shadow-2xl relative z-10"
                        />
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-3 border border-gray-100 hidden sm:flex">
                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                            <Zap size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-500 font-bold uppercase">Upto</p>
                            <p className="text-xl font-bold text-gray-900">40% OFF</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
