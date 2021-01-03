import React from "react";
import style from "./linkItem.module.scss";
import { Redirect, Link } from "react-router-dom";

export const LinkItem = ({
  cname,
  children,
  onClicked,
  routename,
  url,
}) => {
  const className = cname ? cname : style["defaultLink"];
  const onClickHandler = (elem) => {
    elem.preventDefault();
    onClicked(url);
  };
  return (
    <>
      {onClicked ? (
        <div onClick={onClicked} className={className}>
          {children}
        </div>
      ) : (
        <Link to={url} replace className={className}>
          {children}
        </Link>
      )}
    </>
  );
};
