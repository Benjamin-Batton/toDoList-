import React, { useEffect, useState } from "react";
import style from "../contentSections.module.scss";

export const Title = ({ url, titleDate }) => {
  // const text = titleText.map((value, index) =>
  //    <p>{value}</p>
  // );
  return (
    <div className={style.title}>
      <h2>{url}</h2>
      {titleDate && (
        <div className={style.titleDate}>
          {titleDate.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      )}
    </div>
  );
};
