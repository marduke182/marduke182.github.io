const colors = {
  primary: '#ff6200', // Color for buttons or links
  bg: '#fff', // Background color
  white: '#fff',
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
  },
};

const transitions = {
  normal: '0.5s',
};

const fontSize = {
  small: '0.9rem',
  big: '1.8rem',
};

const fontFamily = {
  heading: '"Lato","Helvetica Neue",Helvetica,sans-serif',
  normal: '"Merriweather","PT Serif",Georgia,"Times New Roman",serif',
};

export type Theme = {
  fontFamily: {
    heading: string;
    normal: string;
  };
  fontSize: {
    small: string;
    big: string;
  };
  transitions: {
    normal: string;
  };
  colors: {
    primary: string;
    bg: string;
    white: string;
    grey: {
      dark: string;
      default: string;
      light: string;
      ultraLight: string;
    };
  };
};

const theme: Theme = {
  colors,
  transitions,
  fontSize,
  fontFamily,
};
export default theme;
