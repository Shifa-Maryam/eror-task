/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                PTSerif: 'PT Serif Collection',
                Montserrat: 'Montserrat'
            },
            colors: {
                primary: '#9D335C',
                whiteText: '#f5f5f5',
                swiper: '#F4B0B0',
                submitFooter: '#FF9292',
                textDesk: '#3D3D3D'
            },
        },
    },
    plugins: [],
};
