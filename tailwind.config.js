

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        bg: '#FAFBFC', // Premium clean light background
        surface: '#FFFFFF',
        surface2: '#F3F5F7',
        border: '#EAECEF',
        // Signature Brand Blurple
        indigo: {
          50: '#F2F3FF',
          100: '#E1E4FF',
          200: '#C7CEFF',
          300: '#A3B1FF',
          400: '#7A8CFF',
          500: '#5C54FF', // Primary Signature
          600: '#493CFA', 
          700: '#3A27D9',
          800: '#3021B0',
          900: '#281E8C',
        },
        // Signature Brand Coral
        orange: {
          50: '#FFF2EF',
          100: '#FFE1D8',
          200: '#FFC2B0',
          300: '#FFA085',
          400: '#FF7D5A',
          500: '#FF5B30', // Secondary Signature
          600: '#E64317',
        },
        // Signature Mint/Teal
        teal: {
          50: '#EEFBF8',
          100: '#D5F5ED',
          200: '#AEEAD9',
          300: '#7BDBC1',
          400: '#47C7A8',
          500: '#1CB090', // Tertiary Signature
          600: '#148C72',
        }
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
