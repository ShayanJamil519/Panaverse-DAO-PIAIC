/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["Nunito-Regular"],
      raleway: ["Raleway-Regular"],
    },
    screens: {
      smallerscreen: "465px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
    },
    backgroundImage: {
      "hero-blob": "url('/assets/hero__blob.png')",
      "hero-arrow": "url('/assets/hero__arrow.png')",
      "hero-code": "url('/assets/hero__code.png')",
      "hero-green-dots": "url('/assets/hero__green__dots.png')",
      "hero-blue-dots": "url('/assets/hero__blue__dots.png')",
      "web3-bg": "url('/assets/web3__bg.png')",
      "goals-bg": "url('/assets/goals__bg.png')",
      "class-bg": "url('/assets/class__bg.png')",
    },
  },
  plugins: [],
};
