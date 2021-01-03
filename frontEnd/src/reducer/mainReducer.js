import { authReducer } from "../components/Auth/loginReducer.js";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { globalLoaderReducer } from "./globalLoaderReducer.js";
import { tasksReducer } from "../components/Body/rightPart/reducer/tasksReducer.js";
import { menuReducer } from "../components/Header/menuReducer.js";

export const Reducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  globalLoader: globalLoaderReducer,
  tasks: tasksReducer,
  menu: menuReducer,
});
