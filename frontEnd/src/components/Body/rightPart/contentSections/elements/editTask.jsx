import React, { useEffect, useState } from "react";
import { withRouter, useRouteMatch } from "react-router-dom";
import { withTasks } from "../../../../../hoc/withTasksHoc.jsx";
import { getAllTasks } from "../../reducer/tasksReducer.js";
import { connect } from "react-redux";
import { compose } from "redux";
import style from "../contentSections.module.scss";

export const EditTask = ({
  value,
  textId,
  updateTask,
  changeEditTaskState,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const onSaveTask = (elem) => {
    elem.preventDefault();
    changeEditTaskState();
    updateTask({ body: { task: inputValue }, id: textId });
  };
  const onCancel = (elem) => {
    elem.preventDefault();
    changeEditTaskState();
  };
  return (
    <div className={style.editTask}>
      <input
        value={inputValue}
        onChange={(elem) => {
          setInputValue(elem.target.value);
        }}
      />
      <button onClick={onCancel}>отменить</button>
      <button onClick={onSaveTask}>сохранить</button>
    </div>
  );
};
