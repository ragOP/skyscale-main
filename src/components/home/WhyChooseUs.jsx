const WhyChooseUs = () => {
    const stats = [
      {
        number: "10,739 +",
        label: "Total Astrologers"
      },
      {
        number: "240 Million",
        label: "Total Chat/Call Minutes"
      },
      {
        number: "38.4 Million",
        label: "Total Customers"
      }
    ];
  
    return (
      <div className="py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background texture overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Why Choose Us
            </h2>
            
            {/* Decorative line with swirl */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="mx-4 relative">
                {/* Central swirl */}
                <div className="w-6 h-6 border-2 border-white rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="w-8 h-0.5 bg-white"></div>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white text-center max-w-3xl mx-auto leading-relaxed">
              We are the most reliable astrology service provider in India and our reputation is based on providing excellent astrological services, astrological consultations, and astrology readings that are accurate and insightful.
            </p>
          </div>
  
          {/* Stats Container */}
          <div className="space-y-8 px-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-transparent border-2 border-white rounded-full p-4 md:p-8 text-center hover:bg-white/5 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl text-white font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyChooseUs;