import { api } from "../../api/fetchApi/api.js";
import errorNames from "../../const/_const.js";
import createError from "../../utils/createError.js";
const SET_USER_DATA = "SET_USER_DATA";
const SET_VERIFY_DATA = "SET_VERIFY_DATA";
const SET_LOGIN_WITH_ERROR = "SET_LOGIN_WITH_ERROR";
const SET_LOADING = "SET_LOADING";
const SET_IS_EMPTYFETCH_TO_LOCAL_STORAGE = "SET_IS_EMPTYFETCH_TO_LOCAL_STORAGE";
const SET_IS_REGISTRATION = "SET_IS_REGISTRATION";
const SET_REGISTRATION_WITH_ERROR = "SET_REGISTRATION_WITH_ERROR";
const SET_VERIFY_WITH_ERROR = "SET_VERIFY_WITH_ERROR";
const REMOVE_USER_DATA = "REMOVE_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";
import { stopSubmit } from "redux-form";
import { noSubselectionAllowedMessage } from "graphql/validation/rules/ScalarLeafs";

// let initState = {
//   token: null,
//   userId: null,
//   isAuth: false,
//   isRegistration: {
//     state: false,
//     message: null,
//   },
//   verifyData: null,
//   // LocalStorageName: "userData",
//   // captcha: null,
// };
let initState = {
  login: {
    state: false,
    token: null,
    isEmptyFetch: false,
    userId: null,
    message: null,
  },
  registration: {
    state: false,
    message: null,
  },
  verifyData: {
    state: false,
    message: null,
  },
  // LocalStorageName: "userData",
  // captcha: null,
};

const LocalStorageName = "userData";
//TODO Create google captcha when deploy app and connect to docker

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        login: {
          ...state.login,
          ...action.payload,
        },
      };
    case SET_LOADING:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_USER_DATA:
      return {
        ...initState,
      };
    case SET_LOGIN_WITH_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          ...action.payload,
        },
      };
    case SET_IS_EMPTYFETCH_TO_LOCAL_STORAGE:
      return {
        ...state,
        login: {
          ...state.login,
          ...action.payload,
        },
      };
    case SET_REGISTRATION_WITH_ERROR:
      return {
        ...state,
        registration: {
          ...state.registration,
          ...action.payload,
        },
      };
    case SET_VERIFY_WITH_ERROR:
      return {
        ...state,
        verify: {
          ...state.login,
          ...action.payload,
        },
      };
    case SET_VERIFY_DATA:
      return {
        ...state,
        verifyData: {
          ...state.verifyData,
          ...action.payload,
        },
      };
    case SET_IS_REGISTRATION:
      return {
        ...state,
        registration: {
          ...state.registration,
          ...action.payload,
        },
      };
    // case SET_REG_DATA:
    //   return {
    //     ...state,
    //     regData: action.payload.regDatas,
    //   };
    default:
      return {
        ...state,
      };
  }
};

const setAuthData = (token, userId) => {
  return {
    type: "SET_USER_DATA",
    payload: { token, userId, state: true },
  };
};

const setIsRegistration = ({ message }) => ({
  type: "SET_IS_REGISTRATION",
  payload: { message, state: true },
});
const setVerifyData = ({ message }) => ({
  type: "SET_VERIFY_DATA",
  payload: { message, state: true },
});
const setIsFetchToLS = () => ({
  type: "SET_IS_EMPTYFETCH_TO_LOCAL_STORAGE",
  payload: { isEmptyFetch: true },
});

const setLoginDataWithToken = ({ token, userId }) => async (dispatch) => {
  localStorage.setItem(LocalStorageName, JSON.stringify({ token, userId }));
  dispatch(setAuthData(token, userId));
};

export const removeUserData = () => (dispatch) => {
  localStorage.removeItem(LocalStorageName);
  dispatch({
    type: "REMOVE_USER_DATA",
    payload: {},
  });
};

const setLoginWithError = ({ message }) => (dispatch) =>
  dispatch({
    type: "SET_LOGIN_WITH_ERROR",
    payload: { message, state: false },
  });
const setRegistrationWithError = ({ message }) => (dispatch) =>
  dispatch({
    type: "SET_REGISTRATION_WITH_ERROR",
    payload: { message, state: false },
  });
const setVerifyWithError = ({ message }) => (dispatch) =>
  dispatch({
    type: "SET_VERIFY_WITH_ERROR",
    payload: { message, state: false },
  });

const setLoading = (loading) => (dispatch) =>
  dispatch({
    type: "SET_LOADING",
    payload: { loading },
  });

// export const setToken= (token,userId) => (
//   {
//   type: "SET_LOADING",
//   payload: {token,userId,isAuth:true},
// });

export const checkIsAuthUser = () => async (dispatch) => {
  try {
    const localStorageData = JSON.parse(localStorage.getItem(LocalStorageName));
    if (localStorageData && localStorageData.token) {
      dispatch(
        setLoginDataWithToken({
          token: localStorageData.token,
          userId: localStorageData.userId,
        })
      );
    } else {
      dispatch(setIsFetchToLS());
    }
  } catch (error) {
    console.log(error);
    //TODO after deploy delete all console log errors
    //REDIRECT
    // props.setLoading(false)
  }
};

export const loginHandler = (url, formData) => async (dispatch) => {
  api
    .post({ url, body: formData })
    .then((userData) => {
      if (userData.status > 205) {
        dispatch(setLoginWithError(userData.response));
      } else {
        console.log(userData);
        dispatch(setLoginDataWithToken({ ...userData.response.data }));
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(stopSubmit("login", { _error: error }));
      throw new createError({
        name: errorNames.NOT_ALLOWED,
        status: 400,
        message: error.message,
      });
    });
};

export const registrationHandler = (url, formData) => async (dispatch) => {
  console.log(formData, url);
  api
    .post({ url, body: formData })
    .then((data) => {
      if (data.status > 205) {
        dispatch(setRegistrationWithError(data.response));
      } else {
        dispatch(setIsRegistration(data.response));
      }
    })
    .catch((error) => {
      dispatch(stopSubmit("registration", { _error: error }));
      throw new createError({
        name: errorNames.NOT_ALLOWED,
        status: 400,
        message: error.message,
      });
    });
};
export const verifyHandler = (url, verifyData) => async (dispatch) => {
  api
    .get({ url })
    .then((data) => {
      if (data.status > 205) {
        dispatch(setVerifyWithError(data.response));
      }
      dispatch(setVerifyData(data.response));
    })
    .catch((error) => {
      console.log(error);
      throw new createError({
        name: errorNames.NOT_ALLOWED,
        status: 400,
        message: error.message,
      });
    });
};
