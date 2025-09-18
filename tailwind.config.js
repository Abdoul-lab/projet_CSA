module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "additional-colorsdark-smooth": "var(--additional-colorsdark-smooth)",
        "additional-colorsline": "var(--additional-colorsline)",
        "grayscalegrayscale-10": "var(--grayscalegrayscale-10)",
        "grayscalegrayscale-100": "var(--grayscalegrayscale-100)",
        "grayscalegrayscale-30": "var(--grayscalegrayscale-30)",
        "grayscalegrayscale-60": "var(--grayscalegrayscale-60)",
        "grayscalegrayscale-70": "var(--grayscalegrayscale-70)",
        "main-colorsbackground-white": "var(--main-colorsbackground-white)",
        "text-colorsblack": "var(--text-colorsblack)",
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
      fontFamily: {
        "heading-h5-bold": "var(--heading-h5-bold-font-family)",
        "large-semibold": "var(--large-semibold-font-family)",
        "medium-medium": "var(--medium-medium-font-family)",
        "medium-semibold": "var(--medium-semibold-font-family)",
        "small-medium": "var(--small-medium-font-family)",
        "small-semibold": "var(--small-semibold-font-family)",
        "xtra-large-bold": "var(--xtra-large-bold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
