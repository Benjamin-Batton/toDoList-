import React, { useState } from "react";
import HeaderStyle from "./headerStart.module.scss";
import { connect } from "react-redux";
import { removeUserData } from "../Auth/loginReducer.js";
import Button from "@material-ui/core/Button";
import { ThemeChange } from "./themeChange.jsx";

const RightControl = (props) => {
  const removeUserAuthData = (elem) => {
    elem.
      elem.preventDefault();
    props.removeUserData();
  };
  return (
    <div className={HeaderStyle.rightControl}>
      <Button
        size={"small"}
        variant="contained"
        color="default"
        onClick={removeUserAuthData}
      >
        Выйти
      </Button>
      <ThemeChange />
    </div>
  );
};

export default connect(null, { removeUserData })(RightControl);
