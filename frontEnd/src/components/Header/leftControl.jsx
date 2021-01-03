import React, { useState, useRef } from "react";
import HeaderStyle from "./headerStart.module.scss";
import { setTheme } from "../../utils/setTheme.js";

import { hamburgerChangeStyle, menuIsOpen } from "./hamburger/hamburger.js";
import HeaderSearchBarContainer from "./headerSearchBarContainer.jsx";
import cn from "classnames";
import { MenuBtn } from "./menuBtn.jsx";

export const LeftControl = ({ clickAction }) => {
	const leftControlRef = useRef(null);
	return (
		<div ref={leftControlRef} className={HeaderStyle.leftControl}>
			<MenuBtn />
			<HeaderSearchBarContainer leftControlRef={leftControlRef} />
		</div>
	);
};
