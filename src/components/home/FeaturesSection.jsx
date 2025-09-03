import { Telescope, Camera, Users, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Telescope,
      title: "Premium Telescopes",
      description: "High-quality telescopes for every skill level"
    },
    {
      icon: Camera,
      title: "Astrophotography",
      description: "Capture stunning images of the night sky"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Get guidance from astronomy professionals"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "30-day money-back guarantee on all products"
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EasyAstro?</h2>
          <p className="text-lg text-gray-600">Everything you need for your astronomy journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
