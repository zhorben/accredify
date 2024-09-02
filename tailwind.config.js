import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#151F32',
        secondary: '#493DF5',
        border: '#D0D2D6',
        divider: '#E8E9EB',
        hover: "#F3F4F5",
        text: {
          primary: '#5B6270',
          heading: '#151F32',
          link: '#493DF5',
        },
      },
      boxShadow: {
        modal: '0px 0px 10px 0px rgba(0, 0, 0, 0.15)',
      },
      width: {
        'avatar-sm': '1.5rem',
        'avatar-md': '2.5rem',
        'avatar-lg': '3rem',
      },
      height: {
        'avatar-sm': '1.5rem',
        'avatar-md': '2.5rem',
        'avatar-lg': '3rem',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.25rem',
        'xl': '1.75rem',
      },
      lineHeight: {
        default: '1.5rem',
        lg: "2rem",
        xl: "2.75rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        'html, body, #root': {
          height: '100%',
          margin: '0',
          padding: '0',
        },
        'body, #root': {
          display: 'flex',
          flexDirection: 'column',
        },
        html: {
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '16px',
          color: theme('colors.text.primary'),
          lineHeight: theme('lineHeight.default')
        },
      }),
        addComponents({
          '.modal-container': {
            '@apply rounded-[0.25rem] shadow-modal bg-white p-[0.75rem]': {},
          },
          '.h2': {
           '@apply font-bold text-black text-xl leading-xl': {},
          },
          '.h4': {
           '@apply font-bold text-black text-lg leading-lg': {},
          },
          '.h6': {
           '@apply font-bold text-text-primary text-sm leading-default': {},
          },
          '.body1': {
            '@apply text-text-primary text-base': {},
          },
          '.body2': {
            '@apply text-text-primary text-sm': {},
          },
          '.link': {
            '@apply text-text-link text-sm font-bold': {},
          },
        })
    }),
  ],
}
