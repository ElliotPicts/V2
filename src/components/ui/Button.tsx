import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  cyber?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  glow = false,
  cyber = false,
  className,
  children,
  ...props 
}: ButtonProps) {
  const baseClasses = "relative overflow-hidden font-orbitron font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 hover:from-primary-500 hover:via-primary-400 hover:to-primary-500 text-white shadow-lg hover:shadow-neon focus:ring-primary-500",
    secondary: "bg-gradient-to-r from-secondary-600 via-secondary-500 to-secondary-600 hover:from-secondary-500 hover:via-secondary-400 hover:to-secondary-500 text-black shadow-lg hover:shadow-neon focus:ring-secondary-500",
    accent: "bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 hover:from-accent-500 hover:via-accent-400 hover:to-accent-500 text-white shadow-lg hover:shadow-neon focus:ring-accent-500",
    outline: "border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white focus:ring-primary-500 backdrop-blur-sm bg-primary-500/10",
    ghost: "text-gray-300 hover:text-white hover:bg-white/10 focus:ring-white/20",
    neon: "bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue hover:from-neon-blue hover:via-neon-purple hover:to-neon-pink text-white shadow-neon-lg animate-gradient-shift"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-12 py-6 text-xl"
  };
  
  const glowClasses = glow ? "animate-pulse-glow shadow-neon" : "";
  const cyberClasses = cyber ? "cyber-button" : "";
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        glowClasses,
        cyberClasses,
        className
      )}
      {...props}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {children}
      </span>
      
      {/* Glow effect */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/20 animate-pulse blur-xl" />
      )}
    </motion.button>
  );
}