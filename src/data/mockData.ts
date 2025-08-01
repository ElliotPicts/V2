import { Player, Platform, MonthlyWinner, Statistics, Notification } from '../types';

export const platforms: Platform[] = [
  {
    id: 'rugs',
    name: 'Rugs.fun',
    url: 'https://rugs.fun/?start=REF_Q51LEOWNE0RI',
    logo: '🎯',
    color: '#ff6b35',
    description: 'The ultimate meme token roulette. High-risk, high-reward gaming.'
  },
  {
    id: 'solpump',
    name: 'Solpump',
    url: 'https://solpump.com/a/G0TZE',
    logo: '⚡',
    color: '#9945ff',
    description: 'Solana-powered pump platform. Fast trades, instant rewards.'
  },
  {
    id: 'bcgame',
    name: 'BCGame',
    url: 'https://bcgame.com',
    code: 'RAWLOOT',
    logo: '🎲',
    color: '#f1c40f',
    description: 'Premier crypto casino. Over 10,000 games available.'
  },
  {
    id: 'rain',
    name: 'Rain.gg',
    url: 'https://rain.gg',
    code: 'RAWLOOT',
    logo: '🌧️',
    color: '#3498db',
    description: 'Next-gen gaming platform with exclusive rain events.'
  }
];

export const mockPlayers: Player[] = [
  {
    id: '1',
    username: 'CryptoWhale92',
    totalWagered: 85420,
    monthlyWagered: 85420,
    rank: 1,
    favoriteplatform: 'Rugs.fun',
    lastActive: new Date(),
    isActive: true,
    avatar: '🐋'
  },
  {
    id: '2',
    username: 'DiamondHands',
    totalWagered: 67890,
    monthlyWagered: 67890,
    rank: 2,
    favoriteplatform: 'Solpump',
    lastActive: new Date(Date.now() - 1000 * 60 * 30),
    isActive: true,
    avatar: '💎'
  },
  {
    id: '3',
    username: 'MoonShot',
    totalWagered: 54320,
    monthlyWagered: 54320,
    rank: 3,
    favoriteplatform: 'BCGame',
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 2),
    isActive: true,
    avatar: '🚀'
  },
  {
    id: '4',
    username: 'RugPull_Master',
    totalWagered: 43210,
    monthlyWagered: 43210,
    rank: 4,
    favoriteplatform: 'Rugs.fun',
    lastActive: new Date(Date.now() - 1000 * 60 * 60),
    isActive: true,
    avatar: '🎭'
  },
  {
    id: '5',
    username: 'SolanaKing',
    totalWagered: 38900,
    monthlyWagered: 38900,
    rank: 5,
    favoriteplatform: 'Solpump',
    lastActive: new Date(Date.now() - 1000 * 60 * 15),
    isActive: true,
    avatar: '👑'
  }
];

export const pastWinners: MonthlyWinner[] = [
  {
    id: '1',
    username: 'LegendaryGambler',
    month: 'December',
    year: 2024,
    prize: 1500,
    totalWagered: 95000,
    rank: 1
  },
  {
    id: '2',
    username: 'CryptoNinja',
    month: 'December',
    year: 2024,
    prize: 1000,
    totalWagered: 78000,
    rank: 2
  },
  {
    id: '3',
    username: 'GambleGoat',
    month: 'December',
    year: 2024,
    prize: 500,
    totalWagered: 65000,
    rank: 3
  }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    message: 'just wagered $2,500 on Rugs.fun! 🎯',
    type: 'wager',
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
    username: 'CryptoWhale92',
    amount: 2500
  },
  {
    id: '2',
    message: 'DiamondHands moved to #2 on the leaderboard! 💎',
    type: 'rank',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    username: 'DiamondHands'
  },
  {
    id: '3',
    message: 'Big win alert! MoonShot hit $8,000 on BCGame! 🚀',
    type: 'win',
    timestamp: new Date(Date.now() - 1000 * 60 * 8),
    username: 'MoonShot',
    amount: 8000
  }
];

export const getStatistics = (): Statistics => {
  const totalVolume = mockPlayers.reduce((sum, player) => sum + player.monthlyWagered, 0);
  const activeAffiliates = mockPlayers.filter(p => p.isActive).length;
  const topPlayer = mockPlayers.find(p => p.rank === 1) || null;
  const biggestWin = 15000; // Mock biggest win
  
  // Calculate days until next month
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const daysUntilReset = Math.ceil((nextMonth.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  return {
    totalVolume,
    activeAffiliates,
    topPlayer,
    biggestWin,
    daysUntilReset
  };
};