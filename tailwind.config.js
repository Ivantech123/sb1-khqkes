/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      backgroundColor: {
        dark: {
          primary: '#1a1a1a',
          secondary: '#2d2d2d',
          accent: '#3a3a3a'
        }
      },
      textColor: {
        dark: {
          primary: '#ffffff',
          secondary: '#a0a0a0'
        }
      },
      borderColor: {
        dark: {
          primary: '#404040',
          secondary: '#333333'
        }
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      height: {
        screen: ['100vh /* fallback */', '100dvh'],
      },
      minHeight: {
        screen: ['100vh /* fallback */', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh /* fallback */', '100dvh'],
      },
    },
  },
  plugins: [],
};