const SET_LOADING_STATE = "SET_LOADING_STATE";
const SET_LOADING_TRUE = "SET_LOADING_TRUE";
const SET_LOADING_FALSE = "SET_LOADING_FALSE";

let initState = {
	isLoading: false,
};

export const globalLoaderReducer = (state = initState, action) => {
	return {
		...state,
		...action.payload,
	};
};

//ПРОВЕРИТЬ ЭТОТ ВАРИАНТ КОГДА ВСЕ ЗАРАБОТАЕТ

// const setLoadingAction = (prevState) => ({
// 	type: "SET_LOADING_STATE",
// 	payload: {isLoading:!prevState,},
// });

// export const setLoading = () => (dispatch, prevState) => {
// 	dispatch(setLoadingAction(prevState));
// };

const setLoadingFalseAction = () => ({
	type: "SET_LOADING_FALSE",
	payload: { isLoading: false },
});
const setLoadingTrueAction = () => ({
	type: "SET_LOADING_TRUE",
	payload: { isLoading: true },
});

export const setLoadingTrue = () => (dispatch) => {
	dispatch(setLoadingTrueAction());
};
export const setLoadingFalse = () => (dispatch) => {
	dispatch(setLoadingFalseAction());
};
