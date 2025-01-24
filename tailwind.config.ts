import type { Config } from 'tailwindcss';
import { colors } from './config/tailwind/colors';
import { screens } from './config/tailwind/screens';
import { letterSpacing } from './config/tailwind/letterSpacing';
import { fontSize } from './config/tailwind/fontSize';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens,
      colors,
      letterSpacing,
      fontSize,
    },
  },
  plugins: [],
} satisfies Config;
