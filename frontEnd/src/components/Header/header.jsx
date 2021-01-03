import React, { useState } from "react";
import HeaderStyle from "./headerStart.module.scss";
import { connect } from "react-redux";
import { removeUserData } from "../Auth/loginReducer.js";
import { Button } from "../Common/buttons/button/button.jsx";
import { LeftControl } from "./leftControl.jsx";
import RightControl from "./rightControl.jsx";

export const Header = () => {
	let [offer, onchangeOffer] = useState("");
	return (
		<div className={HeaderStyle.headerContainer}>
			<LeftControl />
			<RightControl />
		</div>
	);
};
