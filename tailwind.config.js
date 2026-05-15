/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        bg: '#07070f',
        surface: '#0d0d1a',
        surface2: '#131324',
        border: 'rgba(255,255,255,0.07)',
        accent: '#7c6fff',
        accent2: '#ff6fb0',
        accent3: '#6fffd4',
        muted: 'rgba(220,220,255,0.45)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float2': 'float 10s ease-in-out infinite 3s',
        'float3': 'float 12s ease-in-out infinite 6s',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
