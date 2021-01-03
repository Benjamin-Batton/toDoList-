import { api } from "../../../../api/fetchApi/api.js";
const SET_TASKS = "SET_TASKS";
const SET_ERROR_DATA = "SET_ERROR_DATA";
const SET_LOADING = "SET_LOADING";
const TASK_ERROR = "TASK_ERROR";
const SET_IS_REGISTRATION = "SET_IS_REGISTRATION";
const REMOVE_USER_DATA = "REMOVE_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";
import { stopSubmit } from "redux-form";
import { truncate } from "lodash";

let initState = {
  todayTasks: null,
  expiredTasks: null,
  upcomingTasks: null,
  isLoading: false,
  error: null,
  // LocalStorageName: "userData",
  // captcha: null,
};

//TODO Create google captcha when deploy app and connect to docker

export const tasksReducer = (state = initState, action) => ({
  ...state,
  ...action.payload,
});

export const setIsLoading = (state) => {
  return {
    type: "SET_LOADING",
    payload: { isLoading: state },
  };
};

const setTasks = (tasks) => {
  return {
    type: "SET_TASKS",
    payload: { ...tasks, isLoading: true },
  };
};
const taskErrorCreator = (taskError) => {
  return {
    type: "TASK_ERROR",
    payload: { error: taskError },
  };
};
const sortTasksByDate = (data) => {
  // const date = new Date(new Date().toJSON().split("T")[0]);
  const dateToJs = (dateMongo) => new Date(dateMongo);
  const dateSplit = new Date().toJSON().split("T")[0];
  const date = new Date();
  let todayTasks = data.filter((task) => task.time.split("T")[0] === dateSplit);
  let expiredTasks = data.filter((task) => dateToJs(task.time) < date);
  let upcomingTasks = data.filter((task) => dateToJs(task.time) > date);
  return { todayTasks, expiredTasks, upcomingTasks };
};
export const getAllTasks = (data) => (dispatch) => {
  api
    .get({ ...data })
    .then((fetchData) => {
      const tasks = sortTasksByDate(fetchData.response);
      dispatch(setTasks(tasks));
    })
    .catch((err) => {
      throw new Error(err);
    });
};
export const createTask = (data) => (dispatch) => {
  api.post({ ...data }).catch((err) => {
    console.log(err);
    dispatch(taskErrorCreator(err));
  });
};
