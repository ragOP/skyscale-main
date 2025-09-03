import { Star, Users, Award, Shield, CheckCircle } from 'lucide-react';

const TrustIndicator = () => {
  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Happy Customers",
      color: "text-orange-600"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating",
      color: "text-yellow-500"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      color: "text-blue-600"
    },
    {
      icon: CheckCircle,
      number: "99%",
      label: "Accuracy Rate",
      color: "text-green-600"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Amazing accuracy! The predictions helped me make important life decisions.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi", 
      text: "Professional service with detailed explanations. Highly recommended!",
      rating: 5
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad",
      text: "Best astrologer I've consulted. Very knowledgeable and helpful.",
      rating: 5
    }
  ];

  const trustBadges = [
    "Certified Astrologer",
    "Secure Payments",
    "24/7 Support",
    "Money Back Guarantee"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50/50 to-red-50/50 border-t border-orange-200/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-100">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-full group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300">
                    <Icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2 font-clash">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-semibold tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3 font-clash">
              What Our Customers Say
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-orange-100/50 hover:border-orange-200">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic text-center leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-orange-600 font-medium text-sm">
                    📍 {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <div key={index} className="group flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-green-200/50 hover:border-green-300">
              <div className="p-1 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                <Shield className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm font-semibold text-green-800 tracking-wide">
                {badge}
              </span>
            </div>
          ))}
        </div>

        {/* Final Trust Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 shadow-lg border border-orange-200/50">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Trusted by <span className="font-bold text-orange-600 bg-orange-200/50 px-2 py-1 rounded">thousands of people</span> across India for accurate predictions and spiritual guidance. 
              <span className="font-bold text-red-600 bg-red-200/50 px-2 py-1 rounded ml-2">Join our satisfied customers today!</span>
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Verified Reviews</span>
              </div>
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <div className="flex items-center space-x-1">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Secure & Private</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicator; 