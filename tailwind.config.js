/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
        fontFamily: {
            'inherit': ['inherit'],
        },
        colors: {
            'btn': '#312EB5',
        },
        extend: {},
    },
    plugins: [],
}