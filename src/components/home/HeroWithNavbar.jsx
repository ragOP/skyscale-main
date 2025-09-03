import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ShoppingCart,
    Menu,
    X,
    Sparkles,
    Users,
    Star,
    CheckCircle,
    Home,
    Package,
    Info,
    Mail,
    ChevronRight
} from 'lucide-react';
import CTAButton from '../common/CTAButton';
import { Boxes } from '../ui/background-boxes';
import ParticleAnimation from '../ui/ParticleAnimation';
import { HeroHeader } from '../ui/HeroHeader';

const HeroWithNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleCart = () => {
        navigate('/cart');
    };

    return (
        <section className="min-h-screen relative bg-gradient-to-br from-orange-50 to-red-100 overflow-hidden ">
            {/* Animated Boxes Background */}
            {/* <Boxes /> */}
            
            {/* Particle Animation */}
            <ParticleAnimation />

            {/* Navbar integrated into hero */}
            <nav className="bg-transparent relative z-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2">
                            <img
                                src="/easy-astro-logo.webp"
                                alt="EasyAstro Logo"
                                className="w-32 h-32 object-contain"
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="font-inter text-gray-600 hover:text-orange-600 transition-colors font-medium">Home</Link>
                            <a href="#products" className="font-inter text-gray-600 hover:text-orange-600 transition-colors font-medium">Products</a>
                            <a href="#about" className="font-inter text-gray-600 hover:text-orange-600 transition-colors font-medium">About</a>
                            <a href="#contact" className="font-inter text-gray-600 hover:text-orange-600 transition-colors font-medium">Contact</a>
                        </div>

                        {/* Cart & Mobile Menu */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleCart}
                                className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors"
                            >
                                <ShoppingCart className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    0
                                </span>
                            </button>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-orange-200">
                            <div className="flex flex-col space-y-2">
                                <Link 
                                    to="/" 
                                    className="font-inter px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium flex items-center justify-between group rounded-lg"
                                >
                                    <div className="flex items-center space-x-3">
                                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        <span>Home</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <a 
                                    href="#products" 
                                    className="font-inter px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium flex items-center justify-between group rounded-lg"
                                >
                                    <div className="flex items-center space-x-3">
                                        <Package className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        <span>Products</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                                <a 
                                    href="#about" 
                                    className="font-inter px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium flex items-center justify-between group rounded-lg"
                                >
                                    <div className="flex items-center space-x-3">
                                        <Info className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        <span>About</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                                <a 
                                    href="#contact" 
                                    className="font-inter px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium flex items-center justify-between group rounded-lg"
                                >
                                    <div className="flex items-center space-x-3">
                                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        <span>Contact</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Content */}
            <div className="flex-1 flex items-center justify-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        {/* Title */}

                        <HeroHeader />

                        <div className="w-24 h-1 bg-gradient-to-r m-2 from-orange-400 to-red-500 rounded-full mb-6 flex items-center justify-center mx-auto"></div>


                        {/* <div className='flex flex-col items-center justify-center px-4'>
                            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                                Your Astrology,
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 animate-pulse">
                                    Made Simple
                                </span>
                            </h1>
                            <h4 className="font-inter text-lg sm:text-xl text-orange-700 font-medium tracking-wide mb-2">
                                भारतीय ज्योतिष शास्त्र
                            </h4>
                            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-6"></div>
                        </div> */}



                        <div className="mb-4">
                            <img
                                src="/astrology-2.webp"
                                alt="Indian Astrology and Vedic Wisdom"
                                className="mx-auto w-full max-w-lg h-64 sm:h-80 object-cover"
                            />

                            <div className="w-full max-w-md mx-auto px-4 mt-8">
                                <CTAButton
                                    onClick={() => console.log('Get Reading clicked')}
                                    className="w-fit shadow-2xl"
                                >
                                    <Sparkles className="w-5 h-5 mr-2" />
                                    Get Your Reading Now
                                </CTAButton>
                            </div>

                            {/* Subtitle */}
                            <p className="font-poppins italic text-base sm:text-xl text-gray-600 font-medium mb-4 max-w-3xl mx-auto mt-4 p-4 leading-relaxed">
                                Discover your destiny through the <span className="font-semibold text-orange-600">sacred science</span> of Vedic astrology.
                                Get personalized predictions, birth chart analysis, and spiritual guidance
                                rooted in <span className="font-semibold text-red-600">thousands of years</span> of Indian tradition.
                            </p>

                            {/* Simple Trust Indicators */}
                            <div className="mb-6 px-6">
                                <div className="flex justify-center items-center gap-12">
                                    <div className="flex flex-col items-center">
                                        <Users className="w-5 h-5 text-orange-600 mb-1" />
                                        <span className="text-sm text-gray-600 font-medium">50K+ Customers</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Star className="w-5 h-5 text-yellow-500 mb-1" />
                                        <span className="text-sm text-gray-600 font-medium">4.9/5 Rating</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <CheckCircle className="w-5 h-5 text-green-600 mb-1" />
                                        <span className="text-sm text-gray-600 font-medium">99% Accuracy</span>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}

                        </div>

                        {/* CTA Button */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroWithNavbar; 