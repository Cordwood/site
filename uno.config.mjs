import { defineConfig } from "unocss";

export default defineConfig({
    preflights: [
        {
            getCSS: ({ theme }) => `
                .astro-code {
                    border-radius: 0.375rem;
                    padding: 0.5rem;
                }

                a {
                    transition: opacity 0.2s ease-in-out;
                    color: ${theme.colors.accent} !important;
                    text-decoration: unset !important;
                }

                a:hover {
                    opacity: 0.6;
                }

                h1 {
                    font-size: 1.75rem !important;
                    font-weight: 500 !important;
                }

                h2 {
                    font-size: 1.5rem !important;
                }

                h3 {
                    font-size: 1.25rem !important;
                }

                h4 {
                    font-size: 1.15rem !important;
                }
            `
        }
    ],
    theme: {
        fontFamily: {
            sans: "Whitney",
            header: "Whitney",
        },
        boxShadow: {
            default: "0 1px 0 rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 10%)",
        },
        colors: {
            // transparent: "transparent",
            // current: "currentColor",

            // Dark mode
            "dark": "#2e3136",
            "light": "#ffffff",

            // Text
            "tdark": "#dcddde",
            "tmuted": "#a3a6aa",
            "tlight": "#ffffff",

            // Cards
            "card": "#20222599",

            // Accents
            "accent": "#7289da",
            "accent-dimmed": "#7289da99",
            "green": "#43b581",
            "yellow": "#faa61a",
            "red": "#f04747",
        }
    },
})