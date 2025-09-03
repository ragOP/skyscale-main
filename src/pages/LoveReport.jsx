import React from 'react';
import { Heart, CheckCircle, Star, Clock, Users } from 'lucide-react';
import CTAButton from '../components/common/CTAButton';

const LoveReport = () => {
  const features = [
    "Your Love & Relationship Horoscope",
    "Breakup or Patch-Up Possibility",
    "Timeline for Marriage & True Love",
    "Hidden blocks & remedies for love issues"
  ];

  const benefits = [
    "Detailed love compatibility analysis",
    "Relationship timeline predictions",
    "Personalized love remedies",
    "Marriage timing insights",
    "Past life connection analysis",
    "Future relationship guidance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-clash">
                Love & Relationship Report
              </h1>
              <p className="text-xl mb-8 text-pink-100">
                Personalized Love & Relationship Report based on Vedic astrology & numerology
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">1000+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">24 Hour Delivery</span>
                </div>
              </div>
              <CTAButton className="text-lg px-8 py-4">
                Get Your Love Report Now
              </CTAButton>
            </div>
            <div className="relative">
              <img 
                src="/love-report-1.png" 
                alt="Love & Relationship Report"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-2xl opacity-20 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-clash">
            Special Limited Time Offer
          </h2>
          <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-3xl p-8 mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-5xl font-bold text-red-600">₹499</span>
              <span className="text-2xl text-gray-400 line-through">₹999</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-lg font-semibold">
                50% OFF
              </span>
            </div>
            <p className="text-gray-600 text-lg">
              Save ₹500 - Limited time offer!
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-clash">
              What's Included
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to understand your love life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <Heart className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                  <p className="text-gray-600">
                    Detailed analysis based on your birth chart and current planetary positions affecting your love life.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-clash">
              Why Choose Our Love Report?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-clash">
            Ready to Find Your True Love?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Get your personalized love report and discover what the stars have planned for your love life
          </p>
          <CTAButton className="text-lg px-8 py-4">
            Get Your Report Now - 50% OFF
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default LoveReport;