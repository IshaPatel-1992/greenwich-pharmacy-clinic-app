module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     extend: {
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(13, 148, 136, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(250, 204, 21, 0.8)' }, // teal-yellow glow
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
    }, 
  },
  plugins: [],
};
