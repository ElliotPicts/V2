import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'neon' | 'cyber' | 'plasma' | 'twitter' | 'kick';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'mega';
  glow?: boolean;
  cyber?: boolean;
  intense?: boolean;
  ultra?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  glow = false,
  cyber = false,
  intense = false,
  ultra = false,
  className,
  children,
  ...props 
}: ButtonProps) {
  const baseClasses = "relative overflow-hidden font-orbitron font-bold rounded-2xl transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 active:scale-95 group";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 hover:from-primary-500 hover:via-primary-400 hover:to-primary-300 text-white shadow-cyber hover:shadow-neon-xl focus:ring-primary-500",
    secondary: "bg-gradient-to-r from-secondary-600 via-secondary-500 to-secondary-400 hover:from-secondary-500 hover:via-secondary-400 hover:to-secondary-300 text-black shadow-cyber hover:shadow-neon-xl focus:ring-secondary-500",
    accent: "bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400 hover:from-accent-500 hover:via-accent-400 hover:to-accent-300 text-white shadow-cyber hover:shadow-neon-xl focus:ring-accent-500",
    outline: "border-3 border-primary-500/80 text-primary-400 hover:bg-primary-500 hover:text-white focus:ring-primary-500 backdrop-blur-sm bg-primary-500/10 hover:shadow-neon-lg neon-border",
    ghost: "text-gray-300 hover:text-white hover:bg-white/10 focus:ring-white/20 backdrop-blur-sm",
    neon: "neon-button text-white shadow-plasma",
    cyber: "cyber-button",
    plasma: "plasma-button text-white shadow-plasma",
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
  const cyberClasses = cyber ? "energy-pulse" : "";
  const intenseClasses = intense ? "animate-cyber-glitch" : "";
  const ultraClasses = ultra ? "mega-glow animate-quantum" : "";
  
  return (
    <motion.button
      whileHover={{ 
        scale: variant === 'neon' || variant === 'plasma' ? 1.15 : 1.1, 
        rotateX: 5,
        rotateY: 2
      }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        glowClasses,
        cyberClasses,
        intenseClasses,
        ultraClasses,
        className
      )}
      {...props}
    >
      {/* Ultra Premium Hologram effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1500 group-hover:translate-x-full" />
      
      {/* Energy border for special variants */}
      {(variant === 'neon' || variant === 'plasma') && (
        <div className="absolute inset-0 rounded-2xl energy-border" />
      )}
      
      {/* Plasma background for ultra buttons */}
      {ultra && (
        <div className="absolute inset-0 plasma-bg opacity-20 rounded-2xl" />
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center space-x-3">
        {variant === 'neon' ? (
          <span className="gradient-text-rainbow neon-text-ultra">{children}</span>
        ) : variant === 'plasma' ? (
          <span className="gradient-text-plasma neon-text-intense">{children}</span>
        ) : (
          children
        )}
      </span>
      
      {/* Ultra Glow effect */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 via-accent-500/30 to-secondary-500/30 animate-gradient-x blur-2xl" />
      )}
      
      {/* Cyber particles */}
      {cyber && (
        <>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-float opacity-80" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent-400 rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-secondary-400 rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />
        </>
      )}
      
      {/* Ultra particles */}
      {ultra && (
        <>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-pink rounded-full animate-float opacity-60"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
}