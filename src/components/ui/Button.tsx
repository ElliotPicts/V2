import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'neon' | 'cyber' | 'twitter' | 'kick';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  cyber?: boolean;
  intense?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  glow = false,
  cyber = false,
  intense = false,
  className,
  children,
  ...props 
}: ButtonProps) {
  const baseClasses = "relative overflow-hidden font-orbitron font-bold rounded-xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 group";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 hover:from-primary-500 hover:via-primary-400 hover:to-primary-300 text-white shadow-cyber hover:shadow-neon-lg focus:ring-primary-500",
    secondary: "bg-gradient-to-r from-secondary-600 via-secondary-500 to-secondary-400 hover:from-secondary-500 hover:via-secondary-400 hover:to-secondary-300 text-black shadow-cyber hover:shadow-neon-lg focus:ring-secondary-500",
    accent: "bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400 hover:from-accent-500 hover:via-accent-400 hover:to-accent-300 text-white shadow-cyber hover:shadow-neon-lg focus:ring-accent-500",
    outline: "border-2 border-primary-500/60 text-primary-400 hover:bg-primary-500 hover:text-white focus:ring-primary-500 backdrop-blur-sm bg-primary-500/10 hover:shadow-neon",
    ghost: "text-gray-300 hover:text-white hover:bg-white/10 focus:ring-white/20 backdrop-blur-sm",
    neon: "neon-button text-white shadow-neon-xl",
    cyber: "cyber-button",
    twitter: "bg-gradient-to-r from-twitter-600 to-twitter-400 hover:from-twitter-500 hover:to-twitter-300 text-white twitter-glow focus:ring-twitter-500",
    kick: "bg-gradient-to-r from-kick-600 to-kick-400 hover:from-kick-500 hover:to-kick-300 text-black kick-glow focus:ring-kick-500 font-black"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-12 py-6 text-xl"
  };
  
  const glowClasses = glow ? "animate-glow-pulse shadow-neon-lg" : "";
  const cyberClasses = cyber ? "energy-pulse" : "";
  const intenseClasses = intense ? "animate-cyber-glitch" : "";
  
  return (
    <motion.button
      whileHover={{ scale: 1.05, rotateX: 5 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        glowClasses,
        cyberClasses,
        intenseClasses,
        className
      )}
      {...props}
    >
      {/* Hologram effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
      
      {/* Energy border for neon variant */}
      {variant === 'neon' && (
        <div className="absolute inset-0 rounded-xl energy-border" />
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {variant === 'neon' ? (
          <span className="gradient-text-rainbow neon-text-intense">{children}</span>
        ) : (
          children
        )}
      </span>
      
      {/* Glow effect */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/20 animate-gradient-x blur-xl" />
      )}
      
      {/* Cyber particles */}
      {cyber && (
        <>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary-400 rounded-full animate-float opacity-60" />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent-400 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-secondary-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }} />
        </>
      )}
    </motion.button>
  );
}