import React from 'react';
import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-950 relative overflow-hidden">
      {/* Ultra Premium Animated background */}
      <div className="absolute inset-0">
        <div className="floating-orb w-[600px] h-[600px] top-1/4 left-1/4 bg-primary-500/30" />
        <div className="floating-orb-accent w-[500px] h-[500px] bottom-1/4 right-1/4 bg-accent-500/25" style={{ animationDelay: '3s' }} />
        <div className="floating-orb-secondary w-[400px] h-[400px] top-1/2 right-1/3 bg-secondary-500/20" style={{ animationDelay: '6s' }} />
        <div className="floating-orb-plasma w-[350px] h-[350px] bottom-1/3 left-1/2 bg-neon-pink/15" style={{ animationDelay: '9s' }} />
        
        {/* Ultra Matrix rain */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-primary-500 via-accent-500 to-transparent matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Ultra Cyber particles */}
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#ff0080', '#0080ff', '#00ff80', '#ffff00', '#ff8000', '#8000ff'][Math.floor(Math.random() * 6)]
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 2, 1],
              rotateZ: [0, 360, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="text-center relative z-10">
        {/* Main logo animation Ultra Premium */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{ 
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="text-[12rem] mb-16 neon-text-ultra gradient-text-plasma animate-quantum"
        >
          ⚡
        </motion.div>
        
        {/* Loading text Ultra Premium */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-orbitron font-black gradient-text-plasma neon-text-ultra mb-8 animate-quantum">
            G0TZE AFFILIATES
          </h1>
          <p className="text-3xl text-gray-300 font-inter font-light">
            Loading premium Web3 casino hub...
          </p>
        </motion.div>
        
        {/* Ultra Premium Progress bar */}
        <div className="relative mb-16">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 3.5, ease: "easeInOut" }}
            className="w-[500px] h-4 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 mx-auto rounded-full shadow-neon-xl animate-gradient-x"
          />
          <div className="absolute inset-0 w-[500px] h-4 mx-auto rounded-full bg-gradient-to-r from-primary-500/30 via-accent-500/30 to-secondary-500/30 blur-2xl animate-glow-pulse" />
        </div>
        
        {/* Loading dots with ultra intense effects */}
        <div className="flex justify-center space-x-6 mb-12">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 3, 1],
                opacity: [0.6, 1, 0.6],
                rotateZ: [0, 360, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4
              }}
              className="w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-neon-lg animate-cyber-glitch"
            />
          ))}
        </div>
        
        {/* Status text Ultra Premium */}
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-2xl text-gray-400 font-inter neon-text"
        >
          Initializing quantum casino protocols...
        </motion.p>
        
        {/* Ultra Premium Loading percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8"
        >
          <motion.span
            animate={{ 
              textShadow: [
                '0 0 10px #ff0080',
                '0 0 20px #0080ff',
                '0 0 30px #00ff80',
                '0 0 20px #ffff00',
                '0 0 10px #ff0080'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-4xl font-orbitron font-black gradient-text-plasma"
          >
            Loading...
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}