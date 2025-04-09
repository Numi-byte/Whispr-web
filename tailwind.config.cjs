/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cosmic: "#0F0A1E",
                nebula: "#2A1454",
                plasma: "#7C3AED",
                quantum: "#4F46E5",
                singularity: "#1E1B4B",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backdropBlur: {
                '4xl': '72px',
            },
        },
    },
    plugins: [],
};
