import React from 'react';
import { Heart, Users, Palette, DollarSign, CheckCircle, Star, Clock, ArrowRight } from 'lucide-react';
import CTAButton from '../components/common/CTAButton';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Love Report",
      image: "/love-report-1.png",
      icon: Heart,
      description: "Complete analysis of your love life and relationships",
      gradient: "from-pink-400 to-red-400",
      price: "₹499",
      originalPrice: "₹999",
      discount: "50% OFF",
      rating: 4.8,
      reviews: 1000,
      delivery: "24 Hours",
      features: [
        "Your Love & Relationship Horoscope",
        "Breakup or Patch-Up Possibility", 
        "Timeline for Marriage & True Love",
        "Hidden blocks & remedies for love issues"
      ],
      benefits: [
        "Detailed love compatibility analysis",
        "Relationship timeline predictions",
        "Personalized love remedies",
        "Marriage timing insights",
        "Past life connection analysis",
        "Future relationship guidance"
      ]
    },
    {
      id: 2,
      name: "Premium Astro Consultation",
      image: "/permium-astro-consultation.jpg",
      icon: Users,
      description: "1-on-1 personalized consultation with India's top astro-numerology expert",
      gradient: "from-purple-400 to-indigo-400",
      price: "₹389",
      originalPrice: "₹998",
      discount: "61% OFF",
      rating: 4.9,
      reviews: 500,
      delivery: "60 Min Session",
      features: [
        "Personalized birth chart analysis",
        "Life path guidance", 
        "Career & relationship insights",
        "Remedial solutions"
      ],
      benefits: [
        "1-on-1 consultation with India's top expert",
        "Detailed analysis of your birth chart",
        "Personalized guidance for life decisions",
        "Career and relationship insights",
        "Custom remedial solutions",
        "Follow-up support for 30 days"
      ]
    },
    {
      id: 3,
      name: "Soulmate Sketch",
      image: "/easy-astro-1.webp",
      icon: Palette,
      description: "Discover the appearance of your destined life partner",
      gradient: "from-blue-400 to-cyan-400",
      price: "₹599",
      originalPrice: "₹1199",
      discount: "50% OFF",
      rating: 4.7,
      reviews: 800,
      delivery: "48 Hours",
      features: [
        "Detailed soulmate appearance sketch",
        "Physical characteristics analysis",
        "Personality traits description",
        "Meeting timeline prediction"
      ],
      benefits: [
        "Hand-drawn artistic sketch",
        "Detailed physical description",
        "Personality insights",
        "Meeting location guidance",
        "Timeline for when you'll meet",
        "Digital and print versions"
      ]
    },
    {
      id: 4,
      name: "Wealth Report",
      image: "/astrology-2.webp",
      icon: DollarSign,
      description: "Unlock your financial potential through astrology",
      gradient: "from-green-400 to-emerald-400",
      price: "₹699",
      originalPrice: "₹1299",
      discount: "46% OFF",
      rating: 4.6,
      reviews: 600,
      delivery: "24 Hours",
      features: [
        "Financial horoscope analysis",
        "Wealth accumulation timeline",
        "Investment guidance",
        "Money block remedies"
      ],
      benefits: [
        "Detailed financial forecast",
        "Best investment opportunities",
        "Wealth building strategies",
        "Remedies for financial blocks",
        "Career growth insights",
        "Lucky numbers and colors"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-clash">
            Our Premium Astrology Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Discover your destiny with our expert astrological guidance and personalized reports
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>4.8/5 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>2900+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>24-48 Hour Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group">
                  {/* Product Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.discount}
                      </span>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${product.gradient} rounded-full flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 font-clash">{product.name}</h2>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span>{product.rating}</span>
                            </div>
                            <span>{product.reviews} reviews</span>
                            <span>•</span>
                            <span>{product.delivery}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></span>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl font-bold text-red-600">{product.price}</span>
                          <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                        </div>
                        <CTAButton className="flex items-center space-x-2">
                          <span>Get Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </CTAButton>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-clash">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Choose any of our premium astrology services and discover what the stars have planned for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton className="text-lg px-8 py-4">
              View All Services
            </CTAButton>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
              Contact Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products; 