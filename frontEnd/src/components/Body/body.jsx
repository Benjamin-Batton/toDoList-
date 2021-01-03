import React, { useState,useEffect  } from "react";
import BodyStyle from "./body.module.scss";
import { Button } from "../Common/buttons/button/button.jsx";
import { useSelector } from "react-redux";
import LeftPart from "./leftPart/leftPart.jsx";
import { Route } from "react-router-dom";
import { Today } from "./rightPart/contentSections/today.jsx";
import RightPart from "./rightPart/rightPart.jsx";

export const Body = () => {
  const [menuState,setMenuState] = useState(false);
  const getMenuState = useSelector((state) => state.menu.menuState);
  useEffect(()=>{
    let isSubscribed = true;
    setMenuState(getMenuState)
    return ()=>(isSubscribed=false)
  },[getMenuState])
  useEffect(()=>{
    console.log("ТЕСТИРУЕМ ПОЛУЧЕНИЕ MENUSTATE BODY (КОМПОНЕНТ ВМОНТИРОВАН)")
    return ()=>{
      console.log("ТЕСТИРУЕМ ПОЛУЧЕНИЕ MENUSTATE BODY (КОМПОНЕНТ РАЗМОНТИРОВАН)")
    }
  },[])
  return (
    <div className={BodyStyle.bodyContainer}>
      <LeftPart menuState={menuState} />
      <RightPart menuState={menuState} />
    </div>
  );
};
