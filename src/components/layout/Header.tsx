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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <div className="text-4xl animate-float">⚡</div>
            <div className="font-orbitron font-black text-2xl gradient-text neon-text">
              G0TZE AFFILIATES
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSectionChange(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-orbitron font-semibold transition-all duration-300 ${
                  currentSection === section.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-neon'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                <span className="text-xl">{section.icon}</span>
                <span>{section.label}</span>
              </motion.button>
            ))}
          </nav>
          
          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open('https://x.com/G0TZEWEB3', '_blank')}
            >
              <span className="text-lg">🐦</span>
              <span>Twitter</span>
            </Button>
            <Button
              size="sm"
              variant="neon"
              onClick={() => window.open('https://kick.com/G0TZEWIN', '_blank')}
              glow
            >
              <span className="text-lg">🎥</span>
              <span>LIVE</span>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-white/10 py-4"
          >
            <div className="flex flex-col space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    onSectionChange(section.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-orbitron font-semibold transition-all duration-300 ${
                    currentSection === section.id
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-xl">{section.icon}</span>
                  <span>{section.label}</span>
                </button>
              ))}
              <div className="flex space-x-2 px-4 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open('https://x.com/G0TZEWEB3', '_blank')}
                >
                  🐦 Twitter
                </Button>
                <Button
                  size="sm"
                  variant="neon"
                  onClick={() => window.open('https://kick.com/G0TZEWIN', '_blank')}
                  glow
                >
                  🎥 LIVE
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}