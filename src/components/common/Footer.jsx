import { useState } from 'react';
import { MapPin, Phone, Mail, Plus, X, Facebook, Instagram, Twitter, Play } from 'lucide-react';

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navigationSections = [
    {
      id: 'corporate',
      title: 'Corporate Info',
      items: ['About Us', 'Careers', 'Press', 'Investor Relations']
    },
    {
      id: 'calendar',
      title: 'Calendar',
      items: ['Daily Horoscope', 'Monthly Forecast', 'Yearly Predictions', 'Festival Calendar']
    },
    {
      id: 'sunsigns',
      title: 'Sun Signs',
      items: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-12 overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-32 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section - Logo and Contact Info */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4 mb-6 lg:mb-0 px-2">
            {/* Logo */}
            <img src="/easy-astro-logo.webp" alt="EasyAstro" className="w-50 h-14" />

            {/* Brand Name and Tagline */}

          </div>

          {/* Contact Information */}
          <div className="space-y-3 px-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white">Delhi</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white">(+91) 813-068-1246</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white">astrosupport@easyastro.com</span>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex items-center space-x-4 mb-8 px-4">
          <span className="text-white font-medium">Follow us on:</span>
          <div className="flex space-x-3">
            {/* Facebook */}
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            {/* Instagram */}
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-orange-600 transition-all cursor-pointer">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            {/* X (Twitter) */}
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
              <Twitter className="w-5 h-5 text-white" />
            </div>
            {/* Google Play */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <Play className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-b border-gray-600 mb-6"></div>

        {/* Navigation Sections */}
        <div className="space-y-4 mb-8">
          {navigationSections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between py-3 hover:bg-gray-800/50 transition-colors rounded-lg px-2"
              >
                <span className="text-white font-medium">{section.title}</span>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Plus className={`w-4 h-4 text-gray-800 transition-transform duration-300 ${expandedSections[section.id] ? 'rotate-45' : 'rotate-0'
                    }`} />
                </div>
              </button>

              {/* Expanded Content */}
              {expandedSections[section.id] && (
                <div className="ml-4 mt-2 space-y-2 animate-fadeIn">
                  {section.items.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block text-gray-300 hover:text-white transition-colors py-1"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Separator Line */}
        <div className="border-b border-gray-600 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-300 text-sm">
            © 2025 EasyAstro powered by Learnify Technologies Private Limited. All Right Reserved.
          </p>
        </div>
      </div>

      {/* Custom CSS for fadeIn animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
