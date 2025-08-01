import React from 'react';
import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="floating-orb w-96 h-96 top-1/4 left-1/4 bg-primary-500/20" />
        <div className="floating-orb w-80 h-80 bottom-1/4 right-1/4 bg-accent-500/20" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-64 h-64 top-1/2 right-1/3 bg-secondary-500/20" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="text-center relative z-10">
        {/* Main logo animation */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="text-8xl mb-8 neon-text"
        >
          ⚡
        </motion.div>
        
        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-orbitron font-black gradient-text neon-text mb-4">
            G0TZE AFFILIATES
          </h1>
          <p className="text-xl text-gray-300 font-inter">
            Loading premium Web3 casino hub...
          </p>
        </motion.div>
        
        {/* Progress bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 2, ease: "easeInOut" }}
          className="w-80 h-2 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 mx-auto rounded-full shadow-neon"
        />
        
        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-3 h-3 bg-primary-500 rounded-full shadow-neon"
            />
          ))}
        </div>
      </div>
    </div>
  );
}