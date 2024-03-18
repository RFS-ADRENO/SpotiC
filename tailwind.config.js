import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        extend: {
            height: {
                18: "4.5rem",
                83: "20.75rem",
            },
            width: {
                47: "11.75rem",
            },
            minWidth: {
                18: "4.5rem",
                47: "11.75rem",
                70: "17.5rem",
            },
            colors: {
                primary: "#121212",
                secondary: "#B3B3B3",
                subdued: "#A7A7A7"
            },
            keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
            },
            animation: {
                "fade-in": "fade-in 0.3s ease-in-out",
                "tooltip-fade-in": "fade-in 0.2s ease-in-out 0.3s forwards",
            },
        },
    },
    plugins: [
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    "animation-delay": (value) => {
                        return {
                            "animation-delay": value,
                        };
                    },
                },
                {
                    values: theme("transitionDelay"),
                }
            );
        }),
    ],
};
