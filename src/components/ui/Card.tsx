import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  glow?: boolean;
  hover?: boolean;
}

export function Card({ 
  className, 
  children, 
  glow = false, 
  hover = true
}: CardProps) {
  const baseClasses = "relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-300";
  const cardClasses = "glass-dark";
  const hoverClasses = hover ? "hover:border-primary-500/50 hover:shadow-neon hover:scale-105" : "";
  const glowClasses = glow ? "border-primary-500/50 shadow-neon" : "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: hover ? 1.05 : 1 }}
      className={clsx(
        baseClasses, 
        cardClasses, 
        hoverClasses, 
        glowClasses,
        className
      )}
    >
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Glow overlay */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 pointer-events-none" />
      )}
    </motion.div>
  );
}