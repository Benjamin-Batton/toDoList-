import React, { useEffect } from "react";
import AddTask from "./elements/addTask.jsx";
import { withRouter } from "react-router-dom";
import { Header } from "./elements/header.jsx";
import { useTasks } from "../../../../hooks/useTasks.js";
import { TodayTasksList } from "./tasksLists/todayTasksList.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import { compose } from "redux";
import { Title } from "./elements/title.jsx";
import style from "./contentSections.module.scss";

const Inbox = (props) => {
  const {
    responseData,
    loading,
    error,
    getTasks,
    createTask,
    deleteTask,
    updateTask
  } = useTasks();
  useEffect(() => {
    getTasks();
    console.log("UseEffect in Today component is run")
  }, []);
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <div className={style.contentContainer}>
      <Title url={"Inbox"} />
      <TodayTasksList
        updateTask={updateTask}
        deleteTask={deleteTask}
        error={error}
        createTask={createTask}
        taskList={responseData}
      />
    </div>
  );
};

export default compose(withRouter)(Inbox);
