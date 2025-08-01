import React from 'react';
import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-950 relative overflow-hidden">
      {/* Ultra Premium Animated background */}
      <div className="absolute inset-0">
        <div className="floating-orb w-96 h-96 top-1/4 left-1/4 bg-primary-500/20" />
        <div className="floating-orb-accent w-80 h-80 bottom-1/4 right-1/4 bg-accent-500/20" style={{ animationDelay: '2s' }} />
        <div className="floating-orb-secondary w-64 h-64 top-1/2 right-1/3 bg-secondary-500/20" style={{ animationDelay: '4s' }} />
        
        {/* Matrix rain */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-primary-500 to-transparent matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Cyber particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="text-center relative z-10">
        {/* Main logo animation */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="text-9xl mb-12 neon-text-intense gradient-text-rainbow animate-cyber-glitch"
        >
          ⚡
        </motion.div>
        
        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-orbitron font-black gradient-text-rainbow neon-text-intense mb-6 animate-hologram">
            G0TZE AFFILIATES
          </h1>
          <p className="text-2xl text-gray-300 font-inter font-light">
            Loading premium Web3 casino hub...
          </p>
        </motion.div>
        
        {/* Ultra Premium Progress bar */}
        <div className="relative mb-12">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 2.5, ease: "easeInOut" }}
            className="w-96 h-3 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 mx-auto rounded-full shadow-neon-lg animate-gradient-x"
          />
          <div className="absolute inset-0 w-96 h-3 mx-auto rounded-full bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/20 blur-xl animate-glow-pulse" />
        </div>
        
        {/* Loading dots with intense effects */}
        <div className="flex justify-center space-x-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5],
                rotateZ: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
              className="w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-neon animate-cyber-glitch"
            />
          ))}
        </div>
        
        {/* Status text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-lg text-gray-400 font-inter mt-8 neon-text"
        >
          Initializing quantum casino protocols...
        </motion.p>
      </div>
    </div>
  );
}