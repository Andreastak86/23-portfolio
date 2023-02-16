/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "color-main": "#FEFAE0",
                "color-light": "#FAEDCD",
                "color-brown": "#D4A373",
                "color-l-green": "#E9EDC9",
                "color-d-green": "#CCD5AE",
                "color-text": "#593A1B",
            },
            screens: {
                xxs: "375px",
                xs: "425px",
            },
        },
    },
    plugins: [],
};
