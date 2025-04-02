module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#9333ea', // couleur violet de base pour mode clair
            dark: '#a855f7',  // couleur violet plus claire pour mode sombre
          },
          background: {
            light: '#ffffff',
            dark: '#121212',
          },
          text: {
            light: '#1a1a1a',
            dark: '#f5f5f5',
          }
        },
      },
    },
    plugins: [],
  }