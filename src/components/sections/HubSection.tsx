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
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="floating-orb w-96 h-96 top-1/4 left-1/4 bg-primary-500/10" />
        <div className="floating-orb w-80 h-80 bottom-1/4 right-1/4 bg-accent-500/10" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-64 h-64 top-1/2 right-1/3 bg-secondary-500/10" style={{ animationDelay: '4s' }} />
        
        {/* Matrix rain effect */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-primary-500 to-transparent matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-8 leading-tight">
              <span className="gradient-text neon-text block mb-4">
                $3,000
              </span>
              <span className="text-white text-3xl md:text-5xl block">
                distributed every month 💸
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-4 font-inter font-light">
              Join G0TZE's gang of <span className="gradient-text font-semibold">top gamblers</span>
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-inter">
              Compete for real cash rewards on premium Web3 casino platforms
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="xl"
                variant="neon"
                glow
                cyber
                onClick={() => onSectionChange('platforms')}
                className="text-2xl px-12 py-6 min-w-[280px]"
              >
                <span className="text-2xl mr-3">🚀</span>
                START PLAYING NOW
              </Button>
              <Button
                size="xl"
                variant="outline"
                onClick={() => onSectionChange('leaderboard')}
                className="text-xl px-10 py-5 min-w-[240px]"
              >
                <span className="text-xl mr-3">🏆</span>
                VIEW LEADERBOARD
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card premium glow>
              <div className="text-center">
                <div className="text-5xl mb-4 animate-bounce-slow">💰</div>
                <div className="text-3xl font-orbitron font-black gradient-text mb-2">
                  $<AnimatedCounter value={stats.totalVolume} decimals={0} />
                </div>
                <div className="text-gray-400 font-inter font-medium">Total Volume This Month</div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card neon>
              <div className="text-center">
                <div className="text-5xl mb-4 animate-wiggle">👥</div>
                <div className="text-3xl font-orbitron font-black text-primary-400 neon-text mb-2">
                  <AnimatedCounter value={stats.activeAffiliates} />
                </div>
                <div className="text-gray-400 font-inter font-medium">Active Affiliates</div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card premium>
              <div className="text-center">
                <div className="text-5xl mb-4 animate-spin-slow">⏰</div>
                <div className="text-3xl font-orbitron font-black text-accent-400 neon-text mb-2">
                  <AnimatedCounter value={stats.daysUntilReset} />
                </div>
                <div className="text-gray-400 font-inter font-medium">Days Until Reset</div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card glow>
              <div className="text-center">
                <div className="text-5xl mb-4 animate-float">🔥</div>
                <div className="text-3xl font-orbitron font-black text-red-400 neon-text mb-2">
                  $<AnimatedCounter value={stats.biggestWin} decimals={0} />
                </div>
                <div className="text-gray-400 font-inter font-medium">Biggest Win</div>
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
          transition={{ delay: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-black gradient-text mb-6">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-inter font-light">
            Simple. Play on our partner platforms and climb the leaderboard to win <span className="gradient-text font-semibold">real money</span>.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card premium>
              <div className="text-center">
                <div className="text-7xl mb-6 animate-float">🎯</div>
                <h3 className="text-2xl font-orbitron font-black gradient-text mb-4">
                  1. Choose Platform
                </h3>
                <p className="text-gray-300 font-inter text-lg leading-relaxed">
                  Pick from <span className="text-primary-400 font-semibold">Rugs.fun</span>, <span className="text-accent-400 font-semibold">Solpump</span>, <span className="text-secondary-400 font-semibold">BCGame</span>, or <span className="text-purple-400 font-semibold">Rain.gg</span> using our affiliate links.
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card neon>
              <div className="text-center">
                <div className="text-7xl mb-6 animate-float" style={{ animationDelay: '0.5s' }}>🎰</div>
                <h3 className="text-2xl font-orbitron font-black text-primary-400 neon-text mb-4">
                  2. Start Playing
                </h3>
                <p className="text-gray-300 font-inter text-lg leading-relaxed">
                  Every dollar you wager is <span className="text-accent-400 font-semibold">tracked automatically</span> and added to your monthly total in real-time.
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Card premium glow>
              <div className="text-center">
                <div className="text-7xl mb-6 animate-float" style={{ animationDelay: '1s' }}>💰</div>
                <h3 className="text-2xl font-orbitron font-black gradient-text mb-4">
                  3. Win Rewards
                </h3>
                <p className="text-gray-300 font-inter text-lg leading-relaxed">
                  Top 3 players each month split <span className="gradient-text font-bold text-xl">$3,000</span>. Reset monthly for fair competition.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}