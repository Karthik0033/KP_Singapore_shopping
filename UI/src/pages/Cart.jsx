import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ChevronRight, CreditCard, ShieldCheck } from 'lucide-react';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-gray-50">
                <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center max-w-md w-full">
                    <div className="bg-pink-50 p-6 rounded-full text-pink-600 mb-6">
                        <ShoppingBag size={48} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                    <p className="text-gray-500 text-center mb-8">Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/" className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold text-center hover:bg-pink-700 transition duration-300 shadow-lg shadow-pink-600/20 active:scale-95">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center">
                    <ShoppingBag className="mr-3 text-pink-600" />
                    Shopping Cart ({cart.length} items)
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="lg:w-2/3 space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start group transition-all duration-300 hover:shadow-md">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden mb-4 sm:mb-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                                </div>

                                <div className="sm:ml-6 flex-grow text-center sm:text-left">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 hover:text-pink-600 transition-colors line-clamp-1">
                                                <Link to={`/product/${item.id}`}>{item.name}</Link>
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">{item.category}</p>
                                        </div>
                                        <p className="text-xl font-extrabold text-gray-900 mt-2 sm:mt-0">₹{(item.price * item.quantity).toLocaleString()}</p>
                                    </div>

                                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
                                        <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden bg-gray-50">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-3 hover:bg-white text-gray-400 hover:text-pink-600 transition-colors"
                                            >
                                                <Minus size={18} />
                                            </button>
                                            <span className="w-12 text-center font-bold text-gray-900">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-3 hover:bg-white text-gray-400 hover:text-pink-600 transition-colors"
                                            >
                                                <Plus size={18} />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="mt-4 sm:mt-0 flex items-center space-x-2 text-red-500 hover:text-red-700 font-bold transition-colors p-2"
                                        >
                                            <Trash2 size={18} />
                                            <span>Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>

                            <div className="space-y-4 mb-8 text-sm">
                                <div className="flex justify-between text-gray-500">
                                    <span>Price ({cart.length} items)</span>
                                    <span className="text-gray-900 font-medium">₹{cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Delivery Charges</span>
                                    <span className="text-green-600 font-bold group">FREE</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Tax (Included)</span>
                                    <span className="text-gray-900 font-medium">₹{(cartTotal * 0.18).toLocaleString()}</span>
                                </div>
                                <div className="border-t border-dashed border-gray-100 pt-4 flex justify-between">
                                    <span className="text-lg font-bold text-gray-900">Total Amount</span>
                                    <span className="text-2xl font-extrabold text-pink-600 font-mono tracking-tight">₹{cartTotal.toLocaleString()}</span>
                                </div>
                            </div>

                            <button className="w-full bg-pink-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-pink-700 transition duration-300 shadow-lg shadow-pink-600/20 group active:scale-95">
                                <CreditCard size={20} />
                                <span>Place Order</span>
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="mt-6 flex items-center justify-center space-x-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                <ShieldCheck size={14} className="text-green-500" />
                                <span>Safe and Secure Payments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
