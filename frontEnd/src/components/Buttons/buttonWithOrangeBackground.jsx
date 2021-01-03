import React from "react";
import buttonStyle from "./buttons.module.scss";

export const ButtonWithOrangeBackground = ({ text = "", children }) => {
  return (
    <div className={buttonStyle.buttonWithOrangeBackground}>
      {text ? text : children}
    </div>
  );
};
