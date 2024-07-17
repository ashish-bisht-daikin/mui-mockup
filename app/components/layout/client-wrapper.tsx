"use client";
import { ReactNode, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { getCookie, setCookie } from "@/app/helpers/cookie";
import { subscribe, unsubscribe } from "@/app/event";
import { darkTheme, lightTheme } from "@/app/theme";
import { ThemeContext } from "@/app/context/theme-context";
const ClientWrapper = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const fetchTheme = async () => {
      // const existingTheme = await getCookie("theme");
      // if(existingTheme){
      //   setTheme(existingTheme);
      // }
    };
    fetchTheme();
  }, []);

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme)
  }

  console.log(theme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <ThemeContext.Provider value={[theme, updateTheme]}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ClientWrapper;
