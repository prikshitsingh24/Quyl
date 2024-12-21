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
        tableHeadingColor:"var(--tableHeadingColor)",
        sidebarHoverTextColor:"var(--sidebarHoverTextColor)"
      },
      fontFamily: {
        noto: ['Noto Sans'], 
      },
      screens: {
        'screen-1024':'1024px',
        // => @media (min-width: 1024px ) { ... }
        'screen-1280': '1280px',  
        // => @media (min-width: 1280px ) { ... }
        'screen-1440': '1440px',
        // => @media (min-width: 1440px ) { ... }
        'screen-1512': '1512px',
        // => @media (min-width: 1512px ) { ... }
        'screen-1680':'1680px',
        // => @media (min-width: 1680px ) { ... }
        'screen-1920': '1910px',  
        // => @media (min-width: 1920px) { ... }
        'screen-2560': '2550px',  
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [],
};
