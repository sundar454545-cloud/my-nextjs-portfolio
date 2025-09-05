// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"], // enables .dark class strategy
//   content: [
//     "./pages/**/*.{js,jsx,ts,tsx,mdx}",
//     "./components/**/*.{js,jsx,ts,tsx,mdx}",
//     "./app/**/*.{js,jsx,ts,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         card: "hsl(var(--card))",
//         "card-foreground": "hsl(var(--card-foreground))",
//         popover: "hsl(var(--popover))",
//         "popover-foreground": "hsl(var(--popover-foreground))",
//         primary: "hsl(var(--primary))",
//         "primary-foreground": "hsl(var(--primary-foreground))",
//         secondary: "hsl(var(--secondary))",
//         "secondary-foreground": "hsl(var(--secondary-foreground))",
//         muted: "hsl(var(--muted))",
//         "muted-foreground": "hsl(var(--muted-foreground))",
//         accent: "hsl(var(--accent))",
//         "accent-foreground": "hsl(var(--accent-foreground))",
//         destructive: "hsl(var(--destructive))",
//         "destructive-foreground": "hsl(var(--destructive-foreground))",
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         chart: {
//           1: "hsl(var(--chart-1))",
//           2: "hsl(var(--chart-2))",
//           3: "hsl(var(--chart-3))",
//           4: "hsl(var(--chart-4))",
//           5: "hsl(var(--chart-5))",
//         },
//         sidebar: {
//           DEFAULT: "hsl(var(--sidebar))",
//           foreground: "hsl(var(--sidebar-foreground))",
//           primary: "hsl(var(--sidebar-primary))",
//           "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
//           accent: "hsl(var(--sidebar-accent))",
//           "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
//           border: "hsl(var(--sidebar-border))",
//           ring: "hsl(var(--sidebar-ring))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  // This tells Tailwind where to look for your classes.
  // It typically scans all React component files (.js, .jsx, .ts, .tsx)
  // in your source directories.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Sometimes projects put source in 'src'
  ],

  // This controls whether dark mode is based on a class or media query.
  // 'class' is common for manual theme toggles like you have.
  darkMode: ["class"],

  // Extend Tailwind's default theme with custom colors, fonts, spacing, etc.
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // These colors often map to the CSS variables defined in your global CSS (e.g., in Portfolio.js <style>)
        // You have similar variables in your Portfolio.js file, so they would likely be configured here.
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)", // Often tied to CSS variables for component libraries
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Common plugin for animations
};
