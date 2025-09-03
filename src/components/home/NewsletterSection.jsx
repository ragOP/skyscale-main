import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-blue-100 mb-8">Get the latest astronomy news and exclusive offers</p>
        
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
            <Mail className="w-5 h-5 mr-2" />
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
