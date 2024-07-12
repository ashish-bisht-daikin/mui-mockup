/**
 * @author Ashish Bisht
 * @overview Theme for the application.
 */

"use client";

import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
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
