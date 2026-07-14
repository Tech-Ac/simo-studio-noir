import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#0A0A0A', soft: '#141414', muted: '#1A1A1A' },
        line: { DEFAULT: '#1F1F1F', strong: '#2A2A2A' },
        fg: { DEFAULT: '#FFFFFF', muted: '#A1A1A1', dim: '#52525B' }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        serif: ['var(--font-instrument)'],
      },
      letterSpacing: { tighter: '-0.03em', widest: '0.2em' }
    }
  },
  plugins: [],
}
export default config
