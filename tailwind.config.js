/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat'],
                nunito: ['Nunito'],
                poppins: ['Poppins'],
            },
            colors: {
                primaryGreen: '#3A5A40',
                secondaryGreen: '#588157',
            },
        },
    },
    plugins: [],
};
