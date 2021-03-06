import React, { useEffect, useState } from "react";
import { withRouter, useRouteMatch, useLocation } from "react-router-dom";
import { withTasks } from "../../../../../hoc/withTasksHoc.jsx";
import { getAllTasks } from "../../reducer/tasksReducer.js";
import { useTasks } from "../../../../../hooks/useTasks.js";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import style from "../contentSections.module.scss";
import { Task } from "../elements/taskItem.jsx";
import AddTask from "../elements/addTask.jsx";
import { Header } from "../elements/header.jsx";

export const UpcomingTasksList = ({
  taskList,
  error,
  createTask,
  deleteTask,
  updateTask
}) => {
  return (
    <div className={style.tasksList}>
      <Header url={"Upcoming"} />
      {taskList &&
        taskList.map((elem, index) => (
          <Task
            updateTask={updateTask}
            deleteTask={deleteTask}
            key={elem._id}
            text={elem.task}
            textId={elem._id}
          />
        ))}
      <AddTask createTask={createTask} />
      <div>{error && error}</div>
    </div>
  );
};
