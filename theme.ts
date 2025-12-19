"use client";
import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
    fontSize: 13,

    h1: {
      fontSize: 36,
      fontWeight: 700,
    },
    h2: {
      fontSize: 22,
      fontWeight: 700,
    },
    h3: {
      fontSize: 14,
      fontWeight: 700,
    },
    h4: {
      fontSize: 14,
      fontWeight: 700,
    },
    body1: {
      fontSize: 13,
      fontWeight: 400,
    },
  },
  // cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        secondary: {
          light: "#d7b465",
          main: "#ca983d",
          dark: "#c08231",
          "100": "#ecdeba",
          "200": "#e1c98e",
          "300": "#d7b465",
          "400": "#d0a64b",
          "500": "#ca983d",
          "600": "#c68f37",
          "700": "#c08231",
          "800": "#b8752c",
          "900": "#ab6328",
        },
        text: {
          secondary: "#c68f37",
        },
        background: {
          default: grey[200],
          paper: "white",
        },
      },
    },
    dark: {
      palette: {
        secondary: {
          light: "#d7b465",
          main: "#ca983d",
          dark: "#c08231",
          "100": "#ecdeba",
          "200": "#e1c98e",
          "300": "#d7b465",
          "400": "#d0a64b",
          "500": "#ca983d",
          "600": "#c68f37",
          "700": "#c08231",
          "800": "#b8752c",
          "900": "#ab6328",
        },
        text: {
          secondary: "#c68f37",
        },
        common: {
          black: "#fff",
          white: "#000",
        },
        background: {
          default: grey[700],
          paper: grey[800],
        },
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          width: "fit-content",
        },
      },
    },
  },
});

export default theme;
