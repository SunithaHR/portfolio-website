// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'magical-entrance': 'magicalEntrance 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float-magical': 'floatMagical 4s ease-in-out infinite',
        'float-gentle': 'floatGentle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'float-fast': 'floatFast 2s ease-in-out infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'orbit': 'orbit 15s linear infinite',
        'orb-float': 'orbFloat 15s ease-in-out infinite',
        'orb-float-reverse': 'orbFloatReverse 15s ease-in-out infinite reverse',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'ping-slow': 'pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeInUp': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'sparkle': 'sparkleEffect 1s ease-out forwards',
      },
      keyframes: {
        magicalEntrance: {
          '0%': { opacity: '0', transform: 'translateY(50px) scale(0.8)', filter: 'blur(10px)' },
          '50%': { opacity: '0.5', transform: 'translateY(-10px) scale(1.05)', filter: 'blur(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0)' }
        },
        floatMagical: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(90deg)' },
          '50%': { transform: 'translateY(-40px) rotate(180deg)' },
          '75%': { transform: 'translateY(-20px) rotate(270deg)' }
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' }
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' }
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, -20px)' },
          '50%': { transform: 'translate(0, -40px)' },
          '75%': { transform: 'translate(-20px, -20px)' }
        },
        orbFloatReverse: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-20px, 20px)' },
          '50%': { transform: 'translate(0, 40px)' },
          '75%': { transform: 'translate(20px, 20px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(6, 182, 212, 0.6)' }
        },
        sparkleEffect: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1) rotate(180deg)', opacity: '1' },
          '100%': { transform: 'scale(0) rotate(360deg)', opacity: '0' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pingSlow: {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(2)', opacity: '0' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'grid-white': 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(255 255 255 / 0.02)\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e")',
      }
    },
  },
  plugins: [],
}