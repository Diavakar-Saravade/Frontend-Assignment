import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#025982", light: "#fff" },
    secondary: { main: "#025075", light: "#e8f1f9" },
    background: { default: "#e0e0e0 " },
    text: { primary: "#212121", secondary: "#212121", disabled: "#3c3c3c" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    body1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Poppins, sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});

export default theme;
