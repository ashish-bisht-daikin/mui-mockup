/**
 * @author Ashish Bisht
 * @overview Theme for the application.
 */
"use client";

import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#333",
    },
    secondary: {
      main: "#A7C139",
    },
    info: {
      light: "#37688d",
      main: "#213e5c",
      dark: "#173340",
      contrastText: "#000",
    },
    success: {
      light: "#3a7538",
      main: "#224620",
      dark: "#183116",
      contrastText: "#f5f5f5",
    },
    warning: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    error: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ddd",
    },
    secondary: {
      main: "#A7C139",
    },
    info: {
      light: "#527ba5",
      main: "#37688d",
      dark: "#2c4b66",
      contrastText: "#fff",
    },
    success: {
      light: "#4d8951",
      main: "#3a7538",
      dark: "#2b5230",
      contrastText: "#000",
    },
    warning: {
      light: "#ff8a65",
      main: "#f44336",
      dark: "#c21807",
      contrastText: "#fff",
    },
    error: {
      light: "#ff8a65",
      main: "#f44336",
      dark: "#c21807",
      contrastText: "#fff",
    },
  },
});
