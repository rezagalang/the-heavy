/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        roboto: 'Roboto',
      },
      backgroundImage: {
        'hero': "url('/public/img/hero.png')",
        'contact': "url('/public/img/bg-contact.png')",
        'about': "url('/public/img/hero-about.png')",
        'divider': "url('/public/img/divider-about.png')",
        'footer': "url('/public/img/footer.png')",
      },
      container: {
        padding: {
          center: true,
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        primary: '#06283D',
        secondary: '#F2921D',
        accent: '#1363DF',
        secondaccent: '#083478',
        ambers: '#FF8A00',
        smoke: '#F9F9FB',
        silver: '#CDCDCD',
        silver2: '#FBFBFB',
        silver3: '#C4C4C4',
        header: '#06283D80',
        paragraph: '#333333',
        wa: '#00A72F',
        fb: '#004D89',
        twitter: '#008FFF',
      },
    },
  },
  plugins: [],
}
