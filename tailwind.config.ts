import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./app/**/*.{ts,tsx}', './content/**/*.mdx', './public/**/*.svg'],
  theme: {
    screens: {
      '3xl': {'max': '1700px'},
      '2xl': {'max': '1400'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},  
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xs': {'max': '400px'},
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        pink: 'rgb(255, 105, 180)', // RGB values for pink color
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} as Config;
