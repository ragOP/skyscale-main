import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is Vedic Astrology and how is it different from Western Astrology?",
      answer: "Vedic Astrology, also known as Jyotish, is an ancient Indian system of astrology that's over 5000 years old. Unlike Western astrology which uses the tropical zodiac, Vedic astrology uses the sidereal zodiac based on the actual positions of stars. It provides more detailed predictions and focuses on karma, dharma, and spiritual growth."
    },
    {
      id: 2,
      question: "How accurate are your astrology predictions?",
      answer: "Our predictions are based on authentic Vedic astrology principles with over 99% accuracy rate. We use your exact birth time, date, and location to create precise birth charts. However, astrology provides guidance and probabilities - your free will and actions ultimately shape your destiny."
    },
    {
      id: 3,
      question: "What information do I need to provide for a reading?",
      answer: "For an accurate reading, we need your exact birth date, birth time (preferably to the minute), and birth location (city/town). If you don't know your exact birth time, we can work with approximate times, but the reading may be less precise."
    },
    {
      id: 4,
      question: "How long does it take to receive my astrology report?",
      answer: "Digital reports are typically delivered within 24-48 hours after payment confirmation. Premium consultations are scheduled within 2-3 business days. Love reports and compatibility analyses are usually ready within 24 hours."
    },
    {
      id: 5,
      question: "Can astrology really predict my future love life?",
      answer: "Vedic astrology can reveal your romantic tendencies, compatibility patterns, and favorable periods for relationships. Our love reports analyze your 7th house (marriage), Venus placement, and other relationship indicators to provide insights about your love life and potential partner characteristics."
    },
    {
      id: 6,
      question: "What makes your astrology services authentic?",
      answer: "Our astrologers are trained in traditional Vedic astrology with years of experience. We use authentic Sanskrit texts, precise mathematical calculations, and time-tested techniques. All our predictions are based on classical astrology principles, not modern interpretations."
    },
    {
      id: 7,
      question: "Do you offer refunds if I'm not satisfied?",
      answer: "Yes, we offer a 7-day money-back guarantee if you're not completely satisfied with your reading. We're confident in our accuracy and want you to be happy with your astrology experience."
    },
    {
      id: 8,
      question: "Can I ask follow-up questions after receiving my report?",
      answer: "Absolutely! Premium consultation packages include follow-up support. For standard reports, you can purchase additional consultation time to discuss your reading in detail with our expert astrologers."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-10 bg-gradient-to-br from-orange-50/50 to-red-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl font-bold text-gray-900 font-playfair">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about Vedic astrology and our services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100/50 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-orange-50/50 transition-colors duration-300 focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4 font-inter">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <Minus className="w-6 h-6 text-orange-600 transition-transform duration-300" />
                  ) : (
                    <Plus className="w-6 h-6 text-orange-600 transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-8 pb-6">
                  <div className="border-t border-orange-100 pt-4 ">
                    <p className="text-gray-600 leading-relaxed font-poppins mb-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Support
            </button>
            <button className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;