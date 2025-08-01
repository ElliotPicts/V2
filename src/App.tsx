import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { HubSection } from './components/sections/HubSection';
import { LeaderboardSection } from './components/sections/LeaderboardSection';
import { PlatformsSection } from './components/sections/PlatformsSection';
import { WinnersSection } from './components/sections/WinnersSection';
import { StatsSection } from './components/sections/StatsSection';
import { LoadingSpinner } from './components/ui/LoadingSpinner';

function App() {
  const [currentSection, setCurrentSection] = useState('hub');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Ultra premium loading experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  const renderSection = () => {
    switch (currentSection) {
      case 'hub':
        return <HubSection onSectionChange={setCurrentSection} />;
      case 'leaderboard':
        return <LeaderboardSection />;
      case 'platforms':
        return <PlatformsSection />;
      case 'winners':
        return <WinnersSection />;
      case 'stats':
        return <StatsSection />;
      default:
        return <HubSection onSectionChange={setCurrentSection} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-dark-950 text-white relative overflow-hidden">
      {/* Ultra Premium Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated mesh gradient ultra premium */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/40 via-transparent to-accent-900/40 animate-gradient-x" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] bg-gradient-radial from-primary-500/20 via-accent-500/10 to-transparent rounded-full blur-3xl animate-glow-pulse" />
        </div>
        
        {/* Ultra Premium Floating particles */}
        {Array.from({ length: 120 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#ff0080', '#0080ff', '#00ff80', '#ffff00', '#ff8000', '#8000ff'][Math.floor(Math.random() * 6)]
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 2.5, 1],
              rotateZ: [0, 360, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
        
        {/* Ultra Cyber grid overlay */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
        
        {/* Ultra Energy flow lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary-400/80 to-transparent"
              style={{
                top: `${15 + i * 12}%`,
                width: '300%',
                left: '-150%'
              }}
              animate={{
                x: ['0%', '100%']
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Header */}
      <Header currentSection={currentSection} onSectionChange={setCurrentSection} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -50, rotateX: 15 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Ultra Premium Footer */}
      <footer className="relative z-10 glass-ultra border-t border-white/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              className="flex items-center justify-center space-x-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="text-6xl animate-quantum">⚡</div>
              <div className="font-orbitron font-black text-5xl gradient-text-plasma neon-text-ultra">
                G0TZE AFFILIATES
              </div>
            </motion.div>
            <motion.p 
              className="text-3xl text-gray-300 font-inter mb-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Premium Web3 casino affiliate program distributing <span className="gradient-text-plasma font-black text-4xl neon-text-intense">$3,000 monthly</span> to elite players.
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-16 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <a
                href="https://x.com/G0TZEWEB3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-400 hover:text-black transition-all duration-700 text-2xl font-inter font-bold group"
              >
                <span className="text-4xl group-hover:animate-cyber-glitch">🐦</span>
                <span className="group-hover:neon-text">@G0TZEWEB3</span>
              </a>
              <a
                href="https://kick.com/G0TZEWIN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-400 hover:text-kick-400 transition-all duration-700 text-2xl font-inter font-bold group"
              >
                <span className="text-4xl group-hover:animate-quantum">🎥</span>
                <span className="group-hover:neon-text-intense">G0TZEWIN LIVE</span>
              </a>
            </motion.div>
            <motion.div 
              className="text-lg text-gray-500 font-inter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              © 2025 G0TZE AFFILIATES. All rights reserved. | Built with ⚡ by G0TZE
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;