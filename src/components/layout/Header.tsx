import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export function Header({ currentSection, onSectionChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const sections = [
    { id: 'hub', label: 'Hub', icon: '🏠' },
    { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
    { id: 'platforms', label: 'Platforms', icon: '🎰' },
    { id: 'winners', label: 'Winners', icon: '👑' },
    { id: 'stats', label: 'Stats', icon: '📈' }
  ];
  
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gaming-nav relative flex items-center justify-between h-24 rounded-b-3xl">
          {/* Logo Ultra Premium */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-6 group cursor-pointer relative z-10"
            onClick={() => onSectionChange('hub')}
          >
            <div className="text-5xl animate-gaming-glitch group-hover:animate-quantum">⚡</div>
            <div className="font-orbitron font-black text-3xl gradient-text-ultra neon-text-ultra group-hover:animate-electric transition-all duration-500">
              G0TZE AFFILIATES
            </div>
          </motion.div>
          
          {/* Desktop Navigation Ultra Premium */}
          <nav className="hidden md:flex items-center space-x-2 relative z-10">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateX: 8,
                  rotateY: 4
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSectionChange(section.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-orbitron font-bold transition-all duration-700 relative overflow-hidden group ${
                  currentSection === section.id
                    ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white shadow-neon-xl border border-purple-400/60'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-purple-500/50 hover:shadow-neon-lg'
                }`}
              >
                {/* Ultra Premium Hologram effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                
                <span className="text-2xl group-hover:animate-float relative z-10">{section.icon}</span>
                <span className="relative z-10 text-lg">{section.label}</span>
                
                {/* Active indicator ultra premium */}
                {currentSection === section.id && (
                  <>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-pink-400 rounded-full animate-glow-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-gradient-x blur-xl" />
                  </>
                )}
                
                {/* Gaming particles */}
                <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-float opacity-60" />
                <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
              </motion.button>
            ))}
          </nav>
          
          {/* Social Links Ultra Premium */}
          <div className="hidden md:flex items-center space-x-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                size="lg"
                variant="twitter"
                onClick={() => window.open('https://x.com/G0TZEWEB3', '_blank')}
                className="shadow-cyber hover:shadow-neon-xl"
                glow
              >
                <span className="text-2xl animate-float">🐦</span>
                <span className="font-black">X / TWITTER</span>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
            >
              <Button
                size="lg"
                variant="kick"
                onClick={() => window.open('https://kick.com/G0TZEWIN', '_blank')}
                glow
                intense
                ultra
                className="shadow-ultra hover:shadow-mega-glow animate-glow-pulse"
              >
                <span className="text-2xl animate-gaming-glitch">🎥</span>
                <span className="neon-text-intense font-black">KICK LIVE</span>
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden relative z-10">
            <motion.button
              whileHover={{ scale: 1.2, rotateZ: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-4 rounded-2xl hover:bg-white/10 transition-all duration-500 border border-transparent hover:border-purple-500/50 hover:shadow-neon-lg"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation Ultra Premium */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, rotateX: -90 }}
            animate={{ opacity: 1, height: 'auto', rotateX: 0 }}
            exit={{ opacity: 0, height: 0, rotateX: -90 }}
            className="md:hidden border-t border-white/20 py-6 gaming-nav rounded-b-3xl mt-2"
          >
            <div className="flex flex-col space-y-3 relative z-10">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    onSectionChange(section.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-4 px-6 py-4 rounded-2xl font-orbitron font-bold transition-all duration-700 relative overflow-hidden group ${
                    currentSection === section.id
                      ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white shadow-neon-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-purple-500/50'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                  <span className="text-2xl relative z-10">{section.icon}</span>
                  <span className="relative z-10 text-lg">{section.label}</span>
                </motion.button>
              ))}
              <div className="flex space-x-3 px-6 pt-6 border-t border-white/20">
                <Button
                  size="md"
                  variant="twitter"
                  onClick={() => window.open('https://x.com/G0TZEWEB3', '_blank')}
                  className="flex-1"
                  glow
                >
                  🐦 X
                </Button>
                <Button
                  size="md"
                  variant="kick"
                  onClick={() => window.open('https://kick.com/G0TZEWIN', '_blank')}
                  glow
                  intense
                  className="flex-1"
                >
                  🎥 KICK
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}