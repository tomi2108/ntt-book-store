/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { styledtheme } from "styles/styles.js";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  const [styles, setStyle] = useState(styledtheme("dark"));

  useEffect(() => {
    localStorage.getItem("BookstoreTheme")
      ? setTheme(localStorage.getItem("BookstoreTheme"))
      : setTheme("dark");
  }, []);

  useEffect(() => {
    setStyle(styledtheme(theme));
  }, [theme]);

  const toggleTheme = () => {
    localStorage.setItem("BookstoreTheme", theme === "dark" ? "light" : "dark");
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { styles, theme, toggleTheme };
};
