import { useEffect, useState } from "react";
import { styledtheme } from "styles/styles.js";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  const [styles, setStyle] = useState(styledtheme(theme));

  useEffect(() => setStyle(styledtheme(theme)), [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { styles, theme, toggleTheme };
};
