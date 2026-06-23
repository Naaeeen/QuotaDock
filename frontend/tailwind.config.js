/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 主色调 - Aged brass / amber
        primary: {
          50: '#fff8e6',
          100: '#f8ebc6',
          200: '#edd08a',
          300: '#d7a84f',
          400: '#b88733',
          500: '#96611d',
          600: '#7a4817',
          700: '#5f3515',
          800: '#432514',
          900: '#2f1d12',
          950: '#1a100a'
        },
        // 辅助色 - Warm walnut neutrals
        accent: {
          50: '#faf7f2',
          100: '#f0e7d8',
          200: '#dfcfb9',
          300: '#c5a989',
          400: '#a8855f',
          500: '#8a6748',
          600: '#705039',
          700: '#523a2b',
          800: '#37271f',
          900: '#241a15',
          950: '#15100d'
        },
        // 深色模式背景 - Charcoal black, not pure black
        dark: {
          50: '#faf7f2',
          100: '#eee7dd',
          200: '#d9cab8',
          300: '#bca888',
          400: '#957453',
          500: '#72543a',
          600: '#553d2b',
          700: '#3b2b22',
          800: '#251c18',
          900: '#17120f',
          950: '#0d0a08'
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif'
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        glass: '0 18px 48px rgba(67, 37, 20, 0.10)',
        'glass-sm': '0 8px 24px rgba(67, 37, 20, 0.08)',
        glow: '0 0 20px rgba(150, 97, 29, 0.22)',
        'glow-lg': '0 0 40px rgba(150, 97, 29, 0.32)',
        card: '0 1px 3px rgba(67, 37, 20, 0.05), 0 1px 2px rgba(67, 37, 20, 0.08)',
        'card-hover': '0 18px 48px rgba(67, 37, 20, 0.12)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #b88733 0%, #7a4817 100%)',
        'gradient-dark': 'linear-gradient(135deg, #251c18 0%, #0d0a08 100%)',
        'gradient-glass':
          'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'mesh-gradient':
          'radial-gradient(at 35% 18%, rgba(215, 168, 79, 0.16) 0px, transparent 50%), radial-gradient(at 82% 4%, rgba(112, 80, 57, 0.11) 0px, transparent 48%), radial-gradient(at 0% 58%, rgba(150, 97, 29, 0.10) 0px, transparent 52%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
        glow: 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(150, 97, 29, 0.22)' },
          '100%': { boxShadow: '0 0 30px rgba(215, 168, 79, 0.34)' }
        }
      },
      backdropBlur: {
        xs: '2px'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
