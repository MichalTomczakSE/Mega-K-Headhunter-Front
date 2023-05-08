/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': '#222224',
        'secondary-background': '#292A2B',
        'light-primary-text': '#F7F7F7',
        'light-secondary-text': '#CFCFCF',
        'dark-primary-text': '#7E7E7E',
        'dark-secondary-text': '#666666',
        'primary-red': '#E02735',
        'secondary-red': '#C92929',
        'navbar-background': '#1E1E1F',
        'hr-line': '#202122',
        'pagination-item': '#333333',
        'filter-button': '#4D4D4D',
        'grades-background': '#222324',
        'grades-text': '#9E9E9E',
        'filter-background': '#0A0A0A',
        'clear-button': '#172A35',
        'hyperlink-text': '#0B8BD4',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '2/100': '2%',
        '5/100': '5%',
        '11/100': '11%',
        '25/100': '25%',
        '79/100': '79%'
      },
    },
  },
  plugins: [],
};
