import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { platforms } from '../../data/mockData';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

export function PlatformsSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
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
            🎰 Gaming Platforms
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Start playing on any of these platforms using G0TZE's affiliate links to join the leaderboard.
          </p>
        </motion.div>
        
        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card glow={index === 0} hover>
                <div className="space-y-6">
                  {/* Platform Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{platform.logo}</div>
                      <div>
                        <h3 className="text-xl font-orbitron font-bold text-white">
                          {platform.name}
                        </h3>
                        <div 
                          className="w-3 h-3 rounded-full animate-pulse"
                          style={{ backgroundColor: platform.color }}
                        />
                      </div>
                    </div>
                    {index === 0 && (
                      <span className="bg-gradient-to-r from-secondary-500 to-secondary-400 text-black px-3 py-1 rounded-full text-sm font-orbitron font-bold animate-pulse">
                        FEATURED
                      </span>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 font-inter leading-relaxed">
                    {platform.description}
                  </p>
                  
                  {/* Affiliate Code */}
                  {platform.code && (
                    <div className="bg-dark-700/50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-400 font-inter mb-1">Affiliate Code:</div>
                          <div className="font-orbitron font-bold text-lg text-secondary-400">
                            {platform.code}
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard(platform.code!, platform.id)}
                          className="p-2 hover:bg-dark-600 rounded-lg transition-colors"
                        >
                          {copiedCode === platform.id ? (
                            <CheckIcon className="h-5 w-5 text-green-400" />
                          ) : (
                            <ClipboardIcon className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="flex-1"
                      style={{ backgroundColor: platform.color }}
                      onClick={() => window.open(platform.url, '_blank')}
                      glow={index === 0}
                    >
                      🚀 Start Playing Now
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => copyToClipboard(platform.url, `${platform.id}-url`)}
                      className="min-w-[120px]"
                    >
                      {copiedCode === `${platform.id}-url` ? (
                        <>
                          <CheckIcon className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <ClipboardIcon className="h-4 w-4 mr-2" />
                          Copy Link
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-accent-500/50 bg-accent-900/10">
            <div className="text-center space-y-4">
              <div className="text-4xl">⚠️</div>
              <h3 className="text-xl font-orbitron font-bold text-accent-400">
                Important: Use Affiliate Links
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
                To be tracked on the leaderboard and eligible for monthly rewards, you MUST register and play 
                using the affiliate links or codes provided above. Direct registrations won't be counted.
              </p>
              <div className="flex justify-center">
                <Button variant="accent" size="lg" glow>
                  🎯 I Understand, Let's Play!
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}