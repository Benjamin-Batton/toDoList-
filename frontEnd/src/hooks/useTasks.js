import React, { useState, useCallback } from "react";
import { api } from "../api/fetchApi/api.js";
import { createError } from "../utils/createError.js";
import  errorNames  from "../utils/createError.js";
import { useRouteMatch, useLocation } from "react-router-dom";
import { useAction } from "../hooks/useAction.js";
import { useStore, useSelector } from "react-redux";
import { getAllTasks } from "../components/Body/rightPart/reducer/tasksReducer.js";

export const useTasks = () => {
  const url = useLocation().pathname;
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = useStore().getState().auth.login.token;
  const getTasks = useCallback(() => {
    setLoading(true);
    api
      .get({ url, headers: { Authorization: `Bearer ${token}` } })
      .then((fetchData) => {
        setResponseData(fetchData.response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        throw new createError({
          name: errorNames.NOT_ALLOWED,
          status: 400,
          message: err,
        });
      });
  }, []);
  const createTask = useCallback((data) => {
    setLoading(true);
    api
      .post({ ...data, url, headers: { Authorization: `Bearer ${token}` } })
      .then((fetchData) => {
        setLoading(false);
        getTasks();
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        throw new createError({
          name: errorNames.NOT_ALLOWED,
          status: 400,
          message: err,
        });
      });
  }, []);
  const deleteTask = useCallback((data) => {
    setLoading(true);
    api
      .del({
        url: `${url}/${data.id}`,
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((fetchData) => {
        setLoading(false);
        getTasks();
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        throw new createError({
          name: errorNames.NOT_ALLOWED,
          status: 400,
          message: err,
        });
      });
  }, []);
  const updateTask = useCallback((data) => {
    setLoading(true);
    api
      .update({
        ...data,
        url: `${url}/${data.id}`,
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((fetchData) => {
        setLoading(false);
        getTasks();
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        throw new createError({
          name: errorNames.NOT_ALLOWED,
          status: 400,
          message: err,
        });
      });
  }, []);
  // useAction(getAllTasks, {
  //   url: location.pathname,
  //   headers: { Authorization: `Bearer ${token}` },
  // });
  // const { todayTasks, expiredTasks, upcomingTasks, isLoading } = useSelector(
  //   (state) => state.tasks
  // );
  return { responseData, loading, error, getTasks, createTask, deleteTask,updateTask };
};
