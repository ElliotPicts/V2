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
  const baseClasses = "relative overflow-hidden rounded-xl backdrop-blur-xl transition-all duration-200";
  const cardClasses = "glass-dark";
  const hoverClasses = hover ? "hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10" : "";
  const glowClasses = glow ? "border-primary-500/50 shadow-lg shadow-primary-500/20" : "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: hover ? 1.02 : 1 }}
      className={clsx(
        baseClasses, 
        cardClasses, 
        hoverClasses, 
        glowClasses,
        className
      )}
    >
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pointer-events-none" />
      )}
    </motion.div>
  );
}