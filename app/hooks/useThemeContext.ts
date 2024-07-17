"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

const useThemeContext = () => {
    const [theme, updateTheme] = useContext(ThemeContext);
    return [theme, updateTheme] as const;
}

export default useThemeContext