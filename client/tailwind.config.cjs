/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        ".index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                search_icon: '#F5385D',
            }
        },
    },
    plugins: [],
}