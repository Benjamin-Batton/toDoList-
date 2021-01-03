import React, { useEffect, useState } from "react";
import { withRouter, useRouteMatch } from "react-router-dom";
import { withTasks } from "../../../../../hoc/withTasksHoc.jsx";
import { getAllTasks } from "../../reducer/tasksReducer.js";
import { useTasks } from "../../../../../hooks/useTasks.js";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import style from "../contentSections.module.scss";
import { Task } from "../elements/taskItem.jsx";
import { Header } from "../elements/header.jsx";

export const ExpiredTasksList = ({
  taskList,
  error,
  createTask,
  deleteTask,
  updateTask,
}) => {
  return (
    <div className={style.tasksList}>
      <Header url={"Expired"} />
      {taskList &&
        taskList.map((elem, index) => {
          return (
            <Task
              updateTask={updateTask}
              deleteTask={deleteTask}
              key={elem._id}
              text={elem.task}
              textId={elem._id}
            />
          );
        })}
      <div>{error && error}</div>
    </div>
  );
};
