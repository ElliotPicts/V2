import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { pastWinners } from '../../data/mockData';

export function WinnersSection() {
  const getTrophyIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🏆';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return '🏅';
    }
  };
  
  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-400 to-yellow-600';
      case 2: return 'from-gray-300 to-gray-500';
      case 3: return 'from-yellow-600 to-yellow-800';
      default: return 'from-primary-500 to-primary-600';
    }
  };
  
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
            👑 Wall of Fame
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Celebrating our monthly champions who earned real cash rewards through consistent gameplay.
          </p>
        </motion.div>
        
        {/* Latest Winners Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card glow className="bg-gradient-to-br from-secondary-900/20 to-primary-900/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-orbitron font-bold text-secondary-400 mb-2">
                🎉 December 2024 Winners
              </h2>
              <p className="text-gray-300 font-inter">
                Last month's champions who shared $3,000 in prizes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastWinners.map((winner, index) => (
                <motion.div
                  key={winner.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  <div className={`bg-gradient-to-r ${getRankColor(winner.rank)} p-[2px] rounded-xl`}>
                    <div className="bg-dark-800 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                        {getTrophyIcon(winner.rank)}
                      </div>
                      <h3 className="text-lg font-orbitron font-bold text-white mb-2">
                        {winner.username}
                      </h3>
                      <div className="text-2xl font-orbitron font-bold text-secondary-400 mb-1">
                        ${winner.prize.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400 font-inter mb-2">
                        Prize Won
                      </div>
                      <div className="text-sm text-gray-300 font-inter">
                        Wagered: $<AnimatedCounter value={winner.totalWagered} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Rank Badge */}
                  <div className="absolute -top-3 -right-3 bg-dark-900 border-2 border-secondary-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-sm font-orbitron font-bold text-secondary-400">
                      #{winner.rank}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
        
        {/* Hall of Fame Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-orbitron font-bold text-center text-white mb-8">
            🏛️ Hall of Fame Statistics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">💰</div>
                <div className="text-2xl font-orbitron font-bold text-secondary-400">
                  $12,000
                </div>
                <div className="text-gray-400 font-inter">Total Paid Out</div>
              </div>
            </Card>
            
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">👑</div>
                <div className="text-2xl font-orbitron font-bold text-primary-400">
                  9
                </div>
                <div className="text-gray-400 font-inter">Champions</div>
              </div>
            </Card>
            
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-3">📅</div>
                <div className="text-2xl font-orbitron font-bold text-accent-400">
                  4
                </div>
                <div className="text-gray-400 font-inter">Months Active</div>
              </div>
            </Card>
          </div>
        </motion.div>
        
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-orbitron font-bold text-center text-white mb-8">
            💬 What Winners Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <div className="font-orbitron font-bold text-white">LegendaryGambler</div>
                    <div className="text-sm text-secondary-400">December 2024 Champion</div>
                  </div>
                </div>
                <p className="text-gray-300 font-inter italic">
                  "Couldn't believe I actually won $1,500! G0TZE's affiliate program is legit. 
                  The tracking is transparent and payouts are fast. Already grinding for January!"
                </p>
              </div>
            </Card>
            
            <Card>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🥈</div>
                  <div>
                    <div className="font-orbitron font-bold text-white">CryptoNinja</div>
                    <div className="text-sm text-gray-400">December 2024 Runner-up</div>
                  </div>
                </div>
                <p className="text-gray-300 font-inter italic">
                  "Second place, $1,000 in my wallet! The competition keeps me motivated to play more. 
                  Love the real-time leaderboard updates."
                </p>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}