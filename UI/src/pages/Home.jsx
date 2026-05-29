import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import { useParams } from 'react-router-dom';
import { Filter, SortAsc, LayoutGrid, List } from 'lucide-react';

const Home = ({ searchTerm }) => {
    const { categoryName } = useParams();
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const [sortBy, setSortBy] = useState('featured');
    const [priceRange, setPriceRange] = useState(150000);
    const [minRating, setMinRating] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            let filtered = productsData;

            if (categoryName) {
                filtered = filtered.filter(p => p.category === categoryName);
            }

            if (searchTerm) {
                filtered = filtered.filter(p =>
                    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    p.category.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            // Price Filter
            filtered = filtered.filter(p => p.price <= priceRange);

            // Rating Filter
            filtered = filtered.filter(p => p.rating >= minRating);

            // Sort
            if (sortBy === 'price-low') {
                filtered = [...filtered].sort((a, b) => a.price - b.price);
            } else if (sortBy === 'price-high') {
                filtered = [...filtered].sort((a, b) => b.price - a.price);
            } else if (sortBy === 'rating') {
                filtered = [...filtered].sort((a, b) => b.rating - a.rating);
            }

            setFilteredProducts(filtered);
            setIsLoading(false);
        }, 500);
    }, [categoryName, searchTerm, sortBy, priceRange, minRating]);

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            {!categoryName && !searchTerm && <Hero />}

            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 mt-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="lg:w-72 flex-shrink-0 space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                                <Filter size={20} className="mr-2 text-pink-600" />
                                Filters
                            </h3>

                            {/* Price Range */}
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-gray-700 mb-4">
                                    Max Price: ₹{priceRange.toLocaleString()}
                                </label>
                                <input
                                    type="range"
                                    min="1000"
                                    max="150000"
                                    step="5000"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>₹1K</span>
                                    <span>₹1.5L</span>
                                </div>
                            </div>

                            {/* Ratings Filter */}
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-gray-700 mb-4">Minimum Rating</label>
                                <div className="space-y-2">
                                    {[4, 3, 2].map((star) => (
                                        <label key={star} className="flex items-center group cursor-pointer">
                                            <input
                                                type="radio"
                                                name="rating"
                                                className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                                                onChange={() => setMinRating(star)}
                                                checked={minRating === star}
                                            />
                                            <span className="ml-3 text-sm text-gray-600 group-hover:text-pink-600 flex items-center">
                                                {star}+ Stars
                                            </span>
                                        </label>
                                    ))}
                                    <label className="flex items-center group cursor-pointer">
                                        <input
                                            type="radio"
                                            name="rating"
                                            className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                                            onChange={() => setMinRating(0)}
                                            checked={minRating === 0}
                                        />
                                        <span className="ml-3 text-sm text-gray-600 group-hover:text-pink-600">All Ratings</span>
                                    </label>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setPriceRange(150000);
                                    setMinRating(0);
                                    setSortBy('featured');
                                }}
                                className="w-full py-2 text-sm font-semibold text-pink-600 border border-pink-100 rounded-xl hover:bg-pink-50 transition-colors"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 capitalize">
                                    {categoryName ? `${categoryName} Collection` : searchTerm ? `Results for "${searchTerm}"` : 'Our Featured Collection'}
                                </h2>
                                <p className="text-gray-500 text-sm">{filteredProducts.length} Products found</p>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2 bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm text-gray-700">
                                    <SortAsc size={18} className="text-gray-400" />
                                    <select
                                        className="bg-transparent focus:outline-none cursor-pointer"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="featured">Featured</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="rating">Top Rated</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="flex justify-center items-center py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Filter size={32} className="text-gray-300" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">No products match your filters</h3>
                                <p className="text-gray-500 mt-1">Try adjusting your price range or rating filters.</p>
                                <button
                                    onClick={() => { setPriceRange(150000); setMinRating(0); }}
                                    className="mt-6 text-pink-600 font-semibold hover:underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
