/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dashboardText:"var(--dashboardText)",
        usernameText: "var(--usernameText)",
        dropdownBackground:"var(--dropdownBackground)",
        dropdownText:"var(--dropdownText)",
        tableBorderColor:"var(--tableBorderColor)",
        tableHeadingColor:"var(--tableHeadingColor)"
      },
      fontFamily: {
        noto: ['Noto Sans'], 
      },
    },
  },
  plugins: [],
};
