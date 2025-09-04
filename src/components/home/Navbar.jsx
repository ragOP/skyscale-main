import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home, Menu, X, ShoppingCart, User, Heart, Star, Palette, DollarSign } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { items, toggleCart } = useCart();

    // Generate breadcrumbs based on current path
    const generateBreadcrumbs = () => {
        const pathSegments = location.pathname.split('/').filter(segment => segment);
        const breadcrumbs = [
            { name: 'Home', path: '/', icon: Home }
        ];

        pathSegments.forEach((segment, index) => {
            const path = '/' + pathSegments.slice(0, index + 1).join('/');
            const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');
            breadcrumbs.push({ name, path });
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    const navigationItems = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Love Report', path: '/love-report', icon: Heart },
        { name: 'Consultation', path: '/premium-astro-consultation', icon: User },
        { name: 'Soulmate Sketch', path: '/soulmate-sketch', icon: Palette },
        { name: 'Wealth Report', path: '/wealth-report', icon: DollarSign }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0C0B1D]/95 to-[#1a1a2e]/95 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Navigation */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-4">
                        <img
                            src="/easy-astro-logo.webp"
                            alt="EasyAstro Logo"
                            className="object-cover h-10 w-40 hover:scale-105 transition-transform duration-300"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 font-serif font-medium group"
                                >
                                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Cart Button */}
                        <button
                            onClick={toggleCart}
                            className="relative p-2 text-gray-300 hover:text-orange-400 transition-colors duration-300"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            {items.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                    {items.length}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-300 hover:text-orange-400 transition-colors duration-300"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Increased Height */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/10 h-[70vh] overflow-y-auto">
                        <div className="flex flex-col space-y-3 h-full">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="flex border-b items-center space-x-3 px-4 py-4 text-gray-300 hover:text-orange-400 hover:bg-white/5 transition-all duration-300 rounded-lg group"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="font-serif font-medium text-lg">{item.name}</span>
                                    </Link>
                                );
                            })}
                            
                            {/* Additional spacing to fill the height */}
                            <div className="flex-1"></div>
                            
                            {/* Optional: Add some additional content or branding at the bottom */}
                            <div className="px-4 py-6 border-t border-white/10">
                                <div className="text-center">
                                    <p className="text-gray-400 font-serif text-sm">EasyAstro</p>
                                    <p className="text-gray-500 font-serif text-xs">DESTINY DECODED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;