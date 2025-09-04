import { Users, Star, Check, Clock, Shield, Video, ChevronRight } from 'lucide-react';
import CTAButton from '../components/common/CTAButton';
import Navbar from '../components/home/Navbar';
import Footer from '../components/common/Footer';
import AboutUs from '../components/home/AboutUs';
import TestimonialsSection from '../components/home/TestimonialsSection';

const PremiumAstroConsultation = () => {
  const features = [
    "1-on-1 personalized consultation",
    "Experienced Vedic astrologers",
    "Birth chart analysis",
    "Life path guidance",
    "Career & relationship insights",
    "Remedial solutions",
    "Follow-up support included",
    "Video/Audio call options"
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
      <div className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                  Premium Astro Consultation
                </h1>
              </div>

              {/* Image */}
              <div className="relative mb-4">
                <img
                  src="/permium-astro-consultation.jpg"
                  alt="Premium Astro Consultation"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-serif font-bold">
                  61% OFF
                </div>
              </div>

              <p className="text-lg font-serif text-gray-700 mb-8 leading-relaxed mt-8">
                Get personalized guidance from India's top astro-numerology experts. Our experienced astrologers provide authentic Vedic astrology consultations tailored to your unique birth chart.
              </p>

              {/* Rating and Stats - Matching Love Report Layout */}
              <div className="mb-8">
                {/* Rating */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-serif text-gray-600 font-medium">4.8/5</span>
                  <span className="font-serif text-gray-500">(892 reviews)</span>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <Users className="w-6 h-6 text-purple-500 mx-auto mb-1" />
                    <div className="text-lg font-serif font-bold text-gray-900">892+</div>
                    <div className="text-xs font-serif text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <Clock className="w-6 h-6 text-purple-500 mx-auto mb-1" />
                    <div className="text-lg font-serif font-bold text-gray-900">24H</div>
                    <div className="text-xs font-serif text-gray-600">Delivery</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <Shield className="w-6 h-6 text-purple-500 mx-auto mb-1" />
                    <div className="text-lg font-serif font-bold text-gray-900">100%</div>
                    <div className="text-xs font-serif text-gray-600">Privacy</div>
                  </div>
                </div>
              </div>

              {/* Pricing - Matching Love Report Layout */}
              <div className="mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-4xl font-bold text-gray-900">₹389</span>
                    <span className="text-xl font-serif text-gray-500 line-through">₹998</span>
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                      61% OFF
                    </div>
                  </div>
                </div>
              </div>

              <CTAButton className="w-full md:w-auto">
                Book Consultation Now
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
              Complete personalized consultation experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">{feature}</h3>
                  <p className="font-serif text-gray-600">
                    Professional guidance from certified Vedic astrologers with years of experience.
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
              Why Choose Our Consultation?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
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
              <Users className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">892+</h3>
              <p className="font-serif text-gray-600">Satisfied Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <Video className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Live</h3>
              <p className="font-serif text-gray-600">Video Consultation</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Verified</h3>
              <p className="font-serif text-gray-600">Expert Astrologers</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-4 pt-12 bg-gradient-to-r from-gray-50 to-gray-100 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready for Your Personal Consultation?
          </h2>
          <p className="text-xl font-serif mb-8 text-gray-600">
            Book your session with our expert astrologers and get personalized guidance for your life's journey
          </p>
          <CTAButton className="text-lg px-8 py-4">
            Book Now - 61% OFF
          </CTAButton>
        </div>
      </div>

      <TestimonialsSection />

      <Footer />
    </div>
  );
};

export default PremiumAstroConsultation;