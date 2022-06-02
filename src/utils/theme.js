import { createTheme } from '@material-ui/core/styles';

const archBlue = '#2d2d2d';
const arcOrange = '#FFBA60';
const arcGrey = '#848199';
export default createTheme({
  palette: {
    common: {
      blue: `${archBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${archBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Inter',
      fontWeight: 700,
      fontSize: '60px',
      lineHeight: '122.5%',
    },
    h2: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '40px',
    },
    h3: {
      fontFamily: 'Inter',
      fontWeight: '600',
      fontSize: '36px',
    },
    h4: {
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: '30px',
    },
    h5: {
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: '22px',
    },
    subtitle1: {
      fontSize: '18px',
      fontWeight: 300,
      fontFamily: 'Inter',
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: 400,
      fontFamily: 'Inter',
    },
    body1: {
      fontSize: '15px',
      fontWeight: 400,
      fontFamily: 'Inter',
      color: arcGrey,
      lineHeight: '22px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      fontFamily: 'Inter',
      color: '#2D3748',
    },
    caption: {
      fontFamily: 'Inter',
      fontSize: '20px',
      fontWeight: 400,
      color: `${arcGrey}`,
      lineHeight: '30.5px',
    },
    label: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '400',
    },
    input: {
      fontFamily: 'Inter',
      fontWeight: '400',
      fontSize: '14px',
      color: '#2D3748',
      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #899298',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #3c74cc',
        boxShadow: '0 0 0 3px #dceefc',
      },
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: archBlue,
        fontSize: '1rem',
      },
    },
    MuiTextField: {
      root: {
        '& .MuiFormHelperText-root': {
          fontWeight: 400,
          fontSize: '14px',
          fontFamily: 'Inter',
        },
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `2px solid ${archBlue}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${archBlue}`,
        },
      },

      root: {
        color: arcGrey,
        fontWeight: 300,
      },
    },
  },
});
