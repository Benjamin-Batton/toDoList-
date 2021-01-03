import React from "react";
import buttonSvgStyle from "./elements.module.scss"
export const ButtonSvg = (props)=>{
   return (
       <button className={buttonSvgStyle.buttonSvg} >
            {props.children? props.children : "ic"}
       </button>
   )
}