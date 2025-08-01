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
    // Simulate initial loading with realistic timing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
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
      {/* Global background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/10 via-accent-500/5 to-transparent rounded-full blur-3xl animate-pulse" />
        </div>
        
        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
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
      
      {/* Header */}
      <Header currentSection={currentSection} onSectionChange={setCurrentSection} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 glass-effect border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-4xl animate-glow">⚡</div>
              <div className="font-orbitron font-black text-3xl gradient-text neon-text">
                G0TZE AFFILIATES
              </div>
            </div>
            <p className="text-xl text-gray-300 font-inter mb-8 max-w-2xl mx-auto">
              Premium Web3 casino affiliate program distributing <span className="gradient-text font-bold">$3,000 monthly</span> to top players.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="https://x.com/G0TZEWEB3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors text-lg font-inter"
              >
                <span className="text-2xl">🐦</span>
                <span>@G0TZEWEB3</span>
              </a>
              <a
                href="https://kick.com/G0TZEWIN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-accent-400 transition-colors text-lg font-inter"
              >
                <span className="text-2xl">🎥</span>
                <span>G0TZEWIN</span>
              </a>
            </div>
            <div className="text-sm text-gray-500 font-inter">
              © 2025 G0TZE AFFILIATES. All rights reserved. | Built with ⚡ by G0TZE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;