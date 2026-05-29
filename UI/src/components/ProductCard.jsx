import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <Link to={`/product/${product.id}`} className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Rating Badge */}
                <div className="absolute top-2 left-2 bg-yellow-400 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center shadow-sm">
                    <Star size={10} className="fill-current mr-1" />
                    {product.rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm text-gray-700 font-medium line-clamp-2 min-h-[40px] group-hover:text-pink-600 transition-colors">
                    {product.name}
                </h3>

                <div className="mt-2 flex items-baseline space-x-2">
                    <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 line-through">₹{(product.price * 1.3).toLocaleString()}</span>
                </div>

                <div className="mt-1">
                    <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        Free Delivery
                    </span>
                </div>

                <div className="mt-1 flex items-center space-x-1">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className={i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'} />
                        ))}
                    </div>
                    <span className="text-[10px] text-gray-400">({product.reviews})</span>
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    className="mt-4 w-full bg-pink-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2 shadow-sm active:scale-95"
                >
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;
