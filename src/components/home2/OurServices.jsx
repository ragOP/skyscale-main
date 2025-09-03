import { Heart, Users, Palette, DollarSign, ArrowRight } from 'lucide-react';
import CTAButton from '../common/CTAButton';

const OurServices = () => {
  // Updated services array with new services
  const services = [
    {
      id: 1,
      name: "Love Report",
      image: "/love-report-1.png",
      icon: Heart,
      description: "Complete analysis of your love life and relationships",
      gradient: "from-pink-400 to-red-400",
      price: "₹499",
      originalPrice: "₹999",
      discount: "50% OFF"
    },
    {
      id: 2,
      name: "Premium Astro Consultation",
      image: "/permium-astro-consultation.jpg",
      icon: Users,
      description: "1-on-1 personalized consultation with India's top astro-numerology expert",
      gradient: "from-purple-400 to-indigo-400",
      price: "₹389",
      originalPrice: "998",
      discount: "61% OFF",
      // features: [
      //   "Personalized birth chart analysis",
      //   "Life path guidance", 
      //   "Career & relationship insights",
      //   "Remedial solutions"
      // ]
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
      discount: "50% OFF"
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
      discount: "46% OFF"
    }
  ];

  return (
    <section id="services" className="py-10 bg-gradient-to-br from-white to-orange-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-clash">
            Our Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mt-2">
              Unlock Your Destiny
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our specialized astrology services designed to guide you through life's journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Services Grid - Updated to 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="group relative clickable-card">
                {/* New Service Card Design with Infinite Rotating Spin Animation on Border */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100/50 hover:border-orange-200 hover:scale-105 animate-border-spin">
                  {/* Full Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>

                  {/* Text Content in Between */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-clash group-hover:text-orange-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-medium mb-4">
                      {service.description}
                    </p>

                    {/* Features List (if available) */}
                    {service.features && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">What's Included:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Pricing Section */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-red-600">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                      </div>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                        {service.discount}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to discover what the stars have planned for you?
          </p>
          <CTAButton>
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
