import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { getStatistics } from '../../data/mockData';

interface HubSectionProps {
  onSectionChange: (section: string) => void;
}

export function HubSection({ onSectionChange }: HubSectionProps) {
  const stats = getStatistics();
  
  return (
    <div className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-96 h-96 top-1/4 left-1/4" />
        <div className="floating-orb w-80 h-80 bottom-1/4 right-1/4" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 leading-tight">
              <span className="gradient-text block mb-2">
                $3,000
              </span>
              <span className="text-white text-3xl md:text-5xl block">
                distributed every month
              </span>
            </h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Join G0TZE's gang of <span className="gradient-text font-semibold">elite gamblers</span>
            </motion.p>
            <motion.p 
              className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Compete for real cash rewards on premium Web3 casino platforms
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button
                size="xl"
                variant="primary"
                glow
                onClick={() => onSectionChange('platforms')}
                className="min-w-[280px]"
              >
                <span className="text-xl mr-2">🚀</span>
                START PLAYING NOW
              </Button>
              <Button
                size="xl"
                variant="outline"
                onClick={() => onSectionChange('leaderboard')}
                className="min-w-[240px]"
              >
                <span className="text-xl mr-2">🏆</span>
                VIEW LEADERBOARD
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Card glow>
              <div className="text-center">
                <div className="text-3xl mb-3">💰</div>
                <div className="text-2xl font-orbitron font-bold text-secondary-400 mb-1">
                  $<AnimatedCounter value={stats.totalVolume} decimals={0} />
                </div>
                <div className="text-gray-400 font-inter text-sm">Total Volume This Month</div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card>
              <div className="text-center">
                <div className="text-3xl mb-3">👥</div>
                <div className="text-2xl font-orbitron font-bold text-primary-400 mb-1">
                  <AnimatedCounter value={stats.activeAffiliates} />
                </div>
                <div className="text-gray-400 font-inter text-sm">Active Players</div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card>
              <div className="text-center">
                <div className="text-3xl mb-3">⏰</div>
                <div className="text-2xl font-orbitron font-bold text-accent-400 mb-1">
                  <AnimatedCounter value={stats.daysUntilReset} />
                </div>
                <div className="text-gray-400 font-inter text-sm">Days Until Reset</div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card>
              <div className="text-center">
                <div className="text-3xl mb-3">🔥</div>
                <div className="text-2xl font-orbitron font-bold text-red-400 mb-1">
                  $<AnimatedCounter value={stats.biggestWin} decimals={0} />
                </div>
                <div className="text-gray-400 font-inter text-sm">Biggest Win</div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* How it Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Simple. Play on our partner platforms and climb the leaderboard to win <span className="gradient-text font-semibold">real money</span>.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-orbitron font-bold gradient-text mb-3">
                  1. Choose Platform
                </h3>
                <p className="text-gray-300 font-inter leading-relaxed">
                  Pick from <span className="text-primary-400 font-medium">Rugs.fun</span>, <span className="text-accent-400 font-medium">Solpump</span>, <span className="text-secondary-400 font-medium">BCGame</span>, or <span className="text-purple-400 font-medium">Rain.gg</span> using our affiliate links.
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">🎰</div>
                <h3 className="text-xl font-orbitron font-bold text-primary-400 mb-3">
                  2. Start Playing
                </h3>
                <p className="text-gray-300 font-inter leading-relaxed">
                  Every dollar you wager is <span className="text-accent-400 font-medium">tracked automatically</span> and added to your monthly total in real-time.
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-orbitron font-bold gradient-text mb-3">
                  3. Win Rewards
                </h3>
                <p className="text-gray-300 font-inter leading-relaxed">
                  Top 3 players each month split <span className="gradient-text font-semibold text-lg">$3,000</span>. Reset monthly for fair competition.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}