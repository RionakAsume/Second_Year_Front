/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#5f3e96',
        'custom-green': '#009244',
        'custom-yellow': '#fbbf24',
        'custom-grisoscuro': '#333333',
        'custom-grisclaro': '#f5f5f5',
        'custom-rojoalerta': '#FF0000',

      },

    },
  },
  plugins: [],
}