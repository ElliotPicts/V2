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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
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
      {/* Subtle Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/10 via-accent-500/5 to-transparent rounded-full blur-3xl" />
        </div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 glass-dark border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              className="flex items-center justify-center space-x-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl">⚡</div>
              <div className="font-orbitron font-bold text-2xl gradient-text">
                G0TZE AFFILIATES
              </div>
            </motion.div>
            <motion.p 
              className="text-lg text-gray-300 font-inter mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Premium Web3 casino affiliate program distributing <span className="gradient-text font-semibold">$3,000 monthly</span> to elite players.
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-6 mb-8 flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <a
                href="https://www.youtube.com/@G0TZEMAXWIN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors duration-200 text-lg font-inter font-medium"
              >
                <span className="text-2xl">📺</span>
                <span>@G0TZEMAXWIN</span>
              </a>
              <a
                href="https://discord.gg/SFkyxGxKvG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-lg font-inter font-medium"
              >
                <span className="text-2xl">💬</span>
                <span>Discord</span>
              </a>
              <a
                href="https://x.com/G0TZEWEB3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 text-lg font-inter font-medium"
              >
                <span className="text-2xl">🐦</span>
                <span>@G0TZEWEB3</span>
              </a>
              <a
                href="https://kick.com/G0TZEWIN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-kick transition-colors duration-200 text-lg font-inter font-medium"
              >
                <span className="text-2xl">🎥</span>
                <span>G0TZEWIN LIVE</span>
              </a>
            </motion.div>
            <motion.div 
              className="text-sm text-gray-500 font-inter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              © 2025 G0TZE AFFILIATES. All rights reserved.
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;