import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Star, Sparkles, PhoneCall, ArrowLeft, Clock, Shield, Heart } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const OrderConfirmation = () => {
    const navigate = useNavigate();
    // const { orderId = 1, orderAmount = 2, orderProducts = [] } = useLocation().state;

    const orderDetails = {
        orderId: 1,
        amount: 2,
        products: []
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            <Navbar />

            <main className="py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Success Animation */}
                    <div className="text-center mb-8">
                        <div className="relative inline-block">
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
                            <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-full p-6 border border-orange-500/20">
                                <CheckCircle className="w-16 h-16 text-orange-500 animate-bounce" />
                            </div>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center space-y-4 mb-8">
                        <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                            <span className="text-white/70 text-sm font-medium">Order Confirmed</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
                            Thank You!
                            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent block sm:inline sm:pl-2">
                                Order Confirmed
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            Your astrology services order has been successfully placed. Our expert astrologers will prepare your personalized reports within 24-48 hours.
                        </p>
                    </div>

                    {/* Order Details Card */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 mb-8">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-white">Order Details</h3>
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <p className="text-gray-400 text-sm">Order ID</p>
                                    <p className="text-white font-mono">{orderDetails?.orderId || 'N/A'}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-400 text-sm">Service</p>
                                    <p className="text-white">{orderDetails?.products && orderDetails?.products?.length > 0 ? orderDetails?.products?.map(product => product?.title).join(', ') : 'N/A'}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-400 text-sm">Amount Paid</p>
                                    <p className="text-orange-400 font-semibold text-lg">₹{orderDetails?.amount?.toLocaleString() || 'N/A'}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-400 text-sm">Status</p>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-green-400 font-medium">Confirmed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What's Next */}
                    <div className="space-y-6 mb-8">
                        <h3 className="text-2xl font-bold text-center text-white">What's Next?</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <PhoneCall className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Order Processing</h4>
                                <p className="text-gray-300 text-sm">We're analyzing your details and preparing your personalized reports</p>
                            </div>

                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Report Creation</h4>
                                <p className="text-gray-300 text-sm">Our expert astrologers create your personalized reports based on ancient wisdom</p>
                            </div>

                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Delivery</h4>
                                <p className="text-gray-300 text-sm">Your reports delivered to WhatsApp and email within 24-48 hours</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <button
                            onClick={() => navigate('/')}
                            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 hover:bg-gray-700/50"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Home</span>
                        </button>

                        <button
                            onClick={() => navigate('/')}
                            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <span>Book Another Service</span>
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
                        <div className="flex justify-center space-x-8">
                            <div className="flex items-center space-x-2">
                                <Clock className="w-5 h-5 text-green-400" />
                                <span className="text-green-400 text-sm font-medium">24-48H Delivery</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield className="w-5 h-5 text-green-400" />
                                <span className="text-green-400 text-sm font-medium">Secure Payment</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Heart className="w-5 h-5 text-green-400" />
                                <span className="text-green-400 text-sm font-medium">Expert Astrologers</span>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="text-center space-y-4 pt-8 border-t border-gray-700">
                        <p className="text-gray-400 text-sm">
                            Need immediate assistance? Contact us at{' '}
                            <span className="text-orange-400 font-medium">astrosupport@easyastro.com</span>
                        </p>
                        <p className="text-gray-500 text-xs">
                            You will receive a confirmation email shortly with all the details.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OrderConfirmation;
