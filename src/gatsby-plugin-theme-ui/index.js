export default {
  initialColorMode: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#000',
    background: '#fff',
    uconn: "#000E2F",
  },
  fonts: {
    body: '"Lora", serif',
    monospace: 'Roboto Mono", Menlo, monospace',
    heading: "'Lora', serif",
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 600,
  },
  fontSizes: [16, 18, 24, 28, 36, 48, 64, 72, 96, 128],
  sizes: {
    container: 1100,
    wide: 1280,
  },
  text: {
    default: {
      textAlign: 'justify',
      fontSize: 1,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      textAlign: 'justify'
    },
    heading: {
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    small: {
      fontSize: 0,
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'uconn',
      fontFamily: 'body',
      px: 3,
      my: 3,
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all 0.2s ease-in-out',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.125)',
      ':hover': {
        transform: 'scale(1.0625)',
        boxShadow:
          '0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)',
      },
    },
  },
  radii: {
    small: 4,
    default: 8,
    extra: 12,
    ultra: 16,
    circle: 99999,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontSize: 1,
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.4s',
      m: 0,
      p: 0,
      img: {
        maxWidth: '100%',
        height: 'auto',
      },
      h1: {
        variant: 'text.heading',
        fontSize: 5,
      },
      h2: {
        variant: 'text.heading',
        fontSize: 3,
      },
      h3: {
        variant: 'text.heading',
        fontSize: 1,
      },
      a: {
        color: 'primary',
        ':hover': {
          color: 'secondary',
        },
      },
      p: {
        textAlign: 'justify',
      },
    },
  },
  navlink: {
    textDecoration: 'none',
    ':hover,:focus': {
      color: 'primary',
    },
  },
};
