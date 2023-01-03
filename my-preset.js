module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  safelist: [
    {
      pattern:
        /(bg|border|text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4f9646',
        secondary: '#ff9457',
        teritory: '#758278',
        pink: '#ff85c0',
        lightPink: '#f4ecfc',
        blue: '#69c0ff',
        lightBlue: '#e8f6ff',
        purpole: '#b37feb',
        downy: '#68dbba',
        lightDowny: '#e4f8f3',
        lightOrange: '#faece1',
      },
      fontFamily: {
        heebo: 'Heebo',
        inter: 'Inter',
      },
    },
  },
  variants: {},
  plugins: [],
};
