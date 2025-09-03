import React from 'react';

const CTAButton = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary",
  size = "lg" 
}) => {
  const baseClasses = "relative overflow-hidden font-bolder transition-all duration-400 transform active:scale-95 group";
  
  const variants = {
    primary: "bg-black text-white border-4 border-orange-400 hover:translate-x-1 hover:-translate-y-1 hover:border-orange-500",
    secondary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-3 text-base rounded-2xl"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{
        boxShadow: variant === 'primary' ? '-5px 5px 0px 0px #fb923c' : 'none',
        transition: 'cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s'
      }}
    >
      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-orange-100/60 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-all duration-300 rounded-2xl"></div>
      
      {/* Floating sparkles on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute w-1 h-1 bg-orange-300 rounded-full animate-ping" style={{top: '20%', left: '20%', animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{top: '70%', left: '80%', animationDelay: '0.3s'}}></div>
        <div className="absolute w-1 h-1 bg-orange-500 rounded-full animate-ping" style={{top: '50%', left: '60%', animationDelay: '0.6s'}}></div>
      </div>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center font-semibold group-hover:scale-105 transition-transform duration-300">{children}</span>
      
      {/* Custom CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }
      `}</style>
    </button>
  );
};

export default CTAButton; 