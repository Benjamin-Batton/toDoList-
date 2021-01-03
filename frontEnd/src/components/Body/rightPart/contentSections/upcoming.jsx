import React, { useEffect } from "react";
import AddTask from "./elements/addTask.jsx";
import { withRouter } from "react-router-dom";
import { UpcomingTasksList } from "./tasksLists/upcomingTasksList.jsx";
import { Header } from "./elements/header.jsx";
import { useTasks } from "../../../../hooks/useTasks.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import { compose } from "redux";
import { Title } from "./elements/title.jsx";
import style from "./contentSections.module.scss";

const Upcoming = (props) => {
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
  }, []);
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <div className={style.contentContainer}>
      <Title url={"Upcoming"} />
      <UpcomingTasksList
          updateTask={updateTask}
        deleteTask={deleteTask}
        error={error}
        createTask={createTask}
        taskList={responseData}
      />
    </div>
  );
};

export default compose(withRouter)(Upcoming);
