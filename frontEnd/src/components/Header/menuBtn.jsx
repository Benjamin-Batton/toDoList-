import React, { useEffect, useState,useCallback } from "react";
import { useDispatch } from "react-redux";
import headerStyle from "./headerStart.module.scss";
import { setTheme } from "../../utils/setTheme.js";
import {useAction} from "../../hooks/useAction.js";
import { useSelector } from "react-redux";
import { changeState } from "./menuReducer.js"
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { hamburgerChangeStyle, menuIsOpen } from "./hamburger/hamburger.js";
import HeaderSearchBarContainer from "./headerSearchBarContainer.jsx";
import cn from "classnames";

export const MenuBtn = (props) => {
	const [menuState,setMenuState] = useState(false) 
	const getMenuState = useSelector((state) => state.menu.menuState);
	useEffect(()=>
	setMenuState(getMenuState)
	,[getMenuState]);
	useEffect(()=>
	   ()=>setMenuState(getMenuState)
	,[]);
	 const actionCreator = useAction(changeState,{menuState:!menuState},menuState);
	const changeMenuState = useCallback((elem)=>
		actionCreator()
	,[actionCreator])
	useCallback(()=>
	   ()=>actionCreator()
	,[]);
	const menuBtnStyle = cn(
		headerStyle["menu-btn"],
		menuState && headerStyle["open"]
	);
	return (
		<div onClick={changeMenuState} className={menuBtnStyle}>
			<div className={headerStyle["menu-btn__burger"]}
				// onClick={hamburgerChangeStyle}
			></div>
		</div>
	);
};
