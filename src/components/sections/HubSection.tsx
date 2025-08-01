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
      {/* Ultra Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Massive floating orbs */}
        <div className="floating-orb w-[600px] h-[600px] top-1/4 left-1/4 bg-primary-500/15" />
        <div className="floating-orb-accent w-[500px] h-[500px] bottom-1/4 right-1/4 bg-accent-500/12" style={{ animationDelay: '2s' }} />
        <div className="floating-orb-secondary w-[400px] h-[400px] top-1/2 right-1/3 bg-secondary-500/10" style={{ animationDelay: '4s' }} />
        
        {/* Matrix rain effect */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 30 }).map((_, i) => (
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
        
        {/* Cyber particles */}
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-16"
          >
            {/* Main Title */}
            <motion.h1 
              className="text-7xl md:text-9xl font-orbitron font-black mb-8 leading-tight perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.span 
                className="gradient-text-rainbow neon-text-intense block mb-6 animate-cyber-glitch"
                animate={{ rotateX: [0, 5, 0], rotateY: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                $3,000
              </motion.span>
              <motion.span 
                className="text-white text-4xl md:text-6xl block neon-text"
                animate={{ rotateX: [0, -3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                distributed every month 💸
              </motion.span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-3xl md:text-4xl text-gray-300 max-w-5xl mx-auto mb-6 font-inter font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Join G0TZE's gang of <span className="gradient-text font-black neon-text">elite gamblers</span>
            </motion.p>
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-16 font-inter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Compete for real cash rewards on premium Web3 casino platforms
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                size="xl"
                variant="neon"
                glow
                cyber
                intense
                onClick={() => onSectionChange('platforms')}
                className="text-2xl px-16 py-8 min-w-[320px] shadow-neon-xl"
              >
                <span className="text-3xl mr-4 animate-float">🚀</span>
                START PLAYING NOW
              </Button>
              <Button
                size="xl"
                variant="cyber"
                onClick={() => onSectionChange('leaderboard')}
                className="text-xl px-12 py-6 min-w-[280px] shadow-cyber"
                glow
              >
                <span className="text-2xl mr-3 animate-wiggle">🏆</span>
                VIEW LEADERBOARD
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Ultra Premium Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Card premium glow cyber intense hologram>
              <div className="text-center">
                <div className="text-6xl mb-6 animate-float">💰</div>
                <div className="text-4xl font-orbitron font-black gradient-text-rainbow neon-text-intense mb-3">
                  $<AnimatedCounter value={stats.totalVolume} decimals={0} />
                </div>
                <div className="text-gray-300 font-inter font-bold text-lg">Total Volume This Month</div>
                <div className="mt-4 h-1 bg-gradient-to-r from-secondary-500 via-primary-500 to-accent-500 rounded-full animate-gradient-x" />
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card neon cyber hologram>
              <div className="text-center">
                <div className="text-6xl mb-6 animate-cyber-glitch">👥</div>
                <div className="text-4xl font-orbitron font-black text-primary-400 neon-text-intense mb-3">
                  <AnimatedCounter value={stats.activeAffiliates} />
                </div>
                <div className="text-gray-300 font-inter font-bold text-lg">Active Affiliates</div>
                <div className="mt-4 h-1 bg-gradient-to-r from-primary-500 to-primary-300 rounded-full animate-glow-pulse" />
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Card premium intense>
              <div className="text-center">
                <div className="text-6xl mb-6 animate-spin-slow">⏰</div>
                <div className="text-4xl font-orbitron font-black text-accent-400 neon-text mb-3">
                  <AnimatedCounter value={stats.daysUntilReset} />
                </div>
                <div className="text-gray-300 font-inter font-bold text-lg">Days Until Reset</div>
                <div className="mt-4 h-1 bg-gradient-to-r from-accent-500 to-accent-300 rounded-full animate-energy-pulse" />
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Card glow cyber>
              <div className="text-center">
                <div className="text-6xl mb-6 animate-shake">🔥</div>
                <div className="text-4xl font-orbitron font-black text-red-400 neon-text-intense mb-3">
                  $<AnimatedCounter value={stats.biggestWin} decimals={0} />
                </div>
                <div className="text-gray-300 font-inter font-bold text-lg">Biggest Win</div>
                <div className="mt-4 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-neon-flicker" />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* How it Works - Ultra Premium */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-black gradient-text-rainbow neon-text-intense mb-8 animate-hologram">
            How It Works
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto font-inter font-light">
            Simple. Play on our partner platforms and climb the leaderboard to win <span className="gradient-text-rainbow font-black neon-text text-3xl">real money</span>.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card premium cyber hologram intense>
              <div className="text-center">
                <div className="text-8xl mb-8 animate-float">🎯</div>
                <h3 className="text-3xl font-orbitron font-black gradient-text neon-text mb-6">
                  1. Choose Platform
                </h3>
                <p className="text-gray-300 font-inter text-xl leading-relaxed">
                  Pick from <span className="text-primary-400 font-black neon-text">Rugs.fun</span>, <span className="text-accent-400 font-black neon-text">Solpump</span>, <span className="text-secondary-400 font-black neon-text">BCGame</span>, or <span className="text-purple-400 font-black neon-text">Rain.gg</span> using our affiliate links.
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Card neon cyber intense>
              <div className="text-center">
                <div className="text-8xl mb-8 animate-cyber-glitch">🎰</div>
                <h3 className="text-3xl font-orbitron font-black text-primary-400 neon-text-intense mb-6">
                  2. Start Playing
                </h3>
                <p className="text-gray-300 font-inter text-xl leading-relaxed">
                  Every dollar you wager is <span className="text-accent-400 font-black neon-text">tracked automatically</span> and added to your monthly total in real-time.
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <Card premium glow hologram intense>
              <div className="text-center">
                <div className="text-8xl mb-8 animate-energy-pulse">💰</div>
                <h3 className="text-3xl font-orbitron font-black gradient-text-rainbow neon-text-intense mb-6">
                  3. Win Rewards
                </h3>
                <p className="text-gray-300 font-inter text-xl leading-relaxed">
                  Top 3 players each month split <span className="gradient-text-rainbow font-black text-2xl neon-text-intense">$3,000</span>. Reset monthly for fair competition.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}