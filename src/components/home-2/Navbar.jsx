import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home, Menu, X, ShoppingCart, User, Heart, Star } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Generate breadcrumbs based on current path
    const generateBreadcrumbs = () => {
        const pathSegments = location.pathname.split('/').filter(segment => segment);
        const breadcrumbs = [
            { name: 'Home', path: '/', icon: Home }
        ];

        pathSegments.forEach((segment, index) => {
            const path = '/' + pathSegments.slice(0, index + 1).join('/');
            const name = segment.charAt(0).toUpperCase() + segment.slice(1);
            breadcrumbs.push({ name, path });
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    const navigationItems = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Products', path: '/products', icon: Star },
        { name: 'Love Report', path: '/love-report', icon: Heart },
        { name: 'Consultation', path: '/premium-astro-consultation', icon: User }
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
                                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium group"
                                >
                                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-300 hover:text-orange-400 transition-colors duration-300"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>



                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/10">
                        <div className="flex flex-col space-y-3">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-white/5 transition-all duration-300 rounded-lg group"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;