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
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Ultra Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Massive floating orbs */}
        <div className="floating-orb w-[800px] h-[800px] top-1/4 left-1/4 bg-primary-500/20" />
        <div className="floating-orb-accent w-[700px] h-[700px] bottom-1/4 right-1/4 bg-accent-500/15" style={{ animationDelay: '3s' }} />
        <div className="floating-orb-secondary w-[600px] h-[600px] top-1/2 right-1/3 bg-secondary-500/12" style={{ animationDelay: '6s' }} />
        <div className="floating-orb-plasma w-[500px] h-[500px] bottom-1/3 left-1/2 bg-neon-pink/10" style={{ animationDelay: '9s' }} />
        
        {/* Ultra Matrix rain effect */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-32 bg-gradient-to-b from-primary-500 via-accent-500 to-transparent matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Ultra Cyber particles */}
        {Array.from({ length: 150 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#ff0080', '#0080ff', '#00ff80', '#ffff00', '#ff8000', '#8000ff'][Math.floor(Math.random() * 6)]
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 3, 1],
              rotateZ: [0, 360, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
      
      {/* Hero Section Ultra Premium */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 150, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-20"
          >
            {/* Main Title Ultra Premium */}
            <motion.h1 
              className="text-8xl md:text-[12rem] font-orbitron font-black mb-12 leading-tight perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.span 
                className="gradient-text-plasma neon-text-ultra block mb-8 animate-quantum"
                animate={{ 
                  rotateX: [0, 10, 0], 
                  rotateY: [0, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                $3,000
              </motion.span>
              <motion.span 
                className="text-white text-5xl md:text-7xl block neon-text-intense"
                animate={{ 
                  rotateX: [0, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                distributed every month 💸
              </motion.span>
            </motion.h1>
            
            {/* Subtitle Ultra Premium */}
            <motion.p 
              className="text-4xl md:text-5xl text-gray-300 max-w-6xl mx-auto mb-8 font-inter font-light"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Join G0TZE's gang of <span className="gradient-text-plasma font-black neon-text-intense">elite gamblers</span>
            </motion.p>
            <motion.p 
              className="text-2xl md:text-3xl text-gray-400 max-w-5xl mx-auto mb-20 font-inter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Compete for real cash rewards on premium Web3 casino platforms
            </motion.p>
            
            {/* CTA Buttons Ultra Premium */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-10 justify-center items-center mb-24"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Button
                size="mega"
                variant="plasma"
                glow
                cyber
                intense
                ultra
                onClick={() => onSectionChange('platforms')}
                className="text-3xl px-20 py-10 min-w-[400px] shadow-plasma mega-glow"
              >
                <span className="text-4xl mr-6 animate-cyber-glitch">🚀</span>
                START PLAYING NOW
              </Button>
              <Button
                size="mega"
                variant="cyber"
                onClick={() => onSectionChange('leaderboard')}
                className="text-2xl px-16 py-8 min-w-[350px] shadow-cyber"
                glow
                intense
              >
                <span className="text-3xl mr-4 animate-quantum">🏆</span>
                VIEW LEADERBOARD
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Ultra Premium Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <Card ultra glow cyber intense hologram plasma>
              <div className="text-center">
                <div className="text-8xl mb-8 animate-quantum">💰</div>
                <div className="text-5xl font-orbitron font-black gradient-text-plasma neon-text-ultra mb-4">
                  $<AnimatedCounter value={stats.totalVolume} decimals={0} />
                </div>
                <div className="text-gray-300 font-inter font-bold text-xl">Total Volume This Month</div>
                <div className="mt-6 h-2 bg-gradient-to-r from-secondary-500 via-primary-500 to-accent-500 rounded-full animate-gradient-x shadow-neon-lg" />
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Card neon cyber hologram ultra>
              <div className="text-center">
                <div className="text-8xl mb-8 animate-cyber-glitch">👥</div>
                <div className="text-5xl font-orbitron font-black text-primary-400 neon-text-ultra mb-4">
                  <AnimatedCounter value={stats.activeAffiliates} />
                </div>
                <div className="text-gray-300 font-inter font-bold text-xl">Active Affiliates</div>
                <div className="mt-6 h-2 bg-gradient-to-r from-primary-500 to-primary-300 rounded-full animate-glow-pulse shadow-neon-lg" />
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Card premium intense ultra plasma>
              <div className="text-center">
                <div className="text-8xl mb-8 animate-rainbow">⏰</div>
                <div className="text-5xl font-orbitron font-black text-accent-400 neon-text-intense mb-4">
                  <AnimatedCounter value={stats.daysUntilReset} />
                </div>
                <div className="text-gray-300 font-inter font-bold text-xl">Days Until Reset</div>
                <div className="mt-6 h-2 bg-gradient-to-r from-accent-500 to-accent-300 rounded-full animate-energy-pulse shadow-neon-lg" />
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <Card glow cyber ultra>
              <div className="text-center">
                <div className="text-8xl mb-8 animate-electric">🔥</div>
                <div className="text-5xl font-orbitron font-black text-red-400 neon-text-ultra mb-4">
                  $<AnimatedCounter value={stats.biggestWin} decimals={0} />
                </div>
                <div className="text-gray-300 font-inter font-bold text-xl">Biggest Win</div>
                <div className="mt-6 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-neon-flicker shadow-neon-lg" />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* How it Works - Ultra Premium */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-orbitron font-black gradient-text-plasma neon-text-ultra mb-12 animate-quantum">
            How It Works
          </h2>
          <p className="text-3xl md:text-4xl text-gray-300 max-w-6xl mx-auto font-inter font-light">
            Simple. Play on our partner platforms and climb the leaderboard to win <span className="gradient-text-plasma font-black neon-text-intense text-4xl">real money</span>.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <Card ultra cyber hologram intense plasma>
              <div className="text-center">
                <div className="text-10xl mb-12 animate-quantum">🎯</div>
                <h3 className="text-4xl font-orbitron font-black gradient-text-plasma neon-text-intense mb-8">
                  1. Choose Platform
                </h3>
                <p className="text-gray-300 font-inter text-2xl leading-relaxed">
                  Pick from <span className="text-primary-400 font-black neon-text">Rugs.fun</span>, <span className="text-accent-400 font-black neon-text">Solpump</span>, <span className="text-secondary-400 font-black neon-text">BCGame</span>, or <span className="text-purple-400 font-black neon-text">Rain.gg</span> using our affiliate links.
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 1.0, duration: 1 }}
          >
            <Card neon cyber intense ultra>
              <div className="text-center">
                <div className="text-10xl mb-12 animate-cyber-glitch">🎰</div>
                <h3 className="text-4xl font-orbitron font-black text-primary-400 neon-text-ultra mb-8">
                  2. Start Playing
                </h3>
                <p className="text-gray-300 font-inter text-2xl leading-relaxed">
                  Every dollar you wager is <span className="text-accent-400 font-black neon-text-intense">tracked automatically</span> and added to your monthly total in real-time.
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: 30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            <Card premium glow hologram intense ultra plasma>
              <div className="text-center">
                <div className="text-10xl mb-12 animate-rainbow">💰</div>
                <h3 className="text-4xl font-orbitron font-black gradient-text-plasma neon-text-ultra mb-8">
                  3. Win Rewards
                </h3>
                <p className="text-gray-300 font-inter text-2xl leading-relaxed">
                  Top 3 players each month split <span className="gradient-text-plasma font-black text-3xl neon-text-ultra">$3,000</span>. Reset monthly for fair competition.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}