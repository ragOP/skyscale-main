import React, { useEffect, useState } from 'react';

const ParticleAnimation = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 100 particles with random properties
    const particleArray = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 8 + 2; // 2-10px
      const startX = Math.random() * 100; // 0-100vw
      const endX = Math.random() * 100; // 0-100vw
      const startY = 110 + Math.random() * 10; // Start below screen
      const endY = -20 - Math.random() * 30; // End above screen
      const duration = 28000 + Math.random() * 9000; // 28-37s
      const delay = Math.random() * 37000; // 0-37s delay
      const scaleDelay = Math.random() * 4000; // 0-4s scale delay
      
      particleArray.push({
        id: i,
        size,
        startX,
        endX,
        startY,
        endY,
        duration,
        delay,
        scaleDelay
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <>
      {/* Particle Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-float-up"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.startX}vw`,
              animationDuration: `${particle.duration}ms`,
              animationDelay: `${particle.delay}ms`,
              '--start-y': `${particle.startY}vh`,
              '--end-y': `${particle.endY}vh`,
              '--end-x': `${particle.endX}vw`,
            }}
          >
            <div 
              className="w-full h-full rounded-full animate-scale-pulse mix-blend-screen"
              style={{
                background: `radial-gradient(circle, 
                  hsl(${25 + Math.random() * 15}, 100%, 70%) 0%, 
                  hsl(${25 + Math.random() * 15}, 100%, 70%) 10%, 
                  hsla(${25 + Math.random() * 15}, 100%, 70%, 0) 56%)`,
                animationDelay: `${particle.scaleDelay}ms`
              }}
            />
          </div>
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-up {
          from {
            transform: translate3d(0, var(--start-y), 0);
          }
          to {
            transform: translate3d(calc(var(--end-x) - 50vw), var(--end-y), 0);
          }
        }
        
        @keyframes scale-pulse {
          0% {
            transform: scale3d(0.4, 0.4, 1);
            opacity: 1;
          }
          50% {
            transform: scale3d(2.2, 2.2, 1);
            opacity: 0.7;
          }
          100% {
            transform: scale3d(0.4, 0.4, 1);
            opacity: 1;
          }
        }
        
        .animate-float-up {
          animation: float-up linear infinite;
        }
        
        .animate-scale-pulse {
          animation: scale-pulse 2s infinite, fadein-frames 200ms infinite;
        }
        
        @keyframes fadein-frames {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default ParticleAnimation; 