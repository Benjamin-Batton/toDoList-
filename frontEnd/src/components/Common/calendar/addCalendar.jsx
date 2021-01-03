import React, { useState } from "react";
import { Calendar } from "./calendar.jsx";
import { Button } from "../buttons/button/button.jsx";
import { dateFormatter } from "../../../utils/dateFormatter.js";
import calendarStyle from "./calendar.module.scss";

export const Dates = (props) => {
  let [viewCalendar, setViewCalendar] = useState(false);
  let btnColor = props.url==='/incoming'? 'buttonGreen' : 'ButtonWithAddTask';
  let buttonOnClicked = (elem) => {
    setViewCalendar(true);
  };
  let closeCalendar = (e) => {
    setViewCalendar(false);
  };
  // document.addEventListener('click',(e)=>{
  //     if(!viewCalendar) return;
  //     setViewCalendar(false)});

  return (
    <>
      <Button
        buttonVersion={"buttonGreen"}
        onClicked={buttonOnClicked}
      >
        {dateFormatter(new Date().getDate(), new Date().getMonth())}
      </Button>
      {viewCalendar && (
        <div className={calendarStyle.calendarModal}>
          <div className={calendarStyle.calendarPosition}>
            <Calendar onClose={closeCalendar} />
          </div>
        </div>
      )}
    </>
  );
};
