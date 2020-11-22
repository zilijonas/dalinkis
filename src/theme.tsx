import { unstable_createMuiStrictModeTheme as createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const themeConfig = createMuiTheme({
  palette: {
    primary: {
      main: '#343a40',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f0f8ff',
      paper: '#fefefe',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export const theme = responsiveFontSizes(themeConfig);
