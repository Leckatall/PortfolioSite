import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme:  {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#3b82f6",       // blue-500
                    foreground: "#ffffff",
                    50: "#eff6ff",
                    100: "#dbeafe",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    900: "#1e3a8a",
                },
                secondary: {
                    DEFAULT:  "#6b7280",       // gray-500
                    foreground: "#ffffff",
                    100: "#f3f4f6",
                    500: "#6b7280",
                    600: "#4b5563",
                    800: "#1f2937",
                },
                muted: {
                    DEFAULT: "#f3f4f6",       // gray-100
                    foreground: "#6b7280",    // gray-500
                },
                border: "#e5e7eb",          // gray-200
                card: "#ffffff",
                accent: {
                    DEFAULT: "#f59e0b",       // amber-500
                    foreground: "#000000",
                },
            },
        },
    },
    plugins:  [],
};

export default config;