import "./transition.scss";
import React, { useState } from "react";
import menuStyle from "./dropDownMenu.module.scss";
import cn from "classnames";
import { createRandomKey } from "../../utils/createRandomKey.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const DropDownMenu = ({
  children,
  isOpen,
  menuItemsArr = [],
  cnameMenuText,
  cnameMenuItems,
}) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={{
        appear: 300,
        enter: 300,
        exit: 600,
      }}
      unmountOnExit
      classNames={"main-menu"}
    >
      <div className={menuStyle.dropDownMenu}>
        {menuItemsArr.map((value, key) => {
          return (
            <MenuItem
              key={parseInt(createRandomKey())}
              value={value.dpname}
              cnameMenuItems={cnameMenuItems}
            />
          );
        })}
      </div>
    </CSSTransition>
  );
};
const MenuItem = ({ cnameMenuItems, value = "" }) => {
  const style = cnameMenuItems ? cnameMenuItems : menuStyle.menuItem;
  return <div className={style}>{value}</div>;
};
