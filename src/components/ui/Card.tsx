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
  cyber?: boolean;
  hologram?: boolean;
  intense?: boolean;
}

export function Card({ 
  className, 
  children, 
  glow = false, 
  hover = true, 
  premium = false, 
  neon = false, 
  cyber = false,
  hologram = false,
  intense = false
}: CardProps) {
  const baseClasses = "relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-700 group";
  
  let cardClasses = "glass-dark border border-dark-700/30";
  
  if (premium) {
    cardClasses = "premium-card";
  } else if (cyber) {
    cardClasses = "cyber-card";
  } else if (neon) {
    cardClasses = "neon-border bg-dark-900/60 shadow-hologram";
  } else if (glow) {
    cardClasses = "glass-dark border border-primary-500/40 shadow-cyber";
  }
  
  const hoverClasses = hover ? "hover:border-primary-500/60 hover:shadow-neon-lg hover:scale-[1.02] hover:-translate-y-2" : "";
  const hologramClasses = hologram ? "hologram-effect" : "";
  const intenseClasses = intense ? "animate-energy-pulse" : "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.02, 
        rotateX: 5, 
        rotateY: 2,
        transition: { duration: 0.3 }
      }}
      className={clsx(
        baseClasses, 
        cardClasses, 
        hoverClasses, 
        hologramClasses,
        intenseClasses,
        className
      )}
    >
      {/* Data stream background */}
      <div className="data-stream" />
      
      {/* Hologram scan lines */}
      {hologram && (
        <div className="absolute inset-0 hologram-lines opacity-20" />
      )}
      
      {/* Floating orbs */}
      {premium && (
        <>
          <div className="floating-orb w-32 h-32 -top-16 -right-16 bg-primary-500/20" />
          <div className="floating-orb-accent w-24 h-24 -bottom-12 -left-12 bg-accent-500/20" style={{ animationDelay: '2s' }} />
          <div className="floating-orb-secondary w-20 h-20 top-1/2 -right-10 bg-secondary-500/20" style={{ animationDelay: '4s' }} />
        </>
      )}
      
      {/* Cyber particles */}
      {cyber && (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/60 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </>
      )}
      
      {/* Energy border effect */}
      {intense && (
        <div className="absolute inset-0 rounded-2xl energy-border opacity-60" />
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Glow overlay */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 pointer-events-none group-hover:from-primary-500/20 group-hover:to-accent-500/20 transition-all duration-700" />
      )}
      
      {/* Neon overlay */}
      {neon && (
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-neon-cyan/5 to-neon-pink/5 pointer-events-none animate-gradient-x" />
      )}
      
      {/* Matrix rain effect */}
      {cyber && (
        <div className="matrix-bg">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}