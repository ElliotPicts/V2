/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Ultra dark gaming theme
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e1b2e',
          900: '#0f0d1a',
          950: '#0a0812',
        },
        // Electric purple primary
        primary: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        // Gaming purple
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        // Gold/Yellow secondary
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Cyan accent
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        // X/Twitter - Noir
        twitter: {
          400: '#000000',
          500: '#1a1a1a',
          600: '#333333',
        },
        // Kick - Vert
        kick: {
          400: '#00ff41',
          500: '#00e63b',
          600: '#00cc35',
        },
        // Gaming colors
        gaming: {
          purple: '#8b5cf6',
          pink: '#ec4899',
          blue: '#3b82f6',
          green: '#10b981',
          orange: '#f97316',
          red: '#ef4444',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 3s linear infinite',
        'cyber-glitch': 'cyber-glitch 2s ease-in-out infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'data-flow': 'data-flow 20s linear infinite',
        'energy-pulse': 'energy-pulse 2s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 0.15s ease-in-out infinite alternate',
        'rainbow': 'rainbow 3s linear infinite',
        'laser': 'laser 2s ease-in-out infinite',
        'electric': 'electric 1s ease-in-out infinite',
        'quantum': 'quantum 4s ease-in-out infinite',
        'plasma': 'plasma 3s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'ripple': 'ripple 2s ease-out infinite',
        'scan': 'scan 3s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.1)',
            textShadow: '0 0 10px rgba(139, 92, 246, 0.8)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.5), 0 0 90px rgba(139, 92, 246, 0.3)',
            textShadow: '0 0 20px rgba(139, 92, 246, 1)'
          }
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2), 0 0 60px rgba(139, 92, 246, 0.1)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(139, 92, 246, 0.4), 0 0 120px rgba(139, 92, 246, 0.2)',
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' }
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: 1, 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.1)' 
          },
          '50%': { 
            opacity: 0.8, 
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.8), inset 0 0 40px rgba(139, 92, 246, 0.2)' 
          }
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'neon-pulse': {
          '0%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor',
            filter: 'brightness(1.2)'
          }
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)', opacity: 1 },
          '100%': { transform: 'translateY(100vh)', opacity: 0 }
        },
        'cyber-glitch': {
          '0%, 100%': { 
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)'
          },
          '20%': { 
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(90deg)'
          },
          '40%': { 
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(180deg)'
          },
          '60%': { 
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(270deg)'
          },
          '80%': { 
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(360deg)'
          }
        },
        'hologram': {
          '0%, 100%': { 
            opacity: 1,
            transform: 'rotateY(0deg)'
          },
          '50%': { 
            opacity: 0.7,
            transform: 'rotateY(180deg)'
          }
        },
        'data-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        },
        'energy-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)',
            transform: 'scale(1.05)'
          }
        },
        'neon-flicker': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 }
        },
        'rainbow': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' }
        },
        'laser': {
          '0%, 100%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor',
            transform: 'scaleX(1)'
          },
          '50%': { 
            boxShadow: '0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor',
            transform: 'scaleX(1.1)'
          }
        },
        'electric': {
          '0%, 100%': { 
            textShadow: '0 0 5px currentColor',
            transform: 'scale(1)'
          },
          '50%': { 
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            transform: 'scale(1.02)'
          }
        },
        'quantum': {
          '0%, 100%': { 
            opacity: 1,
            transform: 'translateZ(0) rotateY(0deg)'
          },
          '25%': { 
            opacity: 0.7,
            transform: 'translateZ(10px) rotateY(90deg)'
          },
          '50%': { 
            opacity: 0.5,
            transform: 'translateZ(20px) rotateY(180deg)'
          },
          '75%': { 
            opacity: 0.7,
            transform: 'translateZ(10px) rotateY(270deg)'
          }
        },
        'plasma': {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
            transform: 'rotate(0deg)'
          },
          '25%': { 
            background: 'linear-gradient(45deg, #3b82f6, #10b981)',
            transform: 'rotate(90deg)'
          },
          '50%': { 
            background: 'linear-gradient(45deg, #10b981, #f59e0b)',
            transform: 'rotate(180deg)'
          },
          '75%': { 
            background: 'linear-gradient(45deg, #f59e0b, #8b5cf6)',
            transform: 'rotate(270deg)'
          }
        },
        'morph': {
          '0%, 100%': { 
            borderRadius: '20px',
            transform: 'rotate(0deg) scale(1)'
          },
          '25%': { 
            borderRadius: '50px',
            transform: 'rotate(90deg) scale(1.1)'
          },
          '50%': { 
            borderRadius: '30px',
            transform: 'rotate(180deg) scale(0.9)'
          },
          '75%': { 
            borderRadius: '40px',
            transform: 'rotate(270deg) scale(1.05)'
          }
        },
        'breathe': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: 0.8
          },
          '50%': { 
            transform: 'scale(1.1)',
            opacity: 1
          }
        },
        'ripple': {
          '0%': { 
            transform: 'scale(0)',
            opacity: 1
          },
          '100%': { 
            transform: 'scale(4)',
            opacity: 0
          }
        },
        'scan': {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: 0
          },
          '50%': { 
            opacity: 1
          },
          '100%': { 
            transform: 'translateX(100%)',
            opacity: 0
          }
        },
        'glitch': {
          '0%, 100%': { 
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)'
          },
          '10%': { 
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(90deg)'
          },
          '20%': { 
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(180deg)'
          },
          '30%': { 
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(270deg)'
          },
          '40%': { 
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(360deg)'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gaming': 'linear-gradient(135deg, #8b5cf6, #3b82f6, #10b981, #f59e0b)',
        'cyber-grid': 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
        'hologram-gradient': 'linear-gradient(45deg, transparent 30%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
        'energy-flow': 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent)',
        'gaming-gradient': 'linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6, #10b981, #f59e0b, #ef4444)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor',
        'neon-lg': '0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor',
        'neon-xl': '0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor',
        'inner-glow': 'inset 0 0 20px rgba(139, 92, 246, 0.3)',
        'gaming': '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(139, 92, 246, 0.1)',
        'cyber': '0 0 20px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.1), 0 0 40px rgba(139, 92, 246, 0.3)',
        'hologram': '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4), 0 0 90px rgba(16, 185, 129, 0.2)',
        'plasma': '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(236, 72, 153, 0.4), 0 0 120px rgba(59, 130, 246, 0.2)',
        'ultra': '0 0 60px rgba(139, 92, 246, 0.8), 0 0 120px rgba(236, 72, 153, 0.6), 0 0 180px rgba(59, 130, 246, 0.4)',
      }
    },
  },
  plugins: [],
};