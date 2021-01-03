import React, { useEffect } from "react";
import AddTask from "./elements/addTask.jsx";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { TodayTasksList } from "./tasksLists/todayTasksList.jsx";
import { ExpiredTasksList } from "./tasksLists/expiredTasksList.jsx";
import { useTasks } from "../../../../hooks/useTasks.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Header } from "./elements/header.jsx";
import { withTasks } from "../../../../hoc/withTasksHoc.jsx";
import { getShortDate } from "../../../../utils/getShortDate.js";
import { Title } from "./elements/title.jsx";
import style from "./contentSections.module.scss";

const Today = (props) => {
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
      <Title url={"Today"} titleDate={getShortDate()} />
      <ExpiredTasksList error={error} taskList={responseData} />
      <TodayTasksList
          updateTask={updateTask}
        deleteTask={deleteTask}
        error={error}
        createTask={createTask}
        taskList={responseData}
      />
      {/* <TasksContainer /> */}
    </div>
  );
};

export default compose(withRouter)(Today);
