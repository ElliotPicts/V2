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
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4 group cursor-pointer"
            onClick={() => onSectionChange('hub')}
          >
            <div className="text-4xl animate-float group-hover:animate-cyber-glitch">⚡</div>
            <div className="font-orbitron font-black text-2xl gradient-text neon-text group-hover:neon-text-intense transition-all duration-300">
              G0TZE AFFILIATES
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSectionChange(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-orbitron font-bold transition-all duration-500 relative overflow-hidden group ${
                  currentSection === section.id
                    ? 'bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 text-white shadow-neon-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-primary-500/30'
                }`}
              >
                {/* Hologram effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
                
                <span className="text-xl group-hover:animate-float relative z-10">{section.icon}</span>
                <span className="relative z-10">{section.label}</span>
                
                {/* Active indicator */}
                {currentSection === section.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-secondary-400 rounded-full animate-glow-pulse" />
                )}
              </motion.button>
            ))}
          </nav>
          
          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="sm"
                variant="twitter"
                onClick={() => window.open('https://x.com/G0TZEWEB3', '_blank')}
                className="shadow-cyber hover:shadow-neon-lg"
              >
                <span className="text-lg">🐦</span>
                <span>Twitter</span>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                size="sm"
                variant="kick"
                onClick={() => window.open('https://kick.com/G0TZEWIN', '_blank')}
                glow
                cyber
                className="shadow-cyber hover:shadow-neon-xl animate-glow-pulse"
              >
                <span className="text-lg animate-float">🎥</span>
                <span className="neon-text">LIVE</span>
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-primary-500/30"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 py-4 glass-dark rounded-b-2xl"
          >
            <div className="flex flex-col space-y-2">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    onSectionChange(section.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-orbitron font-bold transition-all duration-500 relative overflow-hidden group ${
                    currentSection === section.id
                      ? 'bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 text-white shadow-neon'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-primary-500/30'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="text-xl relative z-10">{section.icon}</span>
                  <span className="relative z-10">{section.label}</span>
                </motion.button>
              ))}
              <div className="flex space-x-2 px-4 pt-4 border-t border-white/10">
                <Button
                  size="sm"
                  variant="twitter"
                  onClick={() => window.open('https://x.com/G0TZEWEB3', '_blank')}
                  className="flex-1"
                >
                  🐦 Twitter
                </Button>
                <Button
                  size="sm"
                  variant="kick"
                  onClick={() => window.open('https://kick.com/G0TZEWIN', '_blank')}
                  glow
                  className="flex-1"
                >
                  🎥 LIVE
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}