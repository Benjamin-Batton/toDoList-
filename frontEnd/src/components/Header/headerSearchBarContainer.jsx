import React, { useState, useRef, useEffect } from "react";
import { compose } from "redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import HeaderStyle from "./headerStart.module.scss";
import { Button } from "../Common/buttons/button/button.jsx";
import { setTheme } from "../../utils/setTheme.js";
import SearchIcon from "../../images/search.svg";
// import SearchIcon from "../../images/icons8-plus.svg";
import cn from "classnames";
import { fromPairs } from "lodash";

// const SearchControl = ({
// 	input,
// 	label,
// 	touched,
// 	type,
// 	value,
// 	children = null,
// }) => {
// 	const hasError = touched && error;
// 	const cnStyle = cn(HeaderStyle.searchControl);
// 	console.log("value", value);
// 	return (
// 		<div className={cnStyle}>
// 			{children || (
// 				<input {...input} placeholder={type} value={value} type={type} />
// 			)}
// 		</div>
// 	);
// };

const SearchControl = (props) => {
	const cnStyle = cn(HeaderStyle.searchControl);
	const inputHandler = (elem) => {
		const splitClassNames = props.leftControlRef.current.className.split(" ");
		splitClassNames[1]
			? (props.leftControlRef.current.className = splitClassNames[0])
			: (props.leftControlRef.current.className += ` ${HeaderStyle["active"]}`);
	};

	return (
		<>
			<input
				onFocusCapture={inputHandler}
				onBlurCapture={inputHandler}
				{...props.input}
				className={cnStyle}
				placeholder={props.type}
				type={props.type}
			/>
		</>
	);
};

const Search = ({ name, type, label, leftControlRef }) => {
	return (
		<Field
			leftControlRef={leftControlRef}
			name={name}
			type={type}
			component={SearchControl}
			label={label}
		/>
	);
};

const HeaderSearchBarContainer = (props) => {
	return (
		<div className={HeaderStyle.searchPosts}>
			<div className={HeaderStyle.searchIcon}>
				<SearchIcon />
			</div>
			<Search
				leftControlRef={props.leftControlRef}
				name={"search"}
				type={"search"}
			/>
			<div
				onClick={(elem) => {
					elem.preventDefault();
					props.history.push("/headsa");
				}}
			>
				FAQ
			</div>
			<div className={HeaderStyle["line-container"]}>
				<i className={HeaderStyle["line"]}></i>
				<i className={HeaderStyle["line"]}></i>
			</div>
		</div>
	);
};

export default compose(
	withRouter,
	reduxForm({ form: "HeaderSearchBar" })
)(HeaderSearchBarContainer);
