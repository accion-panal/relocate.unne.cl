/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // backgroundImage: {
      //   'img-departamento': "url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690906191/Projects/unne/img/Invertir/UNIDADES_NUEVAS__DEPARTAMENTO_ffxlui.webp')",
      //   'img-estacionamiento': "url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690906035/Projects/unne/img/Invertir/UNIDADES_NUEVAS__ESTACIONAMIENTO_ag2mc7.webp')",
      //   'img-bodega': "url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690906185/Projects/unne/img/Invertir/UNIDADES_NUEVAS__BODEGA_oxyv3r.webp')",
      // },
      colors: {
        primary: {
          DEFAULT: '#F8B434',
          opacity: '#F8B434d4',
          ligth: '#f4c671',
          300: '#f7c334',
          400: '#f5be24',
        },
        secondary: {
          DEFAULT: '#890700',
          opacity: '#890700d4',
          ligth: '#b70b02',
          300: '#7c0701',
          400: '#650500',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
