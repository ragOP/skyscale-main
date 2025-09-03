import { Heart, Star, Check, Clock, Shield, Users, ChevronRight } from 'lucide-react';
import CTAButton from '../components/common/CTAButton';
import Navbar from '../components/home/Navbar';
import Footer from '../components/common/Footer';

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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-pink-400 to-red-400 mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                  Love Report
                </h1>
              </div>

              {/* Image */}
              <div className="relative mb-4">
                <img
                  src="/love-report-1.png"
                  alt="Love Report"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font font-bold">
                  50% OFF
                </div>
              </div>

              <p className="text-lg font-serif text-gray-700 mb-8 leading-relaxed">
                Personalized Love & Relationship Report based on Vedic astrology & numerology. Discover the secrets of your love life with our comprehensive analysis.
              </p>



              {/* Rating and Stats - Improved Layout */}
              <div className="mb-8">
                {/* Rating */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-serif text-gray-600 font-medium">4.5/5</span>
                  <span className="font-serif text-gray-500">(1,247 reviews)</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <Users className="w-6 h-6 text-pink-500 mx-auto mb-1" />
                    <div className="text-lg font-serif font-bold text-gray-900">1,247+</div>
                    <div className="text-xs font-serif text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <Clock className="w-6 h-6 text-pink-500 mx-auto mb-1" />
                    <div className="text-lg font-serif font-bold text-gray-900">24H</div>
                    <div className="text-xs font-serif text-gray-600">Delivery</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <Shield className="w-6 h-6 text-pink-500 mx-auto mb-1" />
                    <div className="text-lg font-serif font-bold text-gray-900">100%</div>
                    <div className="text-xs font-serif text-gray-600">Privacy</div>
                  </div>
                </div>
              </div>

              {/* Pricing - Fixed Layout */}
              <div className="mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-4xl font-bold text-gray-900">₹499</span>
                    <span className="text-xl font-serif text-gray-500 line-through">₹999</span>
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                      50% OFF
                    </div>
                  </div>

                </div>
              </div>

              <CTAButton className="w-full md:w-auto">
                Get Your Love Report Now
                <ChevronRight className="w-6 h-6" />
              </CTAButton>
            </div>


          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              What's Included
            </h2>
            <p className="text-xl font-serif px-4 text-white">
              Everything you need to understand your love life
            </p>
            <div className='border-b-4 border-orange-500 w-1/2 mx-auto my-6'></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <Heart className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">{feature}</h3>
                  <p className="font-serif text-gray-600">
                    Detailed analysis based on your birth chart and current planetary positions affecting your love life.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Why Choose Our Love Report?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Find Your True Love?
          </h2>
          <p className="text-xl font-serif mb-8 text-black-100">
            Get your personalized love report and discover what the stars have planned for your love life
          </p>
          <CTAButton className="text-lg px-8 py-4">
            Get Your Report Now - 50% OFF
          </CTAButton>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default LoveReport;
