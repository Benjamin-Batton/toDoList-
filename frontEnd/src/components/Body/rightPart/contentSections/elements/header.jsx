import React, { useEffect, useState } from "react";
import { compose } from "redux";
import style from "../contentSections.module.scss";
import { apiApp as routes } from "../../../../../api/routeApi/app/_apiApp.js";

export const Header = ({ url, headDate = [] }) => {
  const text = headDate.map((value, index) => <p key={index}>{value}</p>);

  return (
    <header className={style.header}>
      {url === "Today" ? (
        <h4>
          <div>{url}</div>
          <div className={style.headDate}>{text}</div>
        </h4>
      ) : (
        <h4>{url}</h4>
      )}
    </header>
  );
};
