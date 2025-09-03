import { Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';
import { CardSpotlight } from '../ui/CardSpotlight';

const ExperienceSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-10 bg-gradient-to-br from-purple-100 to-indigo-100 border-t border-purple-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-clash">
            Experience Ancient Wisdom
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          देखिए कैसे पुराना वैदिक ज्ञान आपकी किस्मत बदल देता है
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative group">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-auto rounded-2xl shadow-2xl bg-gray-800"
              poster="/astrology-1.png"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onError={() => console.log('Video failed to load')}
              controls={false}
              preload="metadata"
            >
              <source src="/astro-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Play/Pause Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
              <button
                onClick={togglePlay}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-gray-800" />
                ) : (
                  <Play className="w-8 h-8 text-gray-800 ml-1" />
                )}
              </button>
            </div>

            {/* Video Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-400 rounded-2xl opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🔮 Unlock Your Kundali Secrets
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Watch our expert Pandit ji reveal your future using time-tested Vedic methods and sacred calculations
            </p>
          </div>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardSpotlight>
            <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50 hover:border-purple-200 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-300 group-hover:to-indigo-300 transition-all duration-300">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🌟</span>
              </div>
              <div className="mb-3">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Premium</span>
              </div>
              <h4 className="font-clash text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Personal Kundali</h4>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">Customized insights based on your birth chart and planetary positions</p>
            </div>
          </CardSpotlight>
          <CardSpotlight>
            <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50 hover:border-purple-200 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-300 group-hover:to-indigo-300 transition-all duration-300">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📱</span>
              </div>
              <div className="mb-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Instant</span>
              </div>
              <h4 className="font-clash text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Instant Report</h4>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">Get your detailed astrology report instantly on any device, anytime</p>
            </div>
          </CardSpotlight>
          <CardSpotlight>
            <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50 hover:border-purple-200 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-300 group-hover:to-indigo-300 transition-all duration-300">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🎯</span>
              </div>
              <div className="mb-3">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Verified</span>
              </div>
              <h4 className="font-clash text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Accurate Predictions</h4>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">99% accuracy with detailed remedies and future guidance from our Guru ji</p>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 