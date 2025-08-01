import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  glow?: boolean;
  hover?: boolean;
  gaming?: boolean;
  ultra?: boolean;
  intense?: boolean;
  hologram?: boolean;
}

export function Card({ 
  className, 
  children, 
  glow = false, 
  hover = true, 
  gaming = false, 
  ultra = false,
  intense = false,
  hologram = false
}: CardProps) {
  const baseClasses = "relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-1000 group";
  
  let cardClasses = "glass-dark border border-dark-700/50";
  
  if (ultra) {
    cardClasses = "ultra-card";
  } else if (gaming) {
    cardClasses = "gaming-card";
  } else if (glow) {
    cardClasses = "glass-dark border border-purple-500/50 shadow-cyber";
  }
  
  const hoverClasses = hover ? "hover:border-purple-500/80 hover:shadow-neon-xl hover:scale-105 hover:-translate-y-3" : "";
  const hologramClasses = hologram ? "hologram-effect" : "";
  const intenseClasses = intense ? "animate-energy-pulse" : "";
  const ultraClasses = ultra ? "mega-glow animate-quantum" : "";
  
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
          <div className="floating-orb w-40 h-40 -top-20 -right-20 bg-purple-500/30" />
          <div className="floating-orb-gaming w-32 h-32 -bottom-16 -left-16 bg-pink-500/30" style={{ animationDelay: '2s' }} />
          <div className="floating-orb-ultra w-24 h-24 top-1/2 -right-12 bg-blue-500/30" style={{ animationDelay: '4s' }} />
        </>
      )}
      
      {/* Gaming floating orbs */}
      {gaming && (
        <>
          <div className="floating-orb w-32 h-32 -top-16 -right-16 bg-purple-500/25" />
          <div className="floating-orb-gaming w-24 h-24 -bottom-12 -left-12 bg-pink-500/25" style={{ animationDelay: '2s' }} />
          <div className="floating-orb-ultra w-20 h-20 top-1/2 -right-10 bg-blue-500/25" style={{ animationDelay: '4s' }} />
        </>
      )}
      
      {/* Gaming particles */}
      {gaming && (
        <>
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
                backgroundColor: ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981'][Math.floor(Math.random() * 4)]
              }}
            />
          ))}
        </>
      )}
      
      {/* Ultra particles */}
      {ultra && (
        <>
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
                backgroundColor: ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 6)]
              }}
            />
          ))}
        </>
      )}
      
      {/* Energy border effect */}
      {intense && (
        <div className="absolute inset-0 rounded-3xl energy-border opacity-80" />
      )}
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {children}
      </div>
      
      {/* Ultra Glow overlay */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-transparent to-pink-500/15 pointer-events-none group-hover:from-purple-500/25 group-hover:to-pink-500/25 transition-all duration-1000" />
      )}
      
      {/* Gaming overlay */}
      {gaming && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 pointer-events-none animate-gradient-x" />
      )}
      
      {/* Ultra overlay */}
      {ultra && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 via-blue-500/10 to-green-500/10 pointer-events-none animate-plasma" />
      )}
      
      {/* Matrix rain effect */}
      {gaming && (
        <div className="matrix-bg">
          {Array.from({ length: 10 }).map((_, i) => (
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