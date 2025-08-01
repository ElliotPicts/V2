import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/Card';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { mockPlayers, platforms } from '../../data/mockData';
import { Player } from '../../types';

export function LeaderboardSection() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setPlayers(mockPlayers);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };
  
  const getRankReward = (rank: number) => {
    switch (rank) {
      case 1: return '$1,500';
      case 2: return '$1,000';
      case 3: return '$500';
      default: return '$0';
    }
  };
  
  const getPlatformColor = (platformName: string) => {
    const platform = platforms.find(p => p.name === platformName);
    return platform?.color || '#6366f1';
  };
  
  if (loading) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">⚡</div>
          <div className="text-xl font-orbitron text-gray-300">Loading leaderboard...</div>
        </div>
      </div>
    );
  }
  
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
            🏆 Monthly Leaderboard
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Top players competing for $3,000 in monthly rewards. Rankings update in real-time.
          </p>
        </motion.div>
        
        {/* Prize Pool */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card glow className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl mb-2">🥇</div>
                <div className="text-2xl font-orbitron font-bold text-secondary-400">$1,500</div>
                <div className="text-gray-400 font-inter">1st Place</div>
              </div>
              <div>
                <div className="text-4xl mb-2">🥈</div>
                <div className="text-2xl font-orbitron font-bold text-gray-300">$1,000</div>
                <div className="text-gray-400 font-inter">2nd Place</div>
              </div>
              <div>
                <div className="text-4xl mb-2">🥉</div>
                <div className="text-2xl font-orbitron font-bold text-yellow-600">$500</div>
                <div className="text-gray-400 font-inter">3rd Place</div>
              </div>
            </div>
          </Card>
        </motion.div>
        
        {/* Leaderboard */}
        <div className="space-y-4">
          <AnimatePresence>
            {players.map((player, index) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className={`${player.rank <= 3 ? 'border-secondary-500/50 shadow-lg shadow-secondary-500/10' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Rank */}
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-orbitron font-bold text-lg ${
                          player.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black' :
                          player.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-500 text-black' :
                          player.rank === 3 ? 'bg-gradient-to-r from-yellow-600 to-yellow-800 text-white' :
                          'bg-dark-700 text-gray-300'
                        }`}>
                          {getRankIcon(player.rank)}
                        </div>
                      </div>
                      
                      {/* Player Info */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{player.avatar}</span>
                          <h3 className="text-lg font-orbitron font-semibold text-white">
                            {player.username}
                          </h3>
                          {player.isActive && (
                            <span className="animate-pulse text-green-400">🟢</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 mt-1">
                          <span 
                            className="text-sm px-2 py-1 rounded text-white font-medium"
                            style={{ backgroundColor: getPlatformColor(player.favoriteplatform) }}
                          >
                            {player.favoriteplatform}
                          </span>
                          <span className="text-gray-400 text-sm font-inter">
                            Last active: {player.lastActive.toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="text-right">
                      <div className="text-xl font-orbitron font-bold text-secondary-400">
                        $<AnimatedCounter value={player.monthlyWagered} decimals={0} />
                      </div>
                      <div className="text-sm text-gray-400 font-inter">Monthly Volume</div>
                      {player.rank <= 3 && (
                        <div className="text-lg font-orbitron font-bold text-green-400 mt-1">
                          {getRankReward(player.rank)}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <Card>
            <p className="text-lg text-gray-300 font-inter">
              💡 Leaderboard resets every 1st of the month. Keep playing to maintain your position!
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}