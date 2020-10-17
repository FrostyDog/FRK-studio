import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif;",
    fontSize: 16,
    h1: {
      fontSize: "9rem",
      fontWeight: 900,
    }
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
