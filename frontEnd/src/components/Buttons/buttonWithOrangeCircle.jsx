import React from "react";
import buttonStyle from "./buttons.module.scss";
import PlusIcon from "../../images/plus.svg";

export const ButtonWithOrangeCircle = ({ text = "", children }) => {
  return (
    <div className={buttonStyle.orangeReverseButton}>
      <div className={buttonStyle.circleIcon}>
        <div className={buttonStyle.plusIcon}>
          <PlusIcon width={"10px"} height={"10px"} />
        </div>
      </div>
      <div>{text ? text : children}</div>
    </div>
  );
};
