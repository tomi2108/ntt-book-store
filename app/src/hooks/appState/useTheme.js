/* eslint-disable no-undef */
import { useLocalStorage } from "hooks/utils/useLocalStorage.js";
import { useEffect, useState } from "react";
import { styledtheme } from "styles/styles.js";

export const useTheme = () => {

  const { theme,themeStorage } = useLocalStorage("BookstoreTheme","theme");
  const [styles, setStyle] = useState(styledtheme(theme));


  useEffect(() => {
    const themeLocal = themeStorage.getItem();
    if(!themeLocal) themeStorage.setItem("dark");
  }, []);

  useEffect(() => {
    setStyle(styledtheme(theme));
  }, [theme]);

  const toggleTheme = () => {
    themeStorage.setItem(theme === "dark" ? "light" : "dark");
  };

  return { styles, theme, toggleTheme };
};
