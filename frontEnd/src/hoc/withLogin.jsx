// import React, { useCallback } from "react";
// import { connect } from "react-redux";
// import {
//   setErrorData,
//   setAuthUserData,
//   removeUserData,
//   setLoading,
// } from "../components/Auth/loginReducer.js";
// import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// export const withLogin = (WrappedComponent) => {
//   const LocalStorageName = "userData";

//   const Main = (props) => {
//     const logout = () => {
//       props.removeUserData();
//       localStorage.removeItem(LocalStorageName);
//     };

//     const login = async (token, userId) => {
//       try {
//         //TODO change object token and userid
//         localStorage.setItem(
//           LocalStorageName,
//           JSON.stringify({ token: token, userId: userId })
//         );
//         props.setAuthUserData({ token, userId, isAuth: true });
//       } catch (error) {
//         throw new Error(error);
//       }
//     };

//     const request = useCallback(
//       async (url, method = "GET", body = null, headers = {}) => {
//         try {
//           if (body) {
//             body = JSON.stringify(body);
//             headers["Content-Type"] = "application/json";
//           }

//           const response = await fetch(url, { method, body, headers });

//           return response;
//         } catch (e) {
//           props.setErrorData(e);
//           throw e;
//         }
//       },
//       []
//     );

//     const loginChecker = async () => {
//       // props.setLoading(true)
//       try {
//         const localStorageData = JSON.parse(
//           localStorage.getItem(LocalStorageName)
//         );
//         if (localStorageData && localStorageData.token) {
//           login(localStorageData.token, localStorageData.userId);
//           // props.setLoading(false)
//         }
//       } catch (error) {
//         //TODO after deploy delete all console log errors
//         console.log(error);
//         // props.setLoading(false)
//       }
//     };

//     const loginHandler = (url, method, body) => async (elem) => {
//       //// РАЗОБРАТЬСЯ С ВАЛИДАЦИЕЙ ОТ REDUX_FORM's
//       // props.setLoading(true)
//       let allData = request(url, method, body).then((data) => {
//         // ПРИ ОШИБКЕ ВЫВОДИТЬ СООБЩЕНИЕ А ПРИ ПОЛУЧЕНИИ РЕЗУЛЬТАТА ЗАПИСЫВАТЬ ДАННЫЕ КУДА-ЛИБО
//         if (!data.ok) {
//           data.json().then((convertInfo) => {
//             props.setErrorData(convertInfo);
//             // props.setLoading(false)
//           });
//         } else {
//           data.json().then((convertInfo) => {
//             login(convertInfo.token, convertInfo.userId);
//             props.history.push("/");
//             // props.setLoading(false)
//           });
//         }
//       });
//     };

//     const changeFormHandler = (url) => {
//        if(url === 'login'){
//          <Redirect to={"auth/registration"}/>
//        }
//        <Redirect to={"auth/login"}/>
//     };

//     const regHandler = () => async (elem) => {
//       // props.setLoading(true)
//       //// РАЗОБРАТЬСЯ С ВАЛИДАЦИЕЙ ОТ REDUX_FORM's
//       let datas = request(url, method, body).then((data) => {
//         // ПРИ ОШИБКЕ ВЫВОДИТЬ СООБЩЕНИЕ А ПРИ ПОЛУЧЕНИИ РЕЗУЛЬТАТА ЗАПИСЫВАТЬ ДАННЫЕ КУДА-ЛИБО
//         if (!data.ok) {
//           data.text().then((convertInfo) => {
//             props.setErrorData(convertInfo);
//             // props.setLoading(false)
//           });
//         } else {
//           data.text().then((convertInfo) => {
//             setTimeout(() => {
//               <Redirect to={"auth/login"} />;
//             }, 2000);
//             // props.setLoading(false)
//           });
//         }
//       });
//     };
//     return (
//       <WrappedComponent
//         {...props}
//         loginChecker={loginChecker}
//         regHandler={regHandler}
//         loginHanler={loginHandler}
//         error={props.error}
//         logout={logout}
//         request={request}
//       />
//     );
//   };

//   const withStore = connect(null, { setErrorData,setAuthUserData,removeUserData,setLoading })(Main);
//   return withStore;
// };
