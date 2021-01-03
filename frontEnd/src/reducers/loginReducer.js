const GET_USER_DATA = "GET_USER_DATA";
const REMOVE_USER_DATA = "REMOVE_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

let initState = {
  userId: null,
  email: null,
  password: null,
  isAuth: true,
  captcha: null,
};

export const authReducer = (state = initState , action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
      case REMOVE_USER_DATA:
      return {
        ...state,
      };
    default:
      return {
        state,
      };
  }
};

export const setAuthUserData = () => ({
  type: "SET_USER_DATA",
  payload: { userId, email, password, isAuth, captcha },
});

export const removeUserData = ()=>({
  type:"REMOVE_USER_DATA",
  payload:{},
});

const getAuthUserData = (userId, email, password, isAuth, captcha) => ({
  type: "GET_USER_DATA",
  payload: { userId, email, password, isAuth, captcha },
});

// const setAuthUserData = () => {
    
// }