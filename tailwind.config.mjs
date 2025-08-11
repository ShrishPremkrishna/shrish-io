/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0E0F0A',
        forest: '#0F2A1E',
        emerald: '#2E7D6A',
        sage: '#CFE8D6',
        palegold: '#E9D8A6',
        ivory: '#F7F3E7',
        border: '#233226',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 42, 30, 0.12)',
        glow: '0 0 0 4px rgba(233, 216, 166, 0.35)',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};


