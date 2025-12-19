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
          light: "#64b5f6",
          main: "#2196f3",
          dark: "#1976d2",
          "100": "#bbdefb",
          "200": "#90caf9",
          "300": "#64b5f6",
          "400": "#42a5f5",
          "500": "#2196f3",
          "600": "#1e88e5",
          "700": "#1976d2",
          "800": "#1565c0",
          "900": "#0d47a1",
        },
        text: {
          secondary: "#1e88e5",
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
          light: "#64b5f6",
          main: "#2196f3",
          dark: "#1976d2",
          "100": "#bbdefb",
          "200": "#90caf9",
          "300": "#64b5f6",
          "400": "#42a5f5",
          "500": "#2196f3",
          "600": "#1e88e5",
          "700": "#1976d2",
          "800": "#1565c0",
          "900": "#0d47a1",
        },
        text: {
          secondary: "#1e88e5",
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
