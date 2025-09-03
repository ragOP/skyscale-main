import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import CTAButton from '../common/CTAButton';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(1); // First FAQ is open by default

  const faqs = [
    {
      id: 1,
      question: "What is Astrology?",
      answer: "Astrology is the study of the movements and relative positions of celestial bodies interpreted as having an influence on human affairs and the natural world. It's an ancient practice that helps us understand our personality, relationships, and life events through the positions of planets and stars at the time of our birth."
    },
    {
      id: 2,
      question: "How Can Astrology Help Me?",
      answer: "Astrology can help you understand your personality traits, strengths, and weaknesses. It provides insights into your relationships, career path, health, and life timing. By understanding your astrological profile, you can make better decisions and navigate life's challenges with greater awareness."
    },
    {
      id: 3,
      question: "Are Astrology Predictions True?",
      answer: "Astrology provides guidance and probabilities based on celestial patterns. While it can offer valuable insights and timing for events, it's important to remember that you have free will. Astrology is a tool for self-awareness and guidance, not absolute fate."
    },
    {
      id: 4,
      question: "Why Should I Choose EasyAstro For Astrology Consultation Over Other Platforms?",
      answer: "EasyAstro offers authentic Vedic astrology consultations with experienced astrologers. We provide personalized readings, accurate predictions, and comprehensive reports. Our platform is trusted by millions of users and offers 24/7 support with a money-back guarantee."
    },
    {
      id: 5,
      question: "Which Is The Most Trusted Astrology App and Website In India?",
      answer: "EasyAstro is recognized as one of the most trusted astrology platforms in India. With over 38.4 million satisfied customers and 10,739+ verified astrologers, we have built a reputation for accuracy, authenticity, and excellent customer service."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-8">
            FAQs About EasyAstro
          </h2>

          <div className="border-b-4 border-orange-500 mx-[35%] mb-12" />

        </div>

        {/* FAQ Items */}
        <div className="space-y-0 px-4">
          {faqs.map((faq, index) => (
            <div key={faq.id}>
              {/* FAQ Item */}
              <div 
                className={`py-6 px-0 flex items-center justify-between cursor-pointer transition-all duration-500 ease-in-out ${
                  openFAQ === faq.id 
                    ? 'bg-blue-50 border-2 border-blue-200 rounded-lg px-4' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="text-lg md:text-xl font-serif font-bold text-black flex-1 pr-4 transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 transition-all duration-300 ease-in-out">
                  {openFAQ === faq.id ? (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center transform rotate-180 transition-all duration-500 ease-in-out">
                      <Minus className="w-4 h-4 text-gray-600 transition-all duration-300" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center transform rotate-0 transition-all duration-500 ease-in-out">
                      <Plus className="w-4 h-4 text-gray-600 transition-all duration-300" />
                    </div>
                  )}
                </div>
              </div>

              {/* Answer with smooth slide animation */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === faq.id 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-6 bg-blue-50 border-2 border-blue-200 rounded-lg mx-0 -mt-2 transform transition-all duration-500 ease-in-out">
                  <p className="text-gray-700 leading-relaxed pt-4 transform transition-all duration-500 ease-in-out">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Separator Line */}
              {index < faqs.length - 1 && (
                <div className="border-b border-gray-200 transition-opacity duration-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* View All FAQs Button */}
        <div className="text-center mt-12">
          <CTAButton 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => console.log('View all FAQs clicked')}
          >
            View all FAQs
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 