export interface Player {
  id: string;
  username: string;
  totalWagered: number;
  rank: number;
  favoriteplatform: string;
  lastActive: Date;
  isActive: boolean;
  monthlyWagered: number;
  avatar?: string;
}

export interface Platform {
  id: string;
  name: string;
  url: string;
  code?: string;
  logo: string;
  color: string;
  description: string;
}

export interface MonthlyWinner {
  id: string;
  username: string;
  month: string;
  year: number;
  prize: number;
  totalWagered: number;
  rank: number;
}

export interface Statistics {
  totalVolume: number;
  activeAffiliates: number;
  topPlayer: Player | null;
  biggestWin: number;
  daysUntilReset: number;
}

export interface Notification {
  id: string;
  message: string;
  type: 'wager' | 'win' | 'rank' | 'system';
  timestamp: Date;
  username?: string;
  amount?: number;
}