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
  ultra?: boolean;
  plasma?: boolean;
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
  intense = false,
  ultra = false,
  plasma = false
}: CardProps) {
  const baseClasses = "relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-1000 group";
  
  let cardClasses = "glass-dark border border-dark-700/50";
  
  if (ultra) {
    cardClasses = "glass-ultra border border-primary-500/60 shadow-plasma";
  } else if (premium) {
    cardClasses = "premium-card";
  } else if (cyber) {
    cardClasses = "cyber-card";
  } else if (neon) {
    cardClasses = "neon-border bg-dark-900/80 shadow-hologram";
  } else if (plasma) {
    cardClasses = "glass-ultra border border-neon-pink/60 shadow-plasma";
  } else if (glow) {
    cardClasses = "glass-dark border border-primary-500/50 shadow-cyber";
  }
  
  const hoverClasses = hover ? "hover:border-primary-500/80 hover:shadow-neon-xl hover:scale-105 hover:-translate-y-3" : "";
  const hologramClasses = hologram ? "hologram-effect" : "";
  const intenseClasses = intense ? "animate-energy-pulse" : "";
  const ultraClasses = ultra ? "mega-glow animate-quantum" : "";
  const plasmaClasses = plasma ? "animate-rainbow" : "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05, 
        rotateX: 8, 
        rotateY: 4,
        transition: { duration: 0.4 }
      }}
      className={clsx(
        baseClasses, 
        cardClasses, 
        hoverClasses, 
        hologramClasses,
        intenseClasses,
        ultraClasses,
        plasmaClasses,
        className
      )}
    >
      {/* Ultra Premium Data stream background */}
      <div className="data-stream" />
      
      {/* Hologram scan lines */}
      {hologram && (
        <div className="absolute inset-0 hologram-lines opacity-30" />
      )}
      
      {/* Ultra Premium Floating orbs */}
      {ultra && (
        <>
          <div className="floating-orb w-40 h-40 -top-20 -right-20 bg-primary-500/30" />
          <div className="floating-orb-accent w-32 h-32 -bottom-16 -left-16 bg-accent-500/30" style={{ animationDelay: '2s' }} />
          <div className="floating-orb-secondary w-24 h-24 top-1/2 -right-12 bg-secondary-500/30" style={{ animationDelay: '4s' }} />
          <div className="floating-orb-plasma w-28 h-28 bottom-1/4 left-1/4 bg-neon-pink/20" style={{ animationDelay: '6s' }} />
        </>
      )}
      
      {/* Premium floating orbs */}
      {premium && (
        <>
          <div className="floating-orb w-32 h-32 -top-16 -right-16 bg-primary-500/25" />
          <div className="floating-orb-accent w-24 h-24 -bottom-12 -left-12 bg-accent-500/25" style={{ animationDelay: '2s' }} />
          <div className="floating-orb-secondary w-20 h-20 top-1/2 -right-10 bg-secondary-500/25" style={{ animationDelay: '4s' }} />
        </>
      )}
      
      {/* Cyber particles */}
      {cyber && (
        <>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/80 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </>
      )}
      
      {/* Ultra particles */}
      {ultra && (
        <>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
                backgroundColor: ['#ff0080', '#0080ff', '#00ff80', '#ffff00', '#ff8000'][Math.floor(Math.random() * 5)]
              }}
            />
          ))}
        </>
      )}
      
      {/* Energy border effect */}
      {intense && (
        <div className="absolute inset-0 rounded-3xl energy-border opacity-80" />
      )}
      
      {/* Plasma border effect */}
      {plasma && (
        <div className="absolute inset-0 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-yellow opacity-20 animate-rainbow rounded-3xl" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {children}
      </div>
      
      {/* Ultra Glow overlay */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/15 via-transparent to-accent-500/15 pointer-events-none group-hover:from-primary-500/25 group-hover:to-accent-500/25 transition-all duration-1000" />
      )}
      
      {/* Neon overlay */}
      {neon && (
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-neon-cyan/10 to-neon-pink/10 pointer-events-none animate-gradient-x" />
      )}
      
      {/* Ultra overlay */}
      {ultra && (
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-neon-cyan/10 via-neon-yellow/10 to-neon-purple/10 pointer-events-none animate-plasma" />
      )}
      
      {/* Matrix rain effect */}
      {cyber && (
        <div className="matrix-bg">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}