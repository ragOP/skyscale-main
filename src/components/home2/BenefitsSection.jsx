import { Truck, Award, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $99"
    },
    {
      icon: Award,
      title: "Best Quality",
      description: "Premium materials & craftsmanship"
    },
    {
      icon: Shield,
      title: "Warranty",
      description: "2-year manufacturer warranty"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
