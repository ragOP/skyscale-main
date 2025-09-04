import { Palette, Star, Check, Clock, Shield, Heart, ChevronRight } from 'lucide-react';
import CTAButton from '../components/common/CTAButton';
import Navbar from '../components/home/Navbar';
import Footer from '../components/common/Footer';
import AboutUs from '../components/home/AboutUs';
import TestimonialsSection from '../components/home/TestimonialsSection';

const SoulmateSketch = () => {
  const features = [
    "Artistic sketch of your soulmate",
    "Physical appearance details",
    "Personality traits analysis",
    "Meeting timing predictions",
    "Compatibility insights",
    "Digital and physical delivery",
    "Based on Vedic astrology",
    "Personalized description included"
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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mr-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                  Soulmate Sketch
                </h1>
              </div>

              {/* Image */}
              <div className="relative mb-4">
                <img
                  src="/easy-astro-1.webp"
                  alt="Soulmate Sketch"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-serif font-bold">
                  50% OFF
                </div>
              </div>

              <p className="text-lg font-serif text-gray-700 mb-8 leading-relaxed mt-8">
                Discover the appearance of your destined life partner through our unique Soulmate Sketch service. Our expert artists create detailed sketches based on your astrological profile and cosmic connections.
              </p>

              {/* Rating and Stats - Matching Love Report Layout */}
              <div className="mb-8">
                {/* Rating */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                  <span className="font-serif text-gray-600 font-medium">4.3/5</span>
                  <span className="font-serif text-gray-500">(567 reviews)</span>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <Heart className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                    <div className="text-lg font-serif font-bold text-gray-900">567+</div>
                    <div className="text-xs font-serif text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <Clock className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                    <div className="text-lg font-serif font-bold text-gray-900">24H</div>
                    <div className="text-xs font-serif text-gray-600">Delivery</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <Shield className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                    <div className="text-lg font-serif font-bold text-gray-900">100%</div>
                    <div className="text-xs font-serif text-gray-600">Privacy</div>
                  </div>
                </div>
              </div>

              {/* Pricing - Matching Love Report Layout */}
              <div className="mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-4xl font-bold text-gray-900">₹599</span>
                    <span className="text-xl font-serif text-gray-500 line-through">₹1199</span>
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                      50% OFF
                    </div>
                  </div>
                </div>
              </div>

              <CTAButton className="w-full md:w-auto">
                Get My Soulmate Sketch
                <ChevronRight className="w-6 h-6" />
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl font-serif text-gray-600">
              Complete soulmate sketch experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">{feature}</h3>
                  <p className="font-serif text-gray-600">
                    Professional artistic creation based on authentic Vedic astrology principles and expert analysis.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AboutUs className='py-2' />

      {/* Benefits Section */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Why Choose Our Soulmate Sketch?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Heart className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">567+</h3>
              <p className="font-serif text-gray-600">Love Matches Found</p>
            </div>
            <div className="flex flex-col items-center">
              <Palette className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Artist</h3>
              <p className="font-serif text-gray-600">Hand-drawn Sketches</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Accurate</h3>
              <p className="font-serif text-gray-600">Astrological Analysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-4 pt-12 bg-gradient-to-r from-gray-50 to-gray-100 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Meet Your Soulmate?
          </h2>
          <p className="text-xl font-serif mb-8 text-gray-600">
            Get your personalized soulmate sketch and discover what your destined partner looks like
          </p>
          <CTAButton className="text-lg px-8 py-4">
            Get My Sketch Now - 50% OFF
          </CTAButton>
        </div>
      </div>

      <TestimonialsSection />

      <Footer />
    </div>
  );
};

export default SoulmateSketch; 