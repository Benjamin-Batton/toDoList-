import AppStyle from "./application.module.scss";
import { Header } from "../../components/Header/header.jsx";
import { Body } from "../../components/Body/body.jsx";
import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/footer.jsx";
import { Route, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { removeUserData } from "../../components/Auth/loginReducer.js";

export const Application = (props) => {
	// const [auth, setAuth] = useState(false);
	// useEffect(() => {
	//   setAuth(props.isAuth);
	// }, [props.isAuth]);

	return (
		<div className={AppStyle.Application}>
			<Header />
			<Body />
		</div>
	);
};
// const mapStateToProps = (store) => ({
//   isAuth: store.auth.login.state,
// });

// export default connect(mapStateToProps, {})(Application);
