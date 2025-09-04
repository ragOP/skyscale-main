import { Heart, Users, Palette, DollarSign, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import CTAButton from '../common/CTAButton';

// Simple Rating Component
const Rating = ({ rating, totalReviews }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    );
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative w-4 h-4">
        <Star className="w-4 h-4 text-gray-300" />
        <div className="absolute inset-0 overflow-hidden w-1/2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        </div>
      </div>
    );
  }

  // Add empty stars
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
    );
  }

  return (
    <div className="flex items-center justify-center space-x-1 mb-2">
      <div className="flex items-center space-x-0.5">
        {stars}
      </div>
      <span className="text-sm font-serif text-gray-600 ml-1">
        ({totalReviews})
      </span>
    </div>
  );
};

const OurServices = () => {
  const { addToCart } = useCart();

  // Updated services array with new services
  const services = [
    {
      id: 1,
      name: "Love Report",
      image: "/love-report-1.png",
      icon: Heart,
      description: "Complete analysis of your love life and relationships",
      gradient: "from-pink-400 to-red-400",
      price: 499,
      originalPrice: 999,
      discount: "50% OFF",
      rating: 4.5,
      totalReviews: 1247,
      route: "/love-report"
    },
    {
      id: 2,
      name: "Premium Astro Consultation",
      image: "/permium-astro-consultation.jpg",
      icon: Users,
      description: "1-on-1 personalized consultation with India's top astro-numerology expert",
      gradient: "from-purple-400 to-indigo-400",
      price: 389,
      originalPrice: 998,
      discount: "61% OFF",
      rating: 4.8,
      totalReviews: 892,
      route: "/premium-astro-consultation"
    },
    {
      id: 3,
      name: "Soulmate Sketch",
      image: "/easy-astro-1.webp",
      icon: Palette,
      description: "Discover the appearance of your destined life partner",
      gradient: "from-blue-400 to-cyan-400",
      price: 599,
      originalPrice: 1199,
      discount: "50% OFF",
      rating: 4.3,
      totalReviews: 567,
      route: "/soulmate-sketch"
    },
    {
      id: 4,
      name: "Wealth Report",
      image: "/astrology-2.webp",
      icon: DollarSign,
      description: "Unlock your financial potential through astrology",
      gradient: "from-green-400 to-emerald-400",
      price: 699,
      originalPrice: 1299,
      discount: "46% OFF",
      rating: 4.6,
      totalReviews: 743,
      route: "/wealth-report"
    }
  ];

  const handleAddToCart = (service) => {
    const product = {
      id: service.id,
      name: service.name,
      image: service.image,
      price: service.price,
      originalPrice: service.originalPrice,
      discount: service.discount,
      rating: service.rating,
      reviews: service.totalReviews
    };
    addToCart(product);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl font-serif text-gray-600 max-w-3xl px-4 mx-auto">
            Discover our range of personalized astrology services designed to guide you on your life's journey
          </p>

        <div className='border-b-4 border-orange-500 w-1/2 mx-auto mt-8' />
        </div>

        {/* Products Grid - 2 per row on mobile, 2 per row on desktop */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="text-center flex flex-col"
              >
                {/* Product Image */}
                <Link to={service.route}>
                  <div className="relative mb-4 cursor-pointer group">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 md:h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Discount Badge */}
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {service.discount}
                    </div>
                  </div>
                </Link>

                {/* Product Name - Fixed height */}
                <Link to={service.route}>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-3 h-12 md:h-14 flex items-center justify-center hover:text-orange-600 transition-colors cursor-pointer">
                    {service.name}
                  </h3>
                </Link>

                {/* Rating */}
                <Rating rating={service.rating} totalReviews={service.totalReviews} />

                {/* Price Section */}
                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <span className="text-xl md:text-2xl font-bold text-gray-900">
                      ₹{service.price}
                    </span>
                    <span className="text-base md:text-lg  text-gray-500 line-through">
                      ₹{service.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button - Pushed to bottom */}
                <div className="mt-auto">
                  <CTAButton 
                    className="w-full text-sm md:text-base font-serif"
                    onClick={() => handleAddToCart(service)}
                  >
                    Add to Cart
                  </CTAButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
