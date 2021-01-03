import React from "react";
import { useRouteMatch, useLocation } from "react-router-dom";
import { useAction } from "../hooks/useAction.js";
import { useStore, useSelector } from "react-redux";
import { getAllTasks } from "../components/Body/rightPart/reducer/tasksReducer.js";

export const withTasks = (WrappComponent) => {
  return (props) => {
    const location = useLocation();
    const token = useStore().getState().auth.login.token;
    // const prevTasks = useSelector((state) => state.tasks.tasksArr);
    //  useAction(getAllTasks, { url: location.pathname , headers:{Authorization: `Bearer ${token}`}},{prevTasks});
    useAction(getAllTasks, {
      url: location.pathname,
      headers: { Authorization: `Bearer ${token}` },
    });
    const tasks = useSelector((state) => state.tasks);
    console.log("tasksInHoc", tasks);

    if (!tasks.expiredTasks && !tasks.todayTasks) {
      return <div>Preload</div>;
    }
    return <WrappComponent {...props} tasks={tasks} />;
  };
};
