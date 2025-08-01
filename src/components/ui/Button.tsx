import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'gaming' | 'ultra' | 'twitter' | 'kick';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'mega';
  glow?: boolean;
  intense?: boolean;
  ultra?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  glow = false,
  intense = false,
  ultra = false,
  className,
  children,
  ...props 
}: ButtonProps) {
  const baseClasses = "relative overflow-hidden font-orbitron font-bold rounded-2xl transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 active:scale-95 group";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 hover:from-purple-500 hover:via-purple-400 hover:to-purple-300 text-white shadow-cyber hover:shadow-neon-xl focus:ring-purple-500",
    secondary: "bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 hover:from-pink-500 hover:via-pink-400 hover:to-pink-300 text-white shadow-cyber hover:shadow-neon-xl focus:ring-pink-500",
    accent: "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-500 hover:via-blue-400 hover:to-blue-300 text-white shadow-cyber hover:shadow-neon-xl focus:ring-blue-500",
    outline: "border-3 border-purple-500/80 text-purple-400 hover:bg-purple-500 hover:text-white focus:ring-purple-500 backdrop-blur-sm bg-purple-500/10 hover:shadow-neon-lg neon-border",
    ghost: "text-gray-300 hover:text-white hover:bg-white/10 focus:ring-white/20 backdrop-blur-sm",
    gaming: "gaming-button",
    ultra: "ultra-button text-white shadow-ultra",
    twitter: "bg-gradient-to-r from-black via-gray-800 to-black hover:from-gray-800 hover:via-gray-600 hover:to-gray-800 text-white twitter-glow focus:ring-gray-500 border border-gray-700 hover:border-gray-500",
    kick: "bg-gradient-to-r from-kick-600 to-kick-400 hover:from-kick-500 hover:to-kick-300 text-black kick-glow focus:ring-kick-500 font-black shadow-neon-lg"
  };
  
  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-12 py-5 text-lg",
    xl: "px-16 py-6 text-xl",
    mega: "px-20 py-8 text-2xl"
  };
  
  const glowClasses = glow ? "animate-glow-pulse shadow-neon-xl" : "";
  const intenseClasses = intense ? "animate-gaming-glitch" : "";
  const ultraClasses = ultra ? "mega-glow animate-quantum" : "";
  
  return (
    <motion.button
      whileHover={{ 
        scale: variant === 'ultra' ? 1.15 : 1.1, 
        rotateX: 5,
        rotateY: 2
      }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        glowClasses,
        intenseClasses,
        ultraClasses,
        className
      )}
      {...props}
    >
      {/* Ultra Premium Hologram effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1500 group-hover:translate-x-full" />
      
      {/* Energy border for special variants */}
      {(variant === 'gaming' || variant === 'ultra') && (
        <div className="absolute inset-0 rounded-2xl energy-border" />
      )}
      
      {/* Gaming background for ultra buttons */}
      {ultra && (
        <div className="absolute inset-0 gaming-bg opacity-20 rounded-2xl" />
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center space-x-3">
        {variant === 'ultra' ? (
          <span className="gradient-text-ultra neon-text-ultra">{children}</span>
        ) : variant === 'gaming' ? (
          <span className="gradient-text-gaming neon-text-intense">{children}</span>
        ) : (
          children
        )}
      </span>
      
      {/* Ultra Glow effect */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 animate-gradient-x blur-2xl" />
      )}
      
      {/* Gaming particles */}
      {intense && (
        <>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-80" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />
        </>
      )}
      
      {/* Ultra particles */}
      {ultra && (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float opacity-60"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                backgroundColor: ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'][Math.floor(Math.random() * 5)]
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
}