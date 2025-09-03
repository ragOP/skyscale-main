import { Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

const VideoSection = () => {
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
    <section className="relative py-40 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-100 object-cover"
          autoPlay
          loop
          muted
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src="/astro-video.mp4" type="video/mp4" />
          <source src="/astro-videolmpt.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-black/60"></div>
        
        {/* Mystical overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/10 to-transparent"></div>
      </div>

    </section>
  );
};

export default VideoSection; 