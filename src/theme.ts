import { createTheme, responsiveFontSizes } from '@mui/material';

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

// A custom theme for this app
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffdc95',
      },
      secondary: {
        main: '#ffdc95',
      },
      background: {
        default: '#161616',
      },
      error: {
        main: '#ff1744',
      },
    },
    typography: {
      fontSize: 12.5,
      fontFamily: '\'Rubik\', sans-serif',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            background: '#2b2b2b',
            boxShadow: `0 15px 35px rgba(0, 0, 0, 0.5)`,
            borderRadius: 8,
            zIndex: 0,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: 'inherit',
            textDecorationColor: 'transparent',
          },
        },
      },
    },
  }),
);

export default theme;
