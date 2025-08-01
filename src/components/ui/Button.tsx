import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'twitter' | 'kick';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  glow = false,
  className,
  children,
  ...props 
}: ButtonProps) {
  const baseClasses = "relative overflow-hidden font-inter font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg hover:shadow-primary-500/25 focus:ring-primary-500",
    secondary: "bg-gradient-to-r from-secondary-600 to-secondary-500 hover:from-secondary-500 hover:to-secondary-400 text-white shadow-lg focus:ring-secondary-500",
    accent: "bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white shadow-lg focus:ring-accent-500",
    outline: "border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white focus:ring-primary-500 backdrop-blur-sm",
    ghost: "text-gray-300 hover:text-white hover:bg-white/10 focus:ring-white/20",
    twitter: "bg-black hover:bg-gray-800 text-white border border-gray-700 hover:border-gray-500 focus:ring-gray-500",
    kick: "bg-kick hover:bg-kick/80 text-black font-bold focus:ring-kick"
  };
  
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  };
  
  const glowClasses = glow ? "shadow-neon" : "";
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        glowClasses,
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {children}
      </span>
    </motion.button>
  );
}