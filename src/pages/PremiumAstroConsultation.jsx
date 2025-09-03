import React from 'react';
import { Users, CheckCircle, Star, Clock, Shield } from 'lucide-react';
import CTAButton from '../components/common/CTAButton';

const PremiumAstroConsultation = () => {
  const features = [
    "Personalized birth chart analysis",
    "Life path guidance", 
    "Career & relationship insights",
    "Remedial solutions"
  ];

  const benefits = [
    "1-on-1 consultation with India's top expert",
    "Detailed analysis of your birth chart",
    "Personalized guidance for life decisions",
    "Career and relationship insights",
    "Custom remedial solutions",
    "Follow-up support for 30 days"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-clash">
                Premium Astro Consultation
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                1-on-1 personalized consultation with India's top astro-numerology expert
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">60 Min Session</span>
                </div>
              </div>
              <CTAButton className="text-lg px-8 py-4">
                Book Your Consultation Now
              </CTAButton>
            </div>
            <div className="relative">
              <img 
                src="/astrology-2.webp" 
                alt="Premium Astro Consultation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl opacity-20 blur-xl -z-10"></div>
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
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl p-8 mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-5xl font-bold text-red-600">₹1499</span>
              <span className="text-2xl text-gray-400 line-through">₹9999</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-lg font-semibold">
                85% OFF
              </span>
            </div>
            <p className="text-gray-600 text-lg">
              Save ₹8500 - Limited time offer!
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
              Everything you need for a comprehensive astrological consultation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                  <p className="text-gray-600">
                    Detailed analysis and personalized insights based on your birth chart and current planetary positions.
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
              Why Choose Our Premium Consultation?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-clash">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Book your consultation today and get personalized guidance from India's top astro-numerology expert
          </p>
          <CTAButton className="text-lg px-8 py-4">
            Book Now - Limited Time Offer
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default PremiumAstroConsultation;