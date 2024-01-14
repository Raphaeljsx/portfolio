/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        salsa: "Salsa",
        poppins: "Poppins",
      },
      keyframes: {
        animeLeft: {
          from: { transform: "translateX(-150px)", opacity: "0" },
          to: { transform: "translateX(0px)", opacity: "1" },
        },
        blink: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        animeLeft: "animeLeft .7s ease-in forwards",
        blink: "blink 1s linear forwards",
      },
      textColor:{
        primary:"hsl(var(--primary))",
      },
      backgroundColor:{
        primary:"hsl(var(--primary))",
       darker:"hsl(var(--background))",
       border:'hsl(var(--border))',
       card: 'hsl(var(--card))'
      },
    
    },
  },

  plugins: [],
};
