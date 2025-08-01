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
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onSectionChange('hub')}
          >
            <div className="text-2xl">⚡</div>
            <div className="font-orbitron font-bold text-xl gradient-text">
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
                transition={{ delay: 0.2 + index * 0.05 }}
                onClick={() => onSectionChange(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-inter font-medium transition-all duration-200 ${
                  currentSection === section.id
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{section.icon}</span>
                <span>{section.label}</span>
              </motion.button>
            ))}
          </nav>
          
          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://www.youtube.com/@G0TZEMAXWIN', '_blank')}
              className="border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white"
            >
              <span className="text-lg">📺</span>
              <span>YouTube</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://discord.gg/SFkyxGxKvG', '_blank')}
              className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500 hover:text-white"
            >
              <span className="text-lg">💬</span>
              <span>Discord</span>
            </Button>
            <Button
              variant="twitter"
              size="sm"
              onClick={() => window.open('https://x.com/G0TZEWEB3', '_blank')}
            >
              <span>🐦</span>
              <span>X</span>
            </Button>
            <Button
              variant="kick"
              size="sm"
              onClick={() => window.open('https://kick.com/G0TZEWIN', '_blank')}
            >
              <span>🎥</span>
              <span>KICK</span>
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
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900/90 backdrop-blur-xl border border-white/10 rounded-b-lg mt-2"
          >
            <div className="flex flex-col space-y-1 p-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    onSectionChange(section.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-inter font-medium transition-all duration-200 ${
                    currentSection === section.id
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{section.icon}</span>
                  <span>{section.label}</span>
                </button>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://www.youtube.com/@G0TZEMAXWIN', '_blank')}
                  className="border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white"
                >
                  📺 YouTube
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://discord.gg/SFkyxGxKvG', '_blank')}
                  className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500 hover:text-white"
                >
                  💬 Discord
                </Button>
                <Button
                  variant="twitter"
                  size="sm"
                  onClick={() => window.open('https://x.com/G0TZEWEB3', '_blank')}
                  className="flex-1"
                >
                  🐦 X
                </Button>
                <Button
                  variant="kick"
                  size="sm"
                  onClick={() => window.open('https://kick.com/G0TZEWIN', '_blank')}
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