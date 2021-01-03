import authStyle from "./auth.module.scss";
import {
  Route,
  withRouter,
  Redirect,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import apiAuth from "../../api/routeApi/auth/_apiAuth.js";
import Registration from "./registration.jsx";
import Login from "./login.jsx";
import Verify from "./verify.jsx";
import {
  registrationHandler,
  loginHandler,
  verifyHandler,
} from "./loginReducer.js";
import { submitHandler } from "./authFormsHandlers.js";
import { Button } from "../Common/buttons/button/button.jsx";
import { useHttp } from "../../hooks/useHttp.js";
import { login } from "./loginReducer.js";
import { withLogin } from "../../hoc/withLogin.jsx";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { InputField } from "../Common/formsControls/formControls.jsx";
import { setAuthUserData } from "./loginReducer.js";
import ReCAPTCHA from "react-google-recaptcha";

import { withSuspens } from "../../hoc/suspens.jsx";
/// РАЗБИТЬ ВСЮ ЛОГИКУ, ПЕРЕМЕСТИТЬ ВСЁ В PAGE
/// компонент reg с стейтом и валидацией вынести, и в зависимости от пропсов отрисовывать тот или иной комонент
const grecaptchaObject = window.grecaptcha;

//REFACTORING, add dinamically get components for this Container
const components = {
  login: (props) => <Login {...props} />,
  registration: (props) => <Registration {...props} />,
  verify: (props) => <Verify {...props} />,
};

const AuthContainer = (props) => {
  const browserUrl = useRouteMatch().url;
  const location = useLocation();
  return <div className={authStyle.authForm}></div>;
};

const mapStateToProps = (store) => ({
  isAuth: store.auth.login.state,
});

export default compose(
  withSuspens,
  withRouter,
  connect(mapStateToProps, { loginHandler, registrationHandler, verifyHandler })
)(AuthContainer);
