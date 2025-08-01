import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { getStatistics, mockPlayers, platforms } from '../../data/mockData';

export function StatsSection() {
  const stats = getStatistics();
  
  // Calculate additional stats
  const totalPlatforms = platforms.length;
  const averageWager = stats.totalVolume / stats.activeAffiliates;
  const topPlayerWager = mockPlayers[0]?.monthlyWagered || 0;
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            📈 Live Statistics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Real-time insights into the G0TZE affiliate program performance and player activity.
          </p>
        </motion.div>
        
        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card glow>
              <div className="text-center">
                <div className="text-4xl mb-3">💰</div>
                <div className="text-3xl font-orbitron font-bold text-secondary-400">
                  $<AnimatedCounter value={stats.totalVolume} decimals={0} />
                </div>
                <div className="text-gray-400 font-inter">Total Monthly Volume</div>
                <div className="text-sm text-gray-500 mt-2">
                  Across all platforms
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">👥</div>
                <div className="text-3xl font-orbitron font-bold text-primary-400">
                  <AnimatedCounter value={stats.activeAffiliates} />
                </div>
                <div className="text-gray-400 font-inter">Active Players</div>
                <div className="text-sm text-gray-500 mt-2">
                  This month
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">🔥</div>
                <div className="text-3xl font-orbitron font-bold text-red-400">
                  $<AnimatedCounter value={stats.biggestWin} decimals={0} />
                </div>
                <div className="text-gray-400 font-inter">Biggest Win</div>
                <div className="text-sm text-gray-500 mt-2">
                  Single session record
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <div className="text-3xl font-orbitron font-bold text-accent-400">
                  $<AnimatedCounter value={averageWager} decimals={0} />
                </div>
                <div className="text-gray-400 font-inter">Average Wager</div>
                <div className="text-sm text-gray-500 mt-2">
                  Per active player
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">⏰</div>
                <div className="text-3xl font-orbitron font-bold text-yellow-400">
                  <AnimatedCounter value={stats.daysUntilReset} />
                </div>
                <div className="text-gray-400 font-inter">Days Until Reset</div>
                <div className="text-sm text-gray-500 mt-2">
                  Monthly competition
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">🎰</div>
                <div className="text-3xl font-orbitron font-bold text-purple-400">
                  <AnimatedCounter value={totalPlatforms} />
                </div>
                <div className="text-gray-400 font-inter">Gaming Platforms</div>
                <div className="text-sm text-gray-500 mt-2">
                  Available to play
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        
        {/* Platform Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-orbitron font-bold text-center text-white mb-8">
            🎯 Platform Performance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Card>
                  <div className="text-center">
                    <div className="text-3xl mb-3">{platform.logo}</div>
                    <h3 className="font-orbitron font-bold text-white mb-2">
                      {platform.name}
                    </h3>
                    <div 
                      className="w-full h-2 rounded-full mb-3"
                      style={{ backgroundColor: `${platform.color}20` }}
                    >
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ 
                          backgroundColor: platform.color,
                          width: `${Math.random() * 80 + 20}%`
                        }}
                      />
                    </div>
                    <div className="text-sm text-gray-400">
                      Active players: {Math.floor(Math.random() * 15) + 5}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Top Player Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Card glow className="bg-gradient-to-br from-primary-900/20 to-secondary-900/20">
            <div className="text-center">
              <h2 className="text-2xl font-orbitron font-bold text-white mb-6">
                🏆 Current Leader
              </h2>
              
              {stats.topPlayer && (
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{stats.topPlayer.avatar}</div>
                    <div className="text-xl font-orbitron font-bold text-white">
                      {stats.topPlayer.username}
                    </div>
                    <div className="text-sm text-gray-400">
                      Rank #{stats.topPlayer.rank}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-orbitron font-bold text-secondary-400">
                      $<AnimatedCounter value={topPlayerWager} decimals={0} />
                    </div>
                    <div className="text-gray-400">Monthly Volume</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-orbitron font-bold text-green-400">
                      $1,500
                    </div>
                    <div className="text-gray-400">Potential Prize</div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}