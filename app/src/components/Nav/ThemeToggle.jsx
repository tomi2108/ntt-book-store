import { AppContext } from "App";
import Clickable from "components/Utils/Clickable";
import { useContext } from "react";
import MoonIcon from "static/MoonIcon";
import SunIcon from "static/SunIcon";

const ThemeToggle = () => {
  const { theme , toggleTheme } = useContext(AppContext);
  return (
    <>
      <Clickable className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? (
          <SunIcon color="white" />
        ) : (
          <MoonIcon color="black" />
        )}
      </Clickable>
      <div className="theme-toggle-shadow"></div>
    </>
  );
};

export default ThemeToggle;