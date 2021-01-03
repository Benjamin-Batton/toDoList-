import React from "react";
import { fieldCreator } from "../Common/fieldCreator/fieldCreator.jsx";
import { Input } from "../Common/input/input.jsx";
import { InputField } from "../Common/formsControls/formControls.jsx";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { Button } from "../Common/buttons/button/button.jsx";
import ReCAPTCHA from "react-google-recaptcha";
import style from "../Common/formsControls/formsControls.module.scss";
import authStyle from "./auth.module.scss";
import {
  email,
  required,
  maxLength,
  maxLength16,
  maxLength32,
  confirmPassword,
  minLength,
  minLength8,
  number,
} from "../Common/formsControls/validators.js";
const grecaptchaObject = window.grecaptcha;

const Field = fieldCreator(Input);

const Login = ({ handleSubmit, error, changeForm, formName, isAuth }) => {
  return (
    <>
      <form className={authStyle.form} onSubmit={handleSubmit}>
        <h2 className={authStyle.title}>{formName}</h2>
        <Field
          name={"email"}
          type={"email"}
          label="email"
          validate={[required, email, maxLength32, minLength8]}
          warn={minLength8}
        />

        <Field
          name={"password"}
          type={"password"}
          label="password"
          validate={[required, maxLength32, minLength8]}
          warn={minLength8}
        />
        <div className={authStyle.captcha}>
          <div>
            <ReCAPTCHA
              sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
              grecaptcha={grecaptchaObject}
            />
          </div>
        </div>
        <div className={authStyle.btns}>
          <div>
            <button type={"submit"}>Войти</button>
            {/* <Button buttonVersion={"buttonOrange"} type={'submit'} disabled={error && true} >Войти</Button> */}
          </div>
          <div>
            <Button buttonVersion={"buttonGreen"} onClicked={changeForm}>
              У меня нету аккаунта
            </Button>
          </div>
        </div>
        <div className={style.formSummaryError}>
          {" "}
          {!isAuth.state && isAuth.message}
        </div>

        {error && <div className={style.formSummaryError}>{error}</div>}
      </form>
    </>
  );
};

const mapStateToProps = (store) => ({
  isAuth: store.auth.login,
});

export default compose(
  reduxForm({ form: "login" }),
  connect(mapStateToProps, null)
)(Login);
