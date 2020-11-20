import { createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif;",
    fontSize: 16,
    h1: {
      fontSize: "9rem",
      "@media (max-width: 800px)": {
        fontSize: "6rem",
        paddingBottom: "1rem",
      },

      fontWeight: 900,
    },
    h4: {
      "@media (max-width: 1200px)": {
        fontSize: "2rem",
      },
      "@media (max-width: 800px)": {
        fontSize: "1.5rem",
      },
    },
  },

  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#FF0000",
    },
  },
});

export default theme;
