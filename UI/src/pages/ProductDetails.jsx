import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { Star, ShoppingCart, ShieldCheck, Truck, RotateCcw, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundProduct = productsData.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
        setLoading(false);
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
        </div>
    );

    if (!product) return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
            <Link to="/" className="mt-4 text-pink-600 hover:underline flex items-center">
                <ChevronLeft size={20} />
                <span>Back to Shopping</span>
            </Link>
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen py-8 sm:py-12">
            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
                <nav className="flex mb-8" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2 text-sm text-gray-500">
                        <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
                        <li className="flex items-center space-x-1">
                            <span>/</span>
                            <Link to={`/category/${product.category}`} className="hover:text-pink-600">{product.category}</Link>
                        </li>
                        <li className="flex items-center space-x-1">
                            <span>/</span>
                            <span className="text-gray-900 font-medium line-clamp-1">{product.name}</span>
                        </li>
                    </ol>
                </nav>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Image Gallery */}
                        <div className="lg:w-2/5 p-4 sm:p-4 border-b lg:border-b-0 lg:border-r border-gray-100">
                            <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:border-pink-500 transition-colors">
                                        <img src={product.image} alt="" className="w-full h-full object-contain p-2 opacity-60" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="lg:w-3/5 p-6 sm:p-12">
                            <div className="mb-2">
                                <span className="inline-block px-3 py-1 bg-pink-50 text-pink-600 text-xs font-bold rounded-full uppercase tracking-wider">
                                    {product.category}
                                </span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                {product.name}
                            </h1>

                            <div className="flex items-center space-x-4 mb-6">
                                <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-bold">
                                    <Star size={16} className="fill-current mr-1 text-green-700" />
                                    <span>{product.rating}</span>
                                </div>
                                <span className="text-gray-400 text-sm">|</span>
                                <span className="text-gray-600 text-sm font-medium">{product.reviews} Ratings</span>
                            </div>

                            <div className="flex items-baseline space-x-4 mb-8">
                                <span className="text-4xl font-extrabold text-gray-900">₹{product.price.toLocaleString()}</span>
                                <span className="text-xl text-gray-400 line-through">₹{(product.price * 1.3).toLocaleString()}</span>
                                <span className="text-green-600 font-bold text-lg">30% OFF</span>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-8">
                                {product.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <Truck className="text-pink-600" size={24} />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Free Delivery</p>
                                        <p className="text-xs text-gray-500">Usually 2-3 business days</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <RotateCcw className="text-pink-600" size={24} />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">7 Days Return</p>
                                        <p className="text-xs text-gray-500">Easy exchange & refunds</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <button
                                    onClick={() => addToCart(product)}
                                    className="flex-1 bg-white border-2 border-pink-600 text-pink-600 hover:bg-pink-50 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition duration-300 active:scale-95"
                                >
                                    <ShoppingCart size={20} />
                                    <span>Add to Cart</span>
                                </button>
                                <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-pink-600/20 transition duration-300 active:scale-95">
                                    Buy Now
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
