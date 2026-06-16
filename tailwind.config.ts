import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'px-green': '#bf00ff',
        'px-cyan': '#00cfff',
        'px-pink': '#ff2a6d',
        'px-yellow': '#ffd700',
        'px-bg': '#050308',
        'px-card': '#0e0818',
        'px-border': '#2a1450',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        retro: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        'pixel': '4px 4px 0 0 #bf00ff',
        'pixel-cyan': '4px 4px 0 0 #00cfff',
        'pixel-pink': '4px 4px 0 0 #ff2a6d',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 8px #bf00ff' },
          '50%': { textShadow: '0 0 20px #bf00ff, 0 0 40px #bf00ff' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        glow: 'glow 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.4s ease-out forwards',
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
