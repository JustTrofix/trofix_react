/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Raleway': ['Raleway', 'serif'],
    },
    extend: {
      animation: {
        up: 'up 1.5s ease forwards',
        away: 'away 1.5s ease forwards'
      },
      keyframes: {
        up: {
          '0%': { top: "100%" },
          '100%': { top: 0 }
        },
        away: {
          '0%': { top: "0%",
                  opacity: 1,
                },
          '50%': { opacity: 0,
          },
          '100%': { top: "-100%",
                    opacity: 0,
                },
        }
      },
    },
  },
  plugins: [],
}