// The above code is telling tailwind to look for all the html, js and tsx files in the src folder and use them to generate the tailwind.css file.
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Telling tailwind to look for all the html, js and tsx files in the src folder and use them to generate the tailwind.css file.
  content: ["./config/src/**/*.{html,js,tsx}"],
  important: true,
  theme: {
    extend: {},
    // Defining the breakpoints for the responsive design.
    screens: {
      xs: "649px",
      // => @media (min-width: 422px) { ... }
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "960px",
      // => @media (min-width: 960px) { ... }
      lp: "1024px",
      // => @media (min-width: 1024px) { ... }
      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
