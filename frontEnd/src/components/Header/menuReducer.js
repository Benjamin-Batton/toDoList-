
const SET_STATE = "SET_STATE";

let initState = {
  menuState: false,
};

//TODO Create google captcha when deploy app and connect to docker

export const menuReducer = (state = initState, action) => ({
  ...state,
  ...action.payload,
});

export const changeState = (state)=> dispatch => {
  dispatch({
    type: "SET_STATE",
    payload: { menuState: state.menuState },
  })
};


