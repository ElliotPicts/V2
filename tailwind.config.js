/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Ultra dark theme
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#0a0a0f',
          900: '#050507',
          950: '#000000',
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
        // Neon colors
        neon: {
          pink: '#ff0080',
          blue: '#0080ff',
          green: '#00ff80',
          purple: '#8000ff',
          yellow: '#ffff00',
          cyan: '#00ffff',
          red: '#ff0040',
          orange: '#ff8000',
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
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.5), 0 0 40px rgba(99, 102, 241, 0.3), 0 0 60px rgba(99, 102, 241, 0.1)',
            textShadow: '0 0 10px rgba(99, 102, 241, 0.8)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(99, 102, 241, 0.8), 0 0 60px rgba(99, 102, 241, 0.5), 0 0 90px rgba(99, 102, 241, 0.3)',
            textShadow: '0 0 20px rgba(99, 102, 241, 1)'
          }
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.4), 0 0 40px rgba(99, 102, 241, 0.2), 0 0 60px rgba(99, 102, 241, 0.1)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(99, 102, 241, 0.8), 0 0 80px rgba(99, 102, 241, 0.4), 0 0 120px rgba(99, 102, 241, 0.2)',
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
            boxShadow: '0 0 20px rgba(79, 70, 229, 0.5), inset 0 0 20px rgba(79, 70, 229, 0.1)' 
          },
          '50%': { 
            opacity: 0.8, 
            boxShadow: '0 0 40px rgba(79, 70, 229, 0.8), inset 0 0 40px rgba(79, 70, 229, 0.2)' 
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
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(99, 102, 241, 0.8), 0 0 60px rgba(99, 102, 241, 0.4)',
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
            background: 'linear-gradient(45deg, #ff0080, #0080ff)',
            transform: 'rotate(0deg)'
          },
          '25%': { 
            background: 'linear-gradient(45deg, #0080ff, #00ff80)',
            transform: 'rotate(90deg)'
          },
          '50%': { 
            background: 'linear-gradient(45deg, #00ff80, #ffff00)',
            transform: 'rotate(180deg)'
          },
          '75%': { 
            background: 'linear-gradient(45deg, #ffff00, #ff0080)',
            transform: 'rotate(270deg)'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-rainbow': 'linear-gradient(45deg, #ff0080, #ff8000, #ffff00, #80ff00, #00ff80, #00ffff, #0080ff, #8000ff, #ff0080)',
        'cyber-grid': 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
        'hologram-gradient': 'linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)',
        'energy-flow': 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.4), transparent)',
        'plasma-gradient': 'linear-gradient(45deg, #ff0080, #ff8000, #ffff00, #80ff00, #00ff80, #00ffff, #0080ff, #8000ff)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor',
        'neon-lg': '0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor',
        'neon-xl': '0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor',
        'inner-glow': 'inset 0 0 20px rgba(99, 102, 241, 0.3)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'cyber': '0 0 20px rgba(99, 102, 241, 0.5), inset 0 0 20px rgba(99, 102, 241, 0.1), 0 0 40px rgba(99, 102, 241, 0.3)',
        'hologram': '0 0 30px rgba(99, 102, 241, 0.6), 0 0 60px rgba(34, 211, 238, 0.4), 0 0 90px rgba(251, 191, 36, 0.2)',
        'plasma': '0 0 40px rgba(255, 0, 128, 0.6), 0 0 80px rgba(0, 255, 255, 0.4), 0 0 120px rgba(255, 255, 0, 0.2)',
      }
    },
  },
  plugins: [],
};