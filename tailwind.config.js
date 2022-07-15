const spacings = {};
for (let i = -100; i < 500; i += 0.5) {
  spacings[i] = `${i / 4}rem`;
}

const opacities = {};
for (let i = 0; i < 100; i ++) {
  opacities[i] = (i * 0.01).toFixed(2);
}

const colors = {
  primary: {
    DEFAULT: '#0069e5'
  },
  secondary: {
    DEFAULT: '#2c3e4e'
  },
  gray: {
    DEFAULT: '#eee',
  },
  danger: {
    DEFAULT: '#ba1818',
  },
  success: {
    DEFAULT: '#149628'
  },
  yellow: {
    DEFAULT: '#f2ae43',
  }
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '8rem',
        },
      },
      screens: {
        xs: '550px',
        'max-xs': { max: '549px' },
        'max-sm': { max: '639px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '1023px' },
        'max-xl': { max: '1279px' },
      },
      colors,
      borderColors: colors,
      borderRadius: {
        'large': '48px'
      },
      backgroundColors: colors,
      textColor: colors,
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        md: '1rem',
        '3xs': '0.5rem',
        '9p': '0.5625rem',
        '2xs': '0.625rem',
        '11p': '0.6875rem',
        '13p': '0.8125rem',
        '15p': '0.9375rem',
        '28p': '1.75rem',
        '40p': '2.5rem',
        '72p': '4.5rem',
      },
      spacing: spacings,
      minWidth: spacings,
      minHeight: spacings,
      maxWidth: spacings,
      maxHeight: {
        ...spacings,
        content: 'fit-content',
      },
      borderWidth: {
        '1.5': '1.5px',
        6: '6px',
      },
      opacity: opacities,
      zIndex: {
        '-1': -1,
        1: 1,
        100: 100,
        max: 10000000,
      },
      animation: {
        'fade-in': 'fadeIn 150ms ease-in-out',
        'slide-in-up': 'slideInUp 150ms ease-in-out',
        'zoom-in': 'zoomIn 150ms ease-in-out',
      },
      boxShadow: {
        md: '0 3px 6px #00000029',
        'blue-md': '0 0 0.75rem #2680eb57',
        'blue-lg': '0 0.5rem 0.75rem 1px #2680eb57',
        'modal-footer': '0 -3px 10px 1px #0004',
      },
      gridTemplateColumns: {
        '1fr-auto': '1fr auto',
        'auto-1fr': 'auto 1fr',
      },
    },
  },
  plugins: [],
};
