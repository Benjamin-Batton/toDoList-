import React, { useState } from "react";
import HeaderStyle from "./headerStart.module.scss";
import { setTheme } from "../../utils/setTheme.js";
import Button from "@material-ui/core/Button";

export const ThemeChange = (props) => {
  const [theme, setThemeStyle] = useState("dark");
  const changeTheme = (elem) => {
    elem.
    elem.preventDefault();
    if (theme === "light") {
      setTheme("light");
      setThemeStyle("dark");
    } else {
      setTheme("dark");
      setThemeStyle("light");
    }
  };
  return (
    <Button
      onClick={changeTheme}
      size={"small"}
      variant="contained"
      color="primary"
    >
      {theme}
    </Button>
  );
};
