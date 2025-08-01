import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  glow?: boolean;
  hover?: boolean;
  premium?: boolean;
  neon?: boolean;
}

export function Card({ className, children, glow = false, hover = true, premium = false, neon = false }: CardProps) {
  const baseClasses = "relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500";
  
  let cardClasses = "bg-dark-800/40 border border-dark-700/50";
  
  if (premium) {
    cardClasses = "premium-card";
  } else if (neon) {
    cardClasses = "neon-border bg-dark-900/60";
  } else if (glow) {
    cardClasses = "bg-dark-800/60 border border-primary-500/30 shadow-lg shadow-primary-500/20";
  }
  
  const hoverClasses = hover ? "hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 hover:scale-[1.02] hover:-translate-y-1" : "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx(baseClasses, cardClasses, hoverClasses, className)}
    >
      {/* Data stream background */}
      <div className="data-stream" />
      
      {/* Floating orbs */}
      {premium && (
        <>
          <div className="floating-orb w-32 h-32 -top-16 -right-16 bg-primary-500/20" />
          <div className="floating-orb w-24 h-24 -bottom-12 -left-12 bg-accent-500/20" style={{ animationDelay: '2s' }} />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Glow overlay */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pointer-events-none" />
      )}
    </motion.div>
  );
}