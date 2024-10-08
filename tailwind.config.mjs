/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily : {
        recoleta : ["Recoleta", "sans-serif"],
        poppins:["Poppins", "sans-serif"]
      },
    },
  },
  daisyui: {
    // Add your daisy ui themes here
    themes : ["dark","light"]
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};